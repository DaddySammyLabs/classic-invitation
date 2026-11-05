import styles from "./DressCode.module.css";

const colors = ["#E8DFD2", "#C9BBA9", "#A99C8B", "#8B8875", "#655D50"];

export default function DressCode() {
  return (
    <section className={styles.dress} id="dresscode">
      <span>OUR WEDDING STYLE</span>
      <h2>Дресс-код</h2>

      <p>
        Нам будет особенно приятно, если ваши образы будут гармонировать с
        атмосферой нашего праздника.
      </p>

      <div className={styles.palette}>
        {colors.map((color) => (
          <div key={color} style={{ backgroundColor: color }} />
        ))}
      </div>

      <p className={styles.note}>
        Предпочтительные оттенки: бежевый, молочный, песочный и оливковый.
      </p>
    </section>
  );
}
