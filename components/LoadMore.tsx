"use client";

/**
 * LoadMore component for the Anime Scroller web application.
 * Fetches additional anime data when the user scrolls to the end of the page.
 */

// Importing React hooks and components
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Importing fetchAnime function from "./action" and AnimeCard component
import { fetchAnime } from "@/app/action";
import AnimeCard from "./AnimeCard";

// Initial page value for data fetching
let page = 2;

// Type definition for AnimeCard JSX.Element
export type AnimeCard = JSX.Element;

/**
 * Functional component representing the LoadMore section of the web application.
 * @returns {ReactElement} - The LoadMore section structure with a grid of anime cards and a loading spinner.
 */
function LoadMore() {
  // State and hook for checking if the LoadMore section is in the viewport
  const { ref, inView } = useInView();

  // State for storing fetched anime data
  const [data, setData] = useState<AnimeCard[]>([]);

  // useEffect hook for fetching additional anime data when LoadMore is in view
  useEffect(() => {
    if (inView) {
      // Fetch anime data and update state
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      {/* Section for displaying a grid of anime cards */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      {/* Section for displaying a loading spinner */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {/* Loading spinner displayed with Next.js Image component */}
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

// Exporting the LoadMore component as the default export
export default LoadMore;
