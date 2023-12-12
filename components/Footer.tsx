/**
 * Footer component for the Anime Scroller web application.
 * Imports necessary dependencies and defines the structure of the footer.
 */

// Importing Image component from Next.js for image handling
import Image from "next/image";

/**
 * Functional component representing the footer of the web application.
 * @returns {ReactElement} - The Footer structure with company information and social media icons.
 */
function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      {/* Company information */}
      <p className="text-base font-bold text-white">@2023 AnimeScroller</p>
      {/* Company logo */}
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />

      {/* Social media icons */}
      <div className="flex items-center gap-6">
        {/* TikTok icon */}
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />

        {/* Instagram icon */}
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />

        {/* Twitter icon */}
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

// Exporting the Footer component as the default export
export default Footer;
