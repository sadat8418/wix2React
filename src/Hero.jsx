import logo from './assets/logo.png';
import bg from './assets/hero.jpeg'; // 1. Import the image
import './App.css';
import { useState } from "react";


export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="min-h-[90vh] md:min-h-[130vh] w-full ">

      <img
        
        src={bg}
        // sepia-20 opacity-46 
        className="absolute h-[90vh] md:min-h-[130vh]  w-full     "
      />
<div className="absolute inset-0  h-[90vh] md:min-h-[130vh] bg-black/30"></div>

    

      {/* NAVBAR */}
      {/* <nav className="mr-0 lg:mr-[13vw] ml-0 lg:ml-[13vw]  relative z-10 flex items-center justify-between px-16 py-6 text-[#e6d3a3]">

        <div className="flex gap-10 text-xl">
          <a className="hover:text-white transition">Our Services</a>
          <a className="hover:text-white transition">Design</a>
        </div>

        <div >
            <img
        
        src={logo}
        className="  sepia-80 invert-70 hover:invert-100  flex items-center inset-0 w-full "
      />
        </div>

        <div className="flex items-center gap-10 text-xl">
          <a className="hover:text-white transition ">Our Work</a>
          <a className="hover:text-white transition">About</a>

          <button className="  border border-[#e6d3a3] px-10 py-3 hover:bg-[#e6d3a3] hover:text-black transition rounded">
            Contact
          </button>
        </div>

      </nav> */}
       <nav className=" z-10  lg:mr-[13vw]  lg:ml-[13vw] relative  flex items-center justify-between py-6 px-6 lg:px-16 lg:py-10  text-[#e6d3a3]">

      {/* LEFT MENU (Desktop) */}
      <div className="hidden lg:flex gap-10 text-xl">
        <a className="hover:text-white transition">Our Services</a>
        <a className="hover:text-white transition">Design</a>
      </div>

      {/* LOGO */}
      <div>
        <img
          src={logo}
          className="sepia-80 invert-70 hover:invert-100 w-28 lg:w-auto"
        />
      </div>

      {/* RIGHT MENU (Desktop) */}
      <div className="hidden lg:flex items-center gap-8 text-lg">
        <a className=" hover:text-white transition ">Our Work</a>
        <a className="hover:text-white transition">About</a>

        <button className="border border-[#e6d3a3] px-10 py-3 hover:bg-[#e6d3a3] hover:text-black transition rounded">
          Contact
        </button>
      </div>

      {/* MOBILE HAMBURGER */}
      <div
        className="lg:hidden cursor-pointer "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="space-y-2">
          <span className="block w-7 h-[2px] bg-[#e6d3a3]"></span>
          <span className="block w-7 h-[2px] bg-[#e6d3a3]"></span>
          <span className="block w-7 h-[2px] bg-[#e6d3a3]"></span>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-[120%] left-0 w-full bg-black/40 backdrop-blur-lg flex flex-col items-center gap-6 py-8 text-xl lg:hidden rounded">

          <a className="hover:text-white transition">Our Services</a>
          <a className="hover:text-white transition">Design</a>
          <a className="hover:text-white transition">Our Work</a>
          <a className="hover:text-white transition">About</a>

          <button className="border border-[#e6d3a3] px-10 py-3 hover:bg-[#e6d3a3] hover:text-black transition rounded">
            Contact
          </button>

        </div>
      )}
    </nav>


      {/* HERO TEXT */}

       {!menuOpen && (
      <div className=" relative z-10 flex h-[60%] lg:h-[80%] md:mt-[25vh] flex-col items-center justify-center text-center text-white px-6">

        <h2 className=" font-alex-brush text-5xl md:text-7xl  text-white mb-2">
          Custom Cabinetry,
        </h2>

        <h3 className="text-5xl md:text-6xl font-bold mb-6">
          Crafted in the Midwest
        </h3>

        <p className="max-w-3xl text-lg md:text-lg text-white/80">
          Distinctive designs custom-made for kitchens, homes, and commercial
          spaces, built with superior craftsmanship and a commitment to
          exceptional service.
        </p>
<div className="mt-[5vh]  md:mt-[20vh] ">
<button className="border border-[#e6d3a3] px-10 py-3 bg-[#e6d3a3] hover:bg-white text-black hover:text-black transition rounded">
            Contact Us
          </button>
      </div></div>
 )}
    </section>
  );
}