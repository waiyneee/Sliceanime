
import NavBar from './NavBar'

import BentonFooter from './BentonFooter'

function Home() {
  return (
    <>
     <NavBar />
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-purple-50 to-white p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl w-full items-center">
    
    {/* Left Content */}
    <div className="p-6 rounded-md">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Meet The new  <br /> Sliceanime
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Discover vibrant worlds and compelling stories that bring your favorite characters to life
        and enjoy sharing the lists with your friends.
      </p>
      <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:scale-105 transition">
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
 {/* scroll item */}
 <div className="relative overflow-hidden h-60 bg-gradient-to-r from-white via-purple-50 to-white p-8">
  <img 
    src="/assets/scrollimg.jpg"
    alt="kitsune cat"
    className="wheel-roll absolute left-0 border-pink-600 border-4 rounded-full h-48 w-48 object-cover"
  />
</div>

<BentonFooter />









    </>
  )
}

export default Home
