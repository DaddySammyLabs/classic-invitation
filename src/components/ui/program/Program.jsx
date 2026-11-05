import styles from "./Program.module.css";

const events = [
  ["15:00", "Сбор гостей", "Приветственный фуршет"],
  ["16:00", "Церемония", "Самый трогательный момент"],
  ["17:00", "Банкет", "Праздничный ужин"],
  ["19:00", "Первый танец", "Начало вечера"],
  ["21:00", "Торт", "Сладкое завершение вечера"],
];

export default function Program() {
  return (
    <section className={styles.program} id="program">
      <span>THE WEDDING DAY</span>
      <h2>Программа дня</h2>

      <div className={styles.timeline}>
        {events.map(([time, title, description]) => (
          <div className={styles.event} key={time}>
            <strong>{time}</strong>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
