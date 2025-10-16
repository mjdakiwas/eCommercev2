export default function Slide({ path }) {
    return (
        <div className="carousel__slide">
            <img src={path} />
        </div>
    );
}
