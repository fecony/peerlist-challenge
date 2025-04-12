import { Github } from "lucide-react";

export const GitHub = () => (
  <a
    target="_blank"
    href="http://github.com/fecony/peerlist-challenge"
    aria-label="github repository"
    className="w-5 flex justify-center items-center text-lg"
  >
    <Github
      size={16}
      className="text-dark dark:text-white dark:hover:text-gray-500 transition-colors"
    />
  </a>
);
