// pages/index.js
export default function Header() {
    return (
      <header className="bg-black text-white py-4 px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="TrapStation Logo" className="w-auto md:w-auto" />
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-yellow-500 text-xl ">Home</a>
            <a href="/dreads" className="hover:text-yellow-500 text-xl">Dreads Style</a>
            <a href="/music" className="hover:text-yellow-500 text-xl">Music Production</a>
            <a href="/digital" className="hover:text-yellow-500 text-xl">Music Distribution</a>
            <a href="#" className="hover:text-yellow-500 text-xl">About Us</a>
            <a href="#" className="hover:text-yellow-500 text-xl">Contact Us</a>
          </nav>
        </header>
  
    );
  }
  