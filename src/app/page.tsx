
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main>

      {hello ? hello.greeting : "Loading tRPC query..."}


      {session && <span>Logged in as {session.user?.name}</span>}

      {/* <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link> */}



      {/* <CrudShowcase /> */}
    </main>
  );
}
