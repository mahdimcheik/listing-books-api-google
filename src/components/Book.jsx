export default function ({book}) {

    let imageLink = 'https://placehold.co/200x300/EEE/31343C';
    for(const property in book.volumeInfo.imageLinks)
    {
        //console.log("Property " + property + "    value : " + book.volumeInfo.imageLinks[property]);
        imageLink = book.volumeInfo.imageLinks[property];
    }
    

  return (
    <div
      className="card card-custom"
      style={{ width: "18rem", height: "25rem", display: "inline-block" }}
    >      
      <img
        src=  {imageLink}
        alt=""
        className="card-img-top p-2"
        width="150"
        height="250"
        style={{ maxWidth: "70%", margin: "0 auto", display: "block" }}
      />
      
      <h4 className="card-title p-2 m-2 card-title-custom">{book.volumeInfo.title}</h4>
      <p className="card-text p-2 m-2 card-text-custom">
      {book.volumeInfo.description} </p>
      <h5 className="card-title p-2 ">Price</h5>
    </div>
  );
}


/***
 * //src="/src/assets/react.svg"
 * book.volumeInfo.imageLinks.smallThumbnail
 * {<div className="card-img-top" style={{background : `url(${book.volumeInfo.imageLinks.thumbnail}) no-repeat`, width:"100px", height: "100px"}}></div>}
 */