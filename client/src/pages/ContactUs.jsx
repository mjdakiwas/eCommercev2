import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const [submissionStatus, setSubmissionStatus] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            className={
              errors.firstName
                ? "contact-form__input error"
                : "contact-form__input"
            }
            {...register("firstName", {
              required: "Please enter your first name",
              minLength: {
                value: 2,
                message: "Please enter more than 2 characters",
              },
            })}
          />
          <p className="message" aria-live="polite">
            {errors.firstName?.message || "\u00A0"}
          </p>
        </div>

        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            className={errors.lastName ? "input error" : "input"}
            {...register("lastName", {
              required: "Please enter your last name",
              minLength: {
                value: 2,
                message: "Please enter more than 2 characters",
              },
            })}
          />
          <p className="message" aria-live="polite">
            {errors.lastName?.message || "\u00A0"}
          </p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={errors.email ? "input error" : "input"}
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  "Please enter a valid email address (e.g. example@domain.com)",
              },
            })}
          />
          <p className="message" aria-live="polite">
            {errors.email?.message || "\u00A0"}
          </p>
        </div>

        <div>
          <label htmlFor="pnum">Phone Number</label>
          <input
            type="tel"
            id="pnum"
            className={errors.phoneNumber ? "input error" : "input"}
            {...register("phoneNumber", {
              required: "Please enter your phone number",
              pattern: {
                value: /^\+?[0-9\-().]{7,20}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          <p className="message" aria-live="polite">
            {errors.phoneNumber?.message || "\u00A0"}
          </p>
        </div>

        <div>
          <label htmlFor="msg">Message</label>
          <textarea
            rows="4"
            id="msg"
            className={errors.comment ? "input error" : "input"}
            {...register("comment", {
              required: "Please enter your reason of contact",
              minLength: {
                value: 10,
                message: "Please enter more than 10 characters",
              },
            })}
          />
          <p className="message" aria-live="polite">
            {errors.comment?.message || "\u00A0"}
          </p>
        </div>

        <button type="submit" className="form__submitBtn">
          Send Message
        </button>
      </form>
    </main>
  );
}
