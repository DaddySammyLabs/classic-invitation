import styles from "./Invitation.module.css";

export default function Invitation() {
  return (
    <section className={styles.invitation} id="invitation">
      <span className={styles.subtitle}>WITH LOVE</span>

      <h2>Дорогие наши родные и близкие!</h2>

      <p>
        В нашей жизни состоится особенное событие — день рождения нашей семьи.
      </p>

      <p>
        Мы хотим разделить эту радость с самыми дорогими людьми и будем
        счастливы видеть вас рядом с нами.
      </p>

      <div className={styles.names}>Александр & Анастасия</div>
    </section>
  );
}
