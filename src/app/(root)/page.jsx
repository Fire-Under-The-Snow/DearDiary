
import { getSession, logout } from "@/lib/lib";
export default async function Home() {
  const session = await getSession();
  console.log(session)

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
