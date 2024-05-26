
import { getSession} from '@/lib/lib';
import { redirect } from 'next/navigation';
export default async function Home() {
  const session = await getSession();
  
  if(!session)
    {
      redirect("http://localhost:3000/signin"); 
    }

  return (
   <>
   helo
   </>

  );
}
