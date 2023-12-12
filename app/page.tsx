/**
 * Home page component for the Anime web application.
 * Imports necessary components and functions, fetches anime data, and displays it on the page.
 */

// Importing AnimeCard component and AnimeProp type from "@/components/AnimeCard"
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// Importing LoadMore component and fetchAnime function from "./action"
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

/**
 * Asynchronous function representing the Home page of the web application.
 * Fetches anime data using the fetchAnime function and displays it on the page.
 * @returns {ReactElement} - The Home page structure including a list of AnimeCard components and a LoadMore button.
 */
async function Home() {
  // Fetch anime data using the fetchAnime function
  const data = await fetchAnime(1);
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      {/* Heading for the anime exploration section */}
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      {/* Grid layout for displaying anime cards */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      {/* LoadMore component for fetching additional anime data */}
      <LoadMore />
    </main>
  );
}

// Exporting the Home component as the default export
export default Home;
