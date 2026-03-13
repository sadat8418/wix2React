import cabinet from "./assets/img3.jpeg";
export default function Parallax() {
  return (
    <>
      {/* TEXT SECTION */}
      <section id="design" className="bg-[#E6E6E6] py-28 px-6 text-center flex  items-center justify-center ">

        <div className="max-w-[900px] ">

          <h4 className="text-4xl md:text-5xl  text-[#2b2b2b] mb-6 flex flex-col md:flex-row ">
            Built on Craftsmanship
            <span className=" font-alex text-5xl md:text-6xl">& Trus</span>
          </h4>

          <p className="text-gray-600 text-lg leading-relaxed max-w-[750px] mx-auto mb-10">
            As a family-owned custom cabinet company, we believe great work
            starts with strong relationships. We guide our clients through
            the process with clear communication, thoughtful design support,
            and a commitment to delivering exceptional quality every time.
          </p>

          <button className="bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition">
            Our Promise
          </button>

        </div>

      </section>

      {/* PARALLAX IMAGE SECTION */}
      <section
        className="h-[450px] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${cabinet})`
        }}
      />

    </>
  );
}