import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const weddingDate = new Date("2027-08-15T15:00:00");

export default function Timer() {
  const [time, setTime] = useState({});

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, weddingDate - new Date());

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff / 3600000) % 24,
        minutes: Math.floor(diff / 60000) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.timer}>
      <span>OUR SPECIAL DAY</span>
      <h2>До нашей свадьбы осталось</h2>

      <div className={styles.counter}>
        {[
          ["days", "Дней"],
          ["hours", "Часов"],
          ["minutes", "Минут"],
          ["seconds", "Секунд"],
        ].map(([key, label]) => (
          <div key={key}>
            <strong>{String(time[key] ?? 0).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
