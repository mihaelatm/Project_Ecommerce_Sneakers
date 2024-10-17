import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { useState } from "react";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setSuccessMessage("Данные успешно отправлены!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form_inputs}>
        <input
          type="text"
          placeholder="Ваш email"
          className={styles.input}
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Введите действительный email",
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <input
          type="text"
          placeholder="Ваше имя"
          className={styles.input}
          {...register("name", { required: "Имя обязательно" })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <textarea
        placeholder="Ваше сообщение"
        className={styles.textarea}
        {...register("message", { required: "Сообщение обязательно" })}
      ></textarea>
      {errors.message && (
        <p className={styles.error}>{errors.message.message}</p>
      )}

      <div className={styles.form_button}>
        <button type="submit" className={styles.button}>
          Отправить
        </button>
      </div>

      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </form>
  );
}

export default ContactForm;
