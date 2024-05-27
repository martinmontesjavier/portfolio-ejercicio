import linkedinDark from '../imagenes/linkedin-dark.svg';
import twitterDark from '../imagenes/twitter-dark.svg';
import ytDark from '../imagenes/yt-dark.svg';
import githubDark from '../imagenes/github-dark.svg';
import bookDark from '../imagenes/book-dark.svg';

export function Redes() {
  return (
    <div className="absolute left-0 top-1/4 mt-24 py-5 flex flex-col justify-center items-start px-4 bg-white">
      <a href="#" className="mb-4">
        <img src={linkedinDark} alt="LinkedIn" className="w-12 h-12" />
      </a>
      <a href="#" className="mb-4">
        <img src={twitterDark} alt="Twitter" className="w-12 h-12" />
      </a>
      <a href="#" className="mb-4">
        <img src={ytDark} alt="YouTube" className="w-12 h-12" />
      </a>
      <a href="#" className="mb-4">
        <img src={githubDark} alt="GitHub" className="w-12 h-12" />
      </a>
      <a href="#">
        <img src={bookDark} alt="Blog" className="w-12 h-12" />
      </a>
    </div>
  );
}
