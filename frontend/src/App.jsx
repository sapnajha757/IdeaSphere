import React from 'react';
import Navbar from './components/Navbar';
import IdeaCard from './components/IdeaCard';
import { useState } from 'react';
const ideas = [
  {
    id: 1,
    title: "AI Study Planner",
    description: "Create personalized study plans using AI.",
    category: "Education",
    likes: 12
  },
  {
    id: 2,
    title: "Smart Dustbin",
    description: "A dustbin that separates waste automatically.",
    category: "Environment",
    likes: 8
  },
  {
    id: 3,
    title: "Campus Connect",
    description: "Connect students with similar interests.",
    category: "Community",
    likes: 15
  }
];

const App = () => {
    const [search, setSearch] = useState("");
    const filteredIdeas = ideas.filter((idea)=>
        idea.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <input
      className="mb-6 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
      value={search}
      onChange={(event)=> setSearch(event.target.value)}
      placeholder="Search ideas..."
      
      />

      <main className="mx-auto max-w-6xl p-6">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">
          Explore Ideas
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredIdeas.length>0?(
          
          filteredIdeas.map((idea) => (
            <IdeaCard
              key={idea.id}
              title={idea.title}
              category={idea.category}
              description={idea.description}
              likes={idea.likes}
            />
          )))
        :(
            <p className="col-span-full py-10 text-center text-slate-500">
                No ideas found. Try another Search!
            </p>
        )}
        </div>
      </main>
    </div>
  );
};

export default App;
