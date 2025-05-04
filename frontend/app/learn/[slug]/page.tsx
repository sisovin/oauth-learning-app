import React from 'react';
import { useRouter } from 'next/router';

const LearningPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Learning Page: {slug}</h1>
      <p className="text-lg mb-4">
        This is a dynamic learning page for the topic: {slug}.
      </p>
      <p className="text-lg">
        Explore the content and learn more about {slug}.
      </p>
    </div>
  );
};

export default LearningPage;
