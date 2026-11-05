import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <span className={styles.overline}>THE WEDDING DAY</span>

        <h1>
          Александр
          <span>&</span>
          Анастасия
        </h1>

        <div className={styles.line} />

        <p className={styles.date}>15 · 08 · 2027</p>

        <p className={styles.description}>
          Мы приглашаем вас разделить с нами самый счастливый день нашей жизни.
        </p>

        <a href="#invitation" className={styles.button}>
          НАШЕ ПРИГЛАШЕНИЕ
        </a>
      </div>

      <div className={styles.image}>
        <img
          src="/images/wedding-main.jpg"
          alt="Свадебная фотография молодожёнов"
        />
        <span className={styles.imageText}>A DAY TO REMEMBER</span>
      </div>
    </section>
  );
}
