import { useState } from "react";
import styles from "./RSVP.module.css";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "yes",
    guests: "1",
    comment: "",
  });

  const [status, setStatus] = useState("");

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Отправка...");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Ошибка отправки");

      setStatus("Спасибо! Ваш ответ сохранён.");
      setForm({
        name: "",
        attendance: "yes",
        guests: "1",
        comment: "",
      });
    } catch {
      setStatus("Не удалось отправить ответ. Попробуйте позже.");
    }
  };

  return (
    <section className={styles.rsvp} id="rsvp">
      <span>KINDLY RESPOND</span>
      <h2>Ждём вашего ответа</h2>

      <p>Пожалуйста, подтвердите своё присутствие.</p>

      <form onSubmit={submit}>
        <input
          name="name"
          placeholder="Ваше имя и фамилия"
          value={form.name}
          onChange={update}
          required
        />

        <select name="attendance" value={form.attendance} onChange={update}>
          <option value="yes">С удовольствием приду</option>
          <option value="no">К сожалению, не смогу</option>
        </select>

        <select name="guests" value={form.guests} onChange={update}>
          <option value="1">1 гость</option>
          <option value="2">2 гостя</option>
          <option value="3">3 гостя</option>
          <option value="4">4 гостя</option>
        </select>

        <textarea
          name="comment"
          placeholder="Пожелания или комментарии"
          value={form.comment}
          onChange={update}
        />

        <button type="submit">ОТПРАВИТЬ ОТВЕТ</button>

        <p role="status">{status}</p>
      </form>
    </section>
  );
}
