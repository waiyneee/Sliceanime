import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function AnimeDescriptor() {
  const { id } = useParams();

  const [animeInfo, setAnimeInfo] = useState({});
  const [castList, setCastList] = useState([]);
  const [expandText, setExpandText] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = animeInfo;

  const fetchAnimeInfo = async (animeId) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
    const data = await res.json();
    setAnimeInfo(data.data);
  };

  const fetchCastList = async (animeId) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
    const data = await res.json();
    setCastList(data.data);
  };

  useEffect(() => {
    fetchAnimeInfo(id);
    fetchCastList(id);
  }, [id]);

  return (
    <div className="p-12 bg-gray-200">
      <h1 className="inline-block text-4xl mb-6 cursor-pointer bg-zinc-500 bg-clip-text text-transparent transition-all duration-300 hover:skew-x-[-3deg]">
        {title}
      </h1>

      <div className="bg-white rounded-2xl p-8 border-4 border-gray-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src={images?.jpg.large_image_url} alt="Anime Poster" className="rounded-md" />
          </div>
          <div className="flex flex-col justify-between space-y-2">
            <p><span className="font-semibold text-gray-800">Air Time:</span> <span>{aired?.string}</span></p>
            <p><span className="font-semibold text-gray-800">Censor Rating:</span> <span>{rating}</span></p>
            <p><span className="font-semibold text-gray-800">Leaderboard Rank:</span> <span>{rank}</span></p>
            <p><span className="font-semibold text-gray-800">Points:</span> <span>{score}</span></p>
            <p><span className="font-semibold text-gray-800">Votes:</span> <span>{scored_by}</span></p>
            <p><span className="font-semibold text-gray-800">Fan Score:</span> <span>{popularity}</span></p>
            <p><span className="font-semibold text-gray-800">Current Status:</span> <span>{status}</span></p>
            <p><span className="font-semibold text-gray-800">Adapted From:</span> <span>{source}</span></p>
            <p><span className="font-semibold text-gray-800">Seasonal Drop:</span> <span>{season}</span></p>
            <p><span className="font-semibold text-gray-800">Watch Length:</span> <span>{duration}</span></p>
          </div>
        </div>

        <p className="mt-8 text-gray-700 leading-7">
          {expandText ? synopsis : synopsis?.substring(0, 450) + '...'}
          <button onClick={() => setExpandText(!expandText)} className="ml-2 text-green-600 font-semibold">
            {expandText ? 'Collapse' : 'Expand'}
          </button>
        </p>
      </div>

      <h3 className="inline-block mt-12 text-2xl bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent">
        Watch Trailer
      </h3>
      <div className="flex justify-center items-center my-6">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title="Anime Trailer"
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="[border:5px_solid_#e5e7eb] p-6 rounded-lg bg-white"
          ></iframe>
        ) : (
          <h3 className="text-lg">Trailer not available</h3>
        )}
      </div>

      <h3 className="inline-block mt-12 text-2xl bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent">
        Cast
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white p-6 mt-4 rounded-2xl border-4 border-gray-200">
        {castList?.map((actor, idx) => {
          const { role } = actor;
          const { images, name, mal_id } = actor.character;
          return (
            <Link to={`/character/${mal_id}`} key={idx}>
              <div className="bg-gray-200 p-2 rounded-md hover:-translate-y-1 transition-transform">
                <img src={images?.jpg.image_url} alt="Character" className="w-full" />
                <h4 className="py-2 text-gray-800 font-semibold">{name}</h4>
                <p className="text-green-600">{role}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AnimeDescriptor;
