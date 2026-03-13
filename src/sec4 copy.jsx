import centerImg from "./assets/img3.jpeg";

export default function TestimonialSection() {
  return (
    <section className="bg-[#f3f3f3] py-10 px-6 lg:px-[7vw]">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* LEFT CARD */}
        {/* <div className="bg-[#e9e9e9] rounded-2xl p-10 text-gray-600 leading-relaxed h-[350px] items-center"> */}
<div className="bg-[#E6E6E6] rounded-2xl p-15 text-gray-600 leading-relaxed flex flex-col ">
          <p className="text-xl text-black-100 font-light ">
            "Danlee went above and beyond in helping us choose the perfect
            style and color for our new vanity, offering thoughtful guidance
            every step of the way."
          </p>

          <p className="mt-10 text-md text-black-400 ">Name</p>

        </div>


        {/* CENTER IMAGE */}
        <div className="group relative overflow-hidden rounded-2xl">

          <img
            src={centerImg}
            className="w-full h-[350px]  object-cover"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-center text-white px-6">

            <div>
              <h3 className="text-3xl mb-4">Speaks For Itself</h3>

              <p className="text-sm">
                Every project we take on is designed around the client’s needs
                and built with meticulous attention to detail.
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT CARD */}
<div className="bg-[#E6E6E6] rounded-2xl p-15 text-gray-600 leading-relaxed flex flex-col ">

          <p className="text-xl text-black-100 font-light">
            "Danlee went above and beyond in helping us choose the perfect
            style and color for our new vanity, offering thoughtful guidance
            every step of the way."
          </p>

          <p className="mt-10 text-md text-black-400">Name</p>

        </div>

      </div>


      {/* BUTTON */}
      <div className="flex justify-center mt-16 mb-16">
        <button className="bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition">
          See More Projects
        </button>
      </div>

    </section>
  );
}