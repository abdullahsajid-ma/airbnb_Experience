import star from './star.svg'
export default function Card(props){
    
    return(
        <div className='card'>
            <div className='card--badge'>{props.onSpot}</div>
            <img src={props.img} className="card-img"/>
            <div className='ratingArea'>
                <img src={star} className="starImg"/>
                <span className='rating'>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) .</span>
                <span className='gray'>{props.country}</span>  
            </div>
            <p className='title'>{props.title}</p>
            <p className='price'>
                <span className='bold'>From ${props.price}</span> / person
            </p>
        </div>
    )
}