/**
 * AnimeCard component for displaying information about an anime.
 * Imports necessary dependencies and defines the structure of the anime card.
 */

// Importing Image component from Next.js for image handling
import Image from "next/image";

// Importing MotionDiv component from "./Motion" for animated transitions
import { MotionDiv } from "./Motion";

// Setting stagger value for animations
const stagger = 0.25;

// Variants for the motion animation
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Interface representing the properties of an anime.
 */
export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

/**
 * Interface representing the properties of the AnimeCard component.
 */
interface Prop {
  anime: AnimeProp;
  index: number;
}

/**
 * Functional component representing an anime card.
 * @param {Object} props - Props object containing 'anime' and 'index' properties.
 * @returns {ReactElement} - The AnimeCard structure with motion animation.
 */
function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      {/* Image container */}
      <div className="relative w-full h-[37vh]">
        {/* Next.js Image component for displaying the anime image */}
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      {/* Information container */}
      <div className="py-4 flex flex-col gap-3">
        {/* Anime title and type */}
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>

        {/* Episode and score information */}
        <div className="flex gap-4 items-center">
          {/* Episodes information */}
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>

          {/* Score information */}
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

// Exporting the AnimeCard component as the default export
export default AnimeCard;
