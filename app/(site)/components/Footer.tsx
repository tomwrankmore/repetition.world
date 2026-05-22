import { FaSpotify, FaSoundcloud, FaBandcamp } from 'react-icons/fa';

const today = new Date();
const yyyy = today.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className="text-xs text-center">
        <a
          href="mailto:eliphinomusic@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          eliphinomusic@gmail.com
        </a>
      </p>

      <div className="flex justify-center gap-4 my-3">
        <a href="https://soundcloud.com/eliphino" target="_blank" rel="noopener noreferrer">
          <FaSoundcloud className="text-lg" />
        </a>
        <a href="https://eliphino.bandcamp.com/music" target="_blank" rel="noopener noreferrer">
          <FaBandcamp className="text-lg" />
        </a>
        <a href="https://open.spotify.com/artist/7xqnFwk6ZueWJ1IA8gsEWM" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="text-lg" />
        </a>
      </div>

      <p className="text-xs text-center">&copy; {yyyy}</p>
    </footer>
  );
};

export default Footer;
