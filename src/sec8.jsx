export default function Banner() {
  return (
<section className="grid grid-cols-1 md:grid-cols-[80fr_20fr]  items-center px-10 md:px-16 py-24 bg-[#3e3f27]">      {/* grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-10 md:px-16 py-16 bg-[#3e3f27] 
      bg-[#3e3f27] text-white py-24 px-12 flex justify-between items-center
      */}
      <div className="max-w-3xl">
        <h4 className=" font-thin text-4xl leading-tight text-4xl">
          <span className="font-alex text-5xl md:text-6xl mr-2">Distinctive</span>{" "}
           designs custom-made 
          <br className="hidden md:block"/>
           &nbsp;in the Midwest by Danlee Wood Products
        </h4>
      </div>

     <button className="mt-8  md:mt-0 justify-self-start md:justify-self-center border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
  Start Your Project
</button>

    </section>
  );
}