import Link from 'next/link';

const navbar = () => {
  return (
    <div className="bg-aq-800 w-full h-17 flex items-center sticky">
           <Link className='text-3xl font-bold !m-4' href="/">
        LearniVerse
      </Link>
      <div className='gap-10 flex center !ml-70 font-semibold '>
            <Link className='hover:text-blue-700' href="/">
                Cohorts
            </Link>
            <Link className='hover:text-blue-700' href="/">
                Doubts
            </Link>
            <Link className='hover:text-blue-700' href="/">
            WorkShops
            </Link>
      </div>
      <div className='!ml-60 gap-5 flex  items-center text-center'>
      <button className='border-2 rounded-2xl !p-3 w-25 hover:bg-red-400 cursor-pointer'>Login</button>
      <button className='border-2 rounded-2xl !p-3 w-25 hover:bg-green-400 hover:text-black cursor-pointer bg-black text-white'>SignUp</button>
      </div>
     
     



    </div>
  )
}

export default navbar
