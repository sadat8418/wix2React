export default function ProcessSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-10 md:px-16 py-16 bg-[#E6E6E6]">
      
      <div className="md:px-16">
        <h4 className=" text-5xl font-light mb-6 text-black  text-4xl md:text-5xl">
          <span className="italic font-alex text-5xl md:text-6xl">Thoughtful</span>{" "}
          Guided Design Process
        </h4>

        <p className="text-gray-600 mb-8 max-w-lg pr-16">
          Every project we take on is designed around the client’s needs and
          built with meticulous attention to detail. Explore a selection of our
          recent custom cabinetry projects to see how craftsmanship and design
          come together.
        </p>

        <button className="bg-gray-400 text-white px-6 py-3 rounded-md hover:bg-gray-500">
          Explore Our Process
        </button>
      </div>

      <div className="overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}