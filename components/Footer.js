import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">LearniVerse</h2>
            <p className="text-gray-400">Empowering Peer-to-Peer Learning</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} LearniVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
