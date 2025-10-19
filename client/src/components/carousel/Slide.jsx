export default function Slide({ index, src, isActive }) {
    return (
        <div
            className={`carousel__slide ${isActive ? 'current' : ''}`}
            data-index={index}
        >
            <img src={src} alt={`Slide ${index}`} />
        </div>
    );
}
