import { useRef, useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705",
];

export default function AutoGallery() {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!paused) {
        container.scrollLeft += 1;

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="w-screen  mx-auto overflow-hidden bg-white py-10">
      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-6 overflow-x-hidden scrollbar-hide py-10"
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="min-w-[550px] h-[420px] overflow-hidden rounded-xl group">
            <img
              src={src}
              className="w-full h-full object-cover transition-transform duration-[1000ms] ease-linear group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}