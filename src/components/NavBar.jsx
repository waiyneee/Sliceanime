import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchAnime, setSearch, clearSearch } from '../features/anime/animeSlice.js';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const goToAiring = () => {
    navigate('/Airing');
  };

  const goToPopular = () => {
    navigate('/Popular');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(setSearch(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      dispatch(searchAnime(searchInput)).unwrap().catch((err) => {
        console.error('Search API error:', err);
      });
    } else {
      dispatch(clearSearch());
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-3xl font-extrabold text-white tracking-wide hover:tracking-widest transition-all duration-500">
          Sliceanime
        </div>

        {/* Search */}
        <form onSubmit={handleSubmit} className="flex-1 w-full max-w-md">
          <input
            type="text"
            placeholder="Search anime"
            value={searchInput}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-300 rounded-lg border-2 border-transparent focus:border-white outline-none transition duration-300 ease-in-out"
          />
        </form>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={goToAiring}
            className="bg-white text-black font-semibold px-4 py-2 rounded-xl border-2 border-transparent hover:border-white hover:scale-105 transition duration-300"
          >
            Airing
          </button>
          <button
            onClick={goToPopular}
            className="bg-white text-black font-semibold px-4 py-2 rounded-xl border-2 border-purple-500 hover:border-purple-800 hover:scale-105 transition duration-300"
          >
            Popular
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;