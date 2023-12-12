"use server";

/**
 * Module for handling anime data retrieval from a server.
 * Uses the Shikimori API to fetch information about ongoing TV anime with a limit of 8 entries per page.
 * The fetched data is transformed into an array of AnimeCard components.
 */

// Importing AnimeCard component and AnimeProp type from the specified paths
import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "@/components/AnimeCard";

/**
 * Asynchronous function to fetch anime data from the Shikimori API.
 * @param {number} page - The page number of the data to fetch.
 * @returns {Promise<ReactElement[]>} - A promise resolving to an array of AnimeCard components.
 */

const fetchAnime = async (page: number) => {
  // Fetch anime data from the Shikimori API using the specified parameters
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity&kind=tv&status=ongoing`
  );

  // Parse the response into JSON format
  const data = await response.json();

  // Map the retrieved data to an array of AnimeCard components
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

// Exporting the fetchAnime function for external use
export { fetchAnime };
