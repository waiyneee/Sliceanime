import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimePictures } from '../features/anime/animeSlice.js';

function Character() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pictures } = useSelector((state) => state.anime);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(getAnimePictures(id));
  }, [id]);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-8 relative">
      <div className="absolute top-8 left-8">
        <Link to="/" className="text-red-500 font-semibold flex items-center gap-2">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>

      <div className="bg-white p-6 mt-16 border-4 border-gray-300 rounded-xl">
        <img
          src={pictures[index]?.jpg.image_url}
          alt="Character"
          className="w-[350px] rounded-md"
        />
      </div>

      <div className="flex flex-wrap gap-3 mt-8 p-6 bg-white border-4 border-gray-300 rounded-xl w-[80%] justify-center">
        {pictures.map((pic, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer transition-transform duration-300 rounded-md overflow-hidden ${
              i === index ? 'scale-110 border-green-500 grayscale-0' : 'scale-100 border-gray-300 grayscale'
            }`}
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
            }}
          >
            <img
              src={pic.jpg.image_url}
              alt="Character thumb"
              className="w-24 h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Character;