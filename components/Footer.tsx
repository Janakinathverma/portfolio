import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./MagicButton";
import socialMedia from "@/data/socialMedia.json";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 bg-black" id="contact">
      {/* Background grid */}
      <div className="absolute left-0 -bottom-72 w-full min-h-[24rem] pointer-events-none">
        <Image
          src="/footer-grid.svg"
          alt="grid background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Creating <span className="text-purple">seamless, engaging</span> and{" "}
          <span className="text-purple"> efficient</span> web experiences.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-[80%]">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:janakinathv@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mt-16 md:gap-8 gap-4">
        <p className="text-sm md:text-base font-light text-gray-400">
          Copyright © 2024 Janaki Nath Verma
        </p>

        <div className="flex items-center gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center bg-black-200 bg-opacity-75 backdrop-blur-lg rounded-lg border border-black-300 hover:opacity-90 transition-opacity"
              aria-label={info.name}
            >
              <Image
                src={info.img}
                alt={`${info.name} icon`}
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
