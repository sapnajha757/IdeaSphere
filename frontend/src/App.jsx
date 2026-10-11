import React from 'react';
import Navbar from './components/Navbar';
import IdeaCard from './components/IdeaCard';
import { useState } from 'react';

const App = () => {
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [ideas, setIdeas]= useState([
      
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
]);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newCategory, setNewCategory] = useState("Education");
    const filteredIdeas = ideas.filter((idea)=>
        idea.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onCreateClick={()=> setShowForm(true)}/>
      
      <input
      className="mb-6 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
      value={search}
      onChange={(event)=> setSearch(event.target.value)}
      placeholder="Search ideas..."
      
      />

      <main className="mx-auto max-w-6xl p-6">
        {showForm && (
          <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">Create a new idea</h2>
           <input
           type="text"
           value={newTitle}
           onChange={(event)=>setNewTitle(event.target.value)}
           placeholder="Enter your idea title"
           className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-purple-500"
           />
          <textarea
          value={newDescription}
          onChange={(event)=>setNewDescription(event.target.value)}
          placeholder="Describe your idea..."
          rows={4}
          className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-purple-500"
          />
          <select 
          value={newCategory}
          onChange={(event)=>setNewCategory(event.target.value)}
          className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          >
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
            <option value="Community">Community</option>
            <option value="Technology">Technology</option>
          </select>
          <button
          onClick={()=>{
           if(newTitle.trim()===""||newDescription.trim()===""){
            alert("Please enter a title and description");
            return;
           }
           const newIdeas = {
            id: Date.now(),
            title: newTitle,
            description: newDescription,
            category: newCategory,
            likes: 0
           };
           setIdeas([...ideas, newIdeas]);
           setNewTitle("");
           setNewDescription("");
           setShowForm(false);
          }}
          className="mt-4 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
          >Submit Ideas</button>
          </div>
        )}
        
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
