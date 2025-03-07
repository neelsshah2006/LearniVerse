import React from 'react'
import Navbar from '@/components/Navbar'

const index = () => {
  return (
    <div>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>

      <div className="h-screen bg-green-200 flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide mb-8">
          Learn. Mentor. Earn.
        </h1>

        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Peer-to-Peer
          <br />
          Learning Economy
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join a community where knowledge has value. Earn coins by
          mentoring others, then spend them to learn new skills from experts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Join Learniverse
          </button>
          <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors">
            Browse Cohorts
          </button>
        </div>

        <a
          href="#"
          className="text-gray-600 hover:text-gray-800 transition-colors underline underline-offset-4"
        >
          Learn more
        </a>
      </div>
    </div>
  )
}

export default index