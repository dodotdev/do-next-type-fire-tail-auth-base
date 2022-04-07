import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as <pre>{JSON.stringify(session, null, 2)}</pre> <br />
        <button onClick={() => signOut()}>Sign out</button>
        <div>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>
        Sign in {process.env.GITHUB_SECRET}
      </button>
      <div>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </>
  );
}
