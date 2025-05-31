import React from 'react';

function BentonFooter() {
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
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AnimeHub</h3>
              <p className="text-gray-400 mb-4">
                Discover and explore your favorite anime series with our curated collection of the best animations from around the world.
              </p>
              <div className="flex space-x-4">
                
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Popular Anime</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Releases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Top Rated</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Genres</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 @waiyneee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default BentonFooter