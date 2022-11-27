'use client';

import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

export default function AuthPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div>
        <h1 className="loading text-xl font-medium">Loading...</h1>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div>
        <h1 className="text-xl font-medium">Unauthenticated</h1>
        <div className="input-group">
          <span>
            <FaGoogle />
          </span>
          <button className="btn" onClick={() => signIn('google')}>
            Sign in with Google
          </button>
        </div>

        <p>Not signed in</p>
      </div>
    );
  }

  if (status === 'authenticated') {
    return (
      <div>
        <h1 className="text-xl font-medium">Authenticated</h1>
        <button className="btn" onClick={() => signOut()}>
          Sign out
        </button>

        <p>Name: {session.user?.name}</p>
        <p>Email: {session.user?.email}</p>
        <p>
          <a className="link" href={session.user?.image ?? ''}>
            {session.user?.image}
          </a>
        </p>
        <Image src={session.user?.image ?? ''} alt="user image" width={96} height={96} />
      </div>
    );
  }
}
