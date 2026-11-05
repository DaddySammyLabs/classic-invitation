import { useState } from "react";
import { Menu, X, Music, Music2 } from "lucide-react";
import styles from "./Header.module.css";

const links = [
  ["Главная", "home"],
  ["Приглашение", "invitation"],
  ["Программа", "program"],
  ["Локация", "location"],
  ["RSVP", "rsvp"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("wedding-audio");

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <header className={styles.header}>
      <a href="#home" className={styles.logo}>
        A & A
      </a>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <button
          onClick={toggleMusic}
          className={styles.music}
          aria-label="Включить или выключить музыку"
        >
          {playing ? <Music2 size={18} /> : <Music size={18} />}
        </button>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <audio id="wedding-audio" src="/music/wedding-music.mp3" loop />
    </header>
  );
}
