
import { useState } from "react";
import "./index.css";

function IdeaCard({ title, description, category, likes }) {
  // Store the current like count
  const [currentLikes, setCurrentLikes] = useState(likes);

  // Track whether the user liked this idea
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    if (isLiked) {
      // Remove the like
      setCurrentLikes((previousLikes) => previousLikes - 1);
      setIsLiked(false);
    } else {
      // Add the like
      setCurrentLikes((previousLikes) => previousLikes + 1);
      setIsLiked(true);
    }
  }

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/80 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full border border-purple-100">
            {category}
          </span>

          <span className="text-sm font-semibold text-slate-500 flex items-center gap-1">
            ❤️ {currentLikes}
          </span>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-2">
          {title}
        </h2>

        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <button
          onClick={handleLike}
          className={`w-full py-2.5 px-4 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
            isLiked
              ? "bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200"
              : "bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
          }`}
        >
          {isLiked ? "Unlike 💔" : "Like ❤️"}
        </button>
      </div>
    </article>
  );
}

const ideas = [
  {
    id: 1,
    title: "AI Study Planner",
    description:
      "Create personalized study plans using AI to optimize learning speed.",
    category: "Education",
    likes: 12,
  },
  {
    id: 2,
    title: "Smart Plant Monitor",
    description:
      "Monitor plant health real-time using IoT sensors and smart notifications.",
    category: "IoT",
    likes: 8,
  },
  {
    id: 3,
    title: "Hackathon Team Finder",
    description:
      "Find teammates with complementary skills for your next coding project.",
    category: "Networking",
    likes: 25,
  },
];

function App() {
  // Store the user's search text
  const [searchTerm, setSearchTerm] = useState("");

  const [sortBy, setSortBy] = useState("default");

  // Filter ideas by title, description, or category
  const filteredIdeas = ideas.filter((idea) => {
    const search = searchTerm.toLowerCase().trim();

    return (
      idea.title.toLowerCase().includes(search) ||
      idea.description.toLowerCase().includes(search) ||
      idea.category.toLowerCase().includes(search)
    );
  });

  const sortedIdeas = sortBy == "mostLiked" ? [...filteredIdeas].sort((a, b)=>b.likes-a.likes): filteredIdeas;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mb-3">
            IdeaSphere 💡
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Discover and vote on innovative project ideas created by the
            community.
          </p>
        </header>

        {/* Search input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by title, description or category..."
          className="w-full rounded-xl border border-slate-300 bg-white p-3 mb-8 outline-none focus:ring-2 focus:ring-purple-500"
        />

        <select
        value = {sortBy}
        onChange = {(event) => setSortBy(event.target.value)}
        className = "w-full rounded-xl border border-slate-300 bg-white p-3 mb-8"
        >
          <option value="default" >Default order</option>
          <option value="mostLiked">Most Liked</option>
        </select>

        {/* Render filtered ideas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedIdeas.map((idea) => (
            <IdeaCard
              key={idea.id}
              title={idea.title}
              description={idea.description}
              category={idea.category}
              likes={idea.likes}
            />
          ))}
        </div>

        {/* Empty search results */}
        {filteredIdeas.length === 0 && (
          <p className="text-center text-slate-500 mt-8">
            No ideas found. Try another search!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
