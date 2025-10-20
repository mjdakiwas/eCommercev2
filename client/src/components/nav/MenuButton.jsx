import { IconContext } from 'react-icons';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';

export default function MenuButton(props) {
    const handleHamburgClick = () => {
        props.setHamburgOpen(!props.isHamburgOpen);
    };

    return (
        <button className="navbar__hamburgBtn">
            {props.isHamburgOpen ? (
                <IconContext.Provider
                    value={{
                        color: '#186b80',
                        size: '2rem',
                        className: `navbar__modalBtn--close`,
                    }}
                >
                    <IoCloseSharp onClick={handleHamburgClick} />
                </IconContext.Provider>
            ) : (
                <IconContext.Provider
                    value={{
                        color: '#186b80',
                        size: '2rem',
                        className: `navbar__modalBtn--open `,
                    }}
                >
                    <IoMenuSharp onClick={handleHamburgClick} />
                </IconContext.Provider>
            )}
        </button>
    );
}
