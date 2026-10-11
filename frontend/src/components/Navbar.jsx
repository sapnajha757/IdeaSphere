
function Navbar({onCreateClick}) {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      <h1 className="text-2xl font-bold text-purple-700">
        IdeaSphere 💡
      </h1>

      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-lg text-slate-600 hover:text-purple-500"
        >
          Explore
        </a>

        <button onClick={onCreateClick}
        className="text-lg text-slate-600 hover:text-purple-500"
        >
          Create Idea
        </button>

        <button className="rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
