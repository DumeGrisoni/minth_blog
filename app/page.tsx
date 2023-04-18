import Header from '@/components/Header';
import React from 'react';

function Home() {
  return (
    <div>
      <h1 className="text-7xl">
        <Header
          text="Application Next regroupant les differentes application que j'ai créé."
          title="Minth Blog"
        />
      </h1>
    </div>
  );
}

export default Home;
