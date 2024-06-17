
import React from 'react'
import SmallQuote from './SmallQuote';
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/take", { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  };
const Data = async() => {
    const posts = await getData();
    console.log(posts)
  return (
    <div>
         {posts.map((post, index) => (
            <div  key={index}>
       <SmallQuote post={post}/> </div>
      ))}</div>
  )
}

export default Data