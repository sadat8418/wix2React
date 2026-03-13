import { useState } from "react";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img1.jpeg";
import img4 from "./assets/img2.jpeg";

export default function Sec2() {
  const [active, setActive] = useState(null);

  const items = [
    { img: img1, title: "Custom Kitchens" },
    { img: img2, title: "Luxury Cabinets" },
    { img: img3, title: "Commercial Spaces" },
    { img: img4, title: "Interior Design" },
  ];

  return (
    <section id="our-services" className="py-20 px-6 lg:px-[5vw] bg-white">
      <div className="mb-16 max-w-[1100px]">
        <h4 className="  text-4xl md:text-5xl mb-6 text-black ">
          <span className="text-5xl md:text-6xl font-alex mr-4 ">Our Craft</span>
         <br className="block md:hidden"/>
         Cabinetry for Homes & Businesse
        </h4>

        <p className="text-gray-500 text-lg">
          Every project we take on is designed around the client’s needs and
          built with meticulous attention to detail. Explore a selection of our
          recent custom cabinetry projects to see how craftsmanship and design
          come together.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {items.map((item, index) => {

          const isActive = active === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`relative overflow-hidden cursor-pointer rounded-xl transition-transform duration-500
              ${isActive ? "scale-105 z-10" : "scale-100"}`}
            >

              {/* Image */}
              <img
                src={item.img}
                className="w-full h-[420px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                <h2
                  className={`text-white font-bold transition-all duration-500
                  ${isActive ? "text-4xl scale-107" : "text-3xl"}`}
                >
                  {item.title}
                </h2>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}