import React from 'react';
import { signIn } from 'next-auth/react';

const OAuthProviders = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <button
        onClick={() => signIn('google')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
      <button
        onClick={() => signIn('github')}
        className="bg-gray-800 text-white px-4 py-2 rounded mt-2"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default OAuthProviders;
