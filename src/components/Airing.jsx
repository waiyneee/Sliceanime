import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAiringAnime } from '../features/anime/animeSlice';
import NavBar from './NavBar';
import Footer from './Footer';

function Airing({ rendered }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAiringAnime());
  }, [dispatch]);

  const { airingAnime, isSearch, searchResults } = useSelector((state) => state.anime);

  const animeToRender =
    !isSearch && rendered === 'airing' ? airingAnime : searchResults;

  return (
    <>
      <NavBar />

      <div className="flex w-full bg-white border-t-4 border-gray-200 px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {animeToRender?.map((anime) => (
            <Link
              to={`/anime/${anime.mal_id}`}
              key={`airing-${anime.mal_id}`}
              className="rounded-md border-4 border-gray-200 overflow-hidden h-[500px] transition-transform hover:scale-[1.02]"
            >
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-full object-cover rounded"
              />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Airing;
