'use client'
import { useState } from "react";
import { IoSend } from "react-icons/io5";
const handleSubmit = async () => {
  if (quote.trim() === '') return;

  try {
    const response = await fetch('/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quote }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Quote saved:', data);
      setQuote(''); // Clear the input field
    } else {
      console.error('Failed to save quote');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const  Searchinput =async () => {
  const [quote, setQuote] = useState('');
  return (
    <div className='  w-96 flex items-center  bg-[#1F2022] justify-around rounded-md '>
        
        <input value={quote}
        onChange={(e) => setQuote(e.target.value)} className=' w-64  bg-[#1F2022] px-2 py-4 text-sm text-white outline-none' type="text" placeholder='Enter your Quote' />
       <IoSend className=' hover:text-white transition ' onClick={handleSubmit} />
    </div>
  )
}

export default Searchinput