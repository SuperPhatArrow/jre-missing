import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <span>JRE</span> MISSING
      </h1>
      <p className={styles.intro}>
        This website automatically detects episodes of{" "}
        <a
          href="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>The Joe Rogan Experience</span>
          <br /> podcast{" "}
        </a>{" "}
        that are currently not available on the Spotify platform by comparing
        the official Spotify API with a database of all episodes ever released.
      </p>
    </header>
  );
};

export default Header;
