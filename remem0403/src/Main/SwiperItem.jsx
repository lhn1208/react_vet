
export const SwiperItem = ({imgSrc, alt, name, date, guardian, coffin}) => {
    return (
        <a href="#">
            <span className="img_area">
                <img src={imgSrc} alt={alt} />
            </span>
            <dl className="info">
                <dt>{name}</dt>
                <dd className="date">{date}</dd>
                <dd><span className="badge">상주</span>{guardian}</dd>
                <dd><span className="badge">발인</span>{coffin}</dd>
            </dl>
        </a>
    )
}