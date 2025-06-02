import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Bento from './Bento';
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();
  const { searchResults, isSearch, error } = useSelector((state) => state.anime);

  const handleClick = () => {
    navigate('/Popular');
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-purple-50 to-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl w-full items-center">
          {/* Left Content */}
          <div className="p-6 rounded-md">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Meet The new <br /> Sliceanime
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Discover vibrant worlds and compelling stories that bring your favorite characters to life
              and enjoy sharing the lists with your friends.
            </p>
            <button
              onClick={handleClick}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:scale-105 transition"
            >
              Explore Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/assets/AnimeWaifu.jpg"
              alt="Anime figure"
              className="max-h-[500px] rounded-2xl shadow-lg border border-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Search Results */}
      {isSearch && (
        <div className="p-8 max-w-7xl w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Results</h2>
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : searchResults?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchResults.map((anime) => (
                <div key={anime.mal_id} className="bg-white p-4 rounded-md shadow-md">
                  <img
                    src={anime.images?.jpg?.image_url || 'https://via.placeholder.com/150'}
                    alt={anime.title || 'Anime'}
                    className="w-full h-48 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{anime.title || 'Unknown Title'}</h3>
                  <p className="text-sm text-gray-600">{anime.type || 'Unknown Type'}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No results found.</p>
          )}
        </div>
      )}

      {/* Scroll Item */}
      <div className="relative overflow-hidden h-60 bg-gradient-to-r from-white via-purple-50 to-white p-8">
        <img
          src="/assets/scrollimg.jpg"
          alt="kitsune cat"
          className="wheel-roll absolute left-0 border-pink-600 border-4 rounded-full h-48 w-48 object-cover"
        />
      </div>

      <Bento />
      <Footer />
    </>
  );
}

export default Home;