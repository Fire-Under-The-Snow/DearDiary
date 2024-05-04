
import { getSession, logout } from "@/lib/lib";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();


  return (
    <>
      <p>tenzin</p>
      <pre>Welcome {session?.user.username}</pre>
      <form
        action={async () => {
          "use server";
          await logout();
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
