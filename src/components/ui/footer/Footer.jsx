import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>A & A</h2>
      <p>Будем счастливы разделить этот день с вами!</p>
      <span>15 · 08 · 2027</span>
      <small>MADE WITH LOVE</small>
    </footer>
  );
}
