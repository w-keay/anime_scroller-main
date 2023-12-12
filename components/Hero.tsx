/**
 * Hero component for the Anime Scroller web application.
 * Displays the hero section with a logo, title, and an anime image.
 */

// Importing Image component from Next.js for image handling
import Image from "next/image";

/**
 * Functional component representing the hero section of the web application.
 * @returns {ReactElement} - The Hero section structure with a logo, title, and anime image.
 */
function Hero() {
  return (
    // Header element with background styling and padding
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      {/* Container for logo and title, flex layout */}
      <div className="flex-1 flex flex-col gap-10">
        {/* Anime Vault logo displayed with Next.js Image component */}
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        {/* Title with dynamic sizing, font styles, and gradient text effect */}
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          {/* Static text with a dynamic gradient effect */}
          Search For Your <span className="yellow-gradient">
            New Favourite
          </span>{" "}
          Anime Series
        </h1>
      </div>
      {/* Container for anime image with dynamic sizing */}
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        {/* Anime image displayed with Next.js Image component */}
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

// Exporting the Hero component as the default export
export default Hero;
