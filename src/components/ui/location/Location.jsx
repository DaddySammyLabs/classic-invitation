import styles from "./Location.module.css";

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7626020365574!2d64.42687597607837!3d39.76172010394903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e4b8e2a!2sAllama%20Muhammad%20Iqbal%20Street%2C%207%2C%20Bukhara%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1624271234567!5m2!1sen!2s";

export default function Location() {
  return (
    <section className={styles.location} id="location">
      <div className={styles.heading}>
        <span>WHERE WE CELEBRATE</span>
        <h2>Место проведения</h2>
        <p>
          Мы будем рады разделить этот особенный день с вами в красивом месте.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.info}>
          <span className={styles.label}>WEDDING VENUE</span>

          <h3>Zahid Zarafshon</h3>

          <p className={styles.subtitle}>Wedding Hall</p>

          <div className={styles.divider} />

          <p className={styles.address}>
            Allama Muhammad Iqbal Street, 7
            <br />
            Bukhara, Uzbekistan
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Zahid+Zarafshon+Wedding+Hall+Bukhara"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            ОТКРЫТЬ МАРШРУТ
          </a>
        </div>

        <div className={styles.map}>
          <iframe
            src={mapUrl}
            title="Zahid Zarafshon Wedding Hall location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
