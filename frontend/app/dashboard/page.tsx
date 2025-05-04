import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome, {session.user?.name || 'User'}!</p>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign out
      </button>
    </div>
  );
};

export default DashboardPage;
