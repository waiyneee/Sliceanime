import React from 'react';

function Bento() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-white via-purple-50 to-white flex flex-col items-center justify-center gap-8 py-16">
        <h1 className="font-extrabold text-2xl text-center">
          Select from your <span>favourite</span> Anime
        </h1>
        {/* Grid container with explicit max-width and height */}
        <div className="p-3 w-full max-w-5xl rounded-xl shadow-md">
          <div className="grid grid-cols-3 gap-4">
            {/* Item 1 - Spans 2 columns */}
            <div className="col-span-2 bg-white rounded-lg shadow-sm h-64">
              <img
                src="/assets/bleach.gif"
                alt="Anime GIF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-sm h-64">
              <img
                src="/assets/jjk.gif"
                alt="Anime GIF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-sm h-64">
              <img
                src="/assets/naruto.gif"
                alt="Anime GIF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Item 4 - Spans 2 columns */}
            <div className="col-span-2 bg-white rounded-lg shadow-sm h-64">
              <img
                src="/assets/download.gif"
                alt="Anime GIF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Item 5 */}
            <div className="bg-white rounded-lg shadow-sm h-64">
              <img
                src="/assets/gif1.gif"
                alt="Anime GIF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Item 6 */}
            <div className="bg-white rounded-lg shadow-sm h-64">
              <img
                src="/assets/gifd.gif"
                alt="Anime GIF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Item 7 */}
            <div className="bg-white rounded-lg shadow-sm h-64">
              <img
                src="/assets/jjkitadori.gif"
                alt="Anime GIF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Bento