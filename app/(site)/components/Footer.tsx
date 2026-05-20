const today = new Date();
const yyyy = today.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className="text-xs text-center">
        contact:{" "}
        <a
          href="mailto:eliphinomusic@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          eliphinomusic@gmail.com
        </a>
      </p>
      <p className="text-xs text-center">&copy; {yyyy}</p>
    </footer>
  );
};

export default Footer;
