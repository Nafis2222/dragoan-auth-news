import { Link } from "react-router-dom";

const NewsCard = ({aNews}) => {
    const {title,thumbnail_url,details,_id,image_url
    } = aNews
    console.log(aNews)
    return (
        <div>
            <div className="card mb-4 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length >100 ?
        <p>{details.slice(0,150)}<Link to={`/news/${_id}`} className="link ml-2 link-accent">Read More</Link></p>
        : <p>{details}</p>
    }
    
  </div>
</div>
        </div>
    );
};

export default NewsCard;