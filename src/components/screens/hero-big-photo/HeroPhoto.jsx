import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Фоновая фотография */}
      <div className={styles.background}>
        <img src="/images/wedding-couple.jpeg" alt="Wedding couple" />
      </div>

      {/* Затемнение */}
      <div className={styles.overlay} />

      {/* Декоративная рамка */}
      <div className={styles.frame} />

      {/* Контент */}
      <div className={styles.content}>
        <span className={styles.overline}>TOGETHER WITH THEIR FAMILIES</span>

        <div className={styles.names}>
          <h1>
            Zahid
            <span>&</span>
            Zarafshon
          </h1>
        </div>

        <div className={styles.divider}>
          <span />
          <span className={styles.diamond}>◆</span>
          <span />
        </div>

        <p className={styles.subtitle}>
          Приглашаем вас разделить
          <br />с нами самый счастливый день
        </p>

        <div className={styles.date}>
          <span>15</span>
          <div>
            <span>JUNE</span>
            <span>2027</span>
          </div>
        </div>

        <a href="#invitation" className={styles.button}>
          НАШЕ ПРИГЛАШЕНИЕ
        </a>
      </div>

      {/* Подсказка прокрутки */}
      <div className={styles.scroll}>
        <span>SCROLL TO DISCOVER</span>
        <div />
      </div>
    </section>
  );
}
