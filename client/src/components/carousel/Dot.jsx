export default function Dot({ index, active, onClick }) {
    return (
        <button
            type="button"
            className={`carousel__dot ${active ? 'current' : ''}`}
            onClick={() => onClick(index)}
        />
    );
}
