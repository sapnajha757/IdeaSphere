import React from 'react';
import  { useState } from 'react';
const IdeaCard = ({ title, description, category, likes: initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
          {category}
        </span>

        <span className="text-sm text-slate-500">
          ❤️ {likes} likes
        </span>
      </div>

      <h2 className="mb-2 text-xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mb-4 text-sm text-slate-600">
        {description}
      </p>

      <button
      onClick={()=> setLikes(likes+1)}
      className="w-full rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
        Like ❤️
      </button>

    </article>
  );
};

export default IdeaCard;
