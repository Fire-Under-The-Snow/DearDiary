import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const secretKey = "tenzindelek";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 min from now")
    .sign(key);
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
  return payload;
}
export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  redirect("http://localhost:3000/signin"); // change this when deploy
}
export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

//   not working currently
//   export async function updateSession(request) {
//     const session = request.cookies.get("session")?.value;
//     if (!session) return;

//     // Refresh the session so it doesn't expire
//     const parsed = await decrypt(session);
//     parsed.expires = new Date(Date.now() + 10 * 1000);
//     const res = NextResponse.next();
//     res.cookies.set({
//       name: "session",
//       value: await encrypt(parsed),
//       httpOnly: true,
//       expires: parsed.expires,
//     });
//     return res;
// }
