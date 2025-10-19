import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {
    IoArrowForwardSharp,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoGithub,
} from 'react-icons/io5';
import '../styles/footer.css';

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
                    Join the scoop squad! Fresh flavors, fun updates, and a
                    cherry on top, delivered to you.
                </p>
                <form
                    className="subscribe__form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="email"
                        className={
                            errors.subscriberEmail
                                ? 'subscribe__input error'
                                : 'subscribe__input'
                        }
                        {...register('subscriberEmail', {
                            required: 'Please enter your email address',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message:
                                    'Please enter a valid email address (e.g. example@domain.com)',
                            },
                        })}
                    />
                    <p className="message" aria-live="polite">
                        {errors.subscriberEmail?.message || '\u00A0'}
                    </p>
                    <button type="submit" className="newsletter-submit__btn">
                        <IoArrowForwardSharp />
                    </button>
                </form>
            </div>
            <div>
                <ul className="social-media__container">
                    <li>
                        <NavLink>
                            <IconContext.Provider
                                value={{
                                    color: 'white',
                                    size: '2.25rem',
                                }}
                            >
                                <IoLogoFacebook />
                            </IconContext.Provider>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <IconContext.Provider
                                value={{
                                    color: 'white',
                                    size: '2.25rem',
                                    className: `navbar__modalBtn--close`,
                                }}
                            >
                                <IoLogoInstagram />
                            </IconContext.Provider>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <IconContext.Provider
                                value={{
                                    color: 'white',
                                    size: '2.25rem',
                                    className: `navbar__modalBtn--close`,
                                }}
                            >
                                <IoLogoLinkedin />
                            </IconContext.Provider>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <IconContext.Provider
                                value={{
                                    color: 'white',
                                    size: '2.25rem',
                                    className: `navbar__modalBtn--close`,
                                }}
                            >
                                <IoLogoGithub />
                            </IconContext.Provider>
                        </NavLink>
                    </li>
                </ul>
                <ul className="company-docs__container">
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
