import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";

export default function WorkSection() {
  return (
    <section id="our-work" className="bg-[#f3f3f3] py-10 px-6 lg:px-[7vw]">

      {/* TITLE */}
      <div className="mb-16 max-w-[1100px]">
        <h4 className=" text-4xl md:text-5xl mb-6 text-black flex flex-col md:flex-row ">
          <span className="text-5xl md:text-6xl font-alex mr-4">Our Work</span>
          Speaks For Itself
        </h4>

        <p className="text-gray-500 text-lg">
          Every project we take on is designed around the client’s needs and
          built with meticulous attention to detail. Explore a selection of our
          recent custom cabinetry projects to see how craftsmanship and design
          come together.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* BIG IMAGE */}
        <div className="group relative overflow-hidden rounded-2xl md:col-span-2">

          <img
            src={img1}
            className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">

            <div className="text-white opacity-0 group-hover:opacity-100 text-center transition duration-500">

              <h3 className="text-3xl mb-3">Speaks For Itself</h3>
              <p className="max-w-[250px] text-sm">
                Every project we take on is designed around the client’s needs
                and built with meticulous attention to detail.
              </p>

            </div>
          </div>
        </div>

        {/* SIDE IMAGE */}
        <div className="group relative overflow-hidden rounded-2xl">

          <img
            src={img2}
            className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">

            <div className="text-white opacity-0 group-hover:opacity-100 transition duration-500 text-center">
              <h3 className="text-2xl">Project View</h3>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}