export default function EachReview({review, handleDelete}) {
  return (
    <>
        <div className ='card'>
            <div className ='cardHeader'>
                <span className="rating">
                    {review.rating}
                </span>
                <span className="name">
                    {review.name}
                </span>
                <button className="link-btn" onClick={handleDelete}></button>
            </div>
            <div className="comment">
                {review.comment}
            </div>
        </div>
    
    </>
  )
}
