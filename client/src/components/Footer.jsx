import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  IoArrowForwardSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";
import "../styles/footer.css";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <footer>
      <div className="subscribe">
        <h2>Hot Off the Scoop Press</h2>
        <p>
          Join the scoop squad! Fresh flavors, fun updates, and a cherry on top,
          delivered to you.
        </p>
        <form className="subscribe__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            id="subscribe__input"
            className={errors.subscriberEmail ? "input error" : "input"}
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  "Please enter a valid email address (e.g. example@domain.com)",
              },
            })}
          />
          <button type="submit" className="newsletter-submit__btn">
            <IoArrowForwardSharp />
          </button>
        </form>
      </div>
      <div>
        <ul className="social-media__container">
          <li>
            <a>
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a>
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a>
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a>
              <IoLogoGithub />
            </a>
          </li>
        </ul>
        <ul id="company-docs__container">
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Privacy Notice</a>
          </li>
          <li>
            <a href="">Accessibility Statement</a>
          </li>
        </ul>
        <p>Top O' Cherry @ 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
}
