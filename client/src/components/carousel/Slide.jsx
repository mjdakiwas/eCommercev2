export default function Slide({ index, src, isActive }) {
    console.log(src);
    return (
        <div className={'carousel__slide'}>
            <img src={src} alt={`Slide ${index}`} />
        </div>
    );
}
