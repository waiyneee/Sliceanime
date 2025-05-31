import React from 'react';





function NavBar() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="text-3xl font-extrabold text-white tracking-wide hover:tracking-widest transition-all duration-500">
          Sliceanime
        </div>

        {/* Search */}
        <div className="flex-1 w-full max-w-md">
          <input
            type="text"
            placeholder="Search anime"
            className="w-full px-4 py-2 bg-zinc-300 rounded-lg border-2 border-transparent focus:border-white outline-none transition duration-300 ease-in-out"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-xl border-2 border-transparent hover:border-white hover:scale-105 transition duration-300">
            Airing
          </button>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-xl border-2 border-purple-500 hover:border-purple-800 hover:scale-105 transition duration-300">
            Upcoming
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;
