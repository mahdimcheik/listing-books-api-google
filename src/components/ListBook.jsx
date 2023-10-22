import Book from "./Book"
export default function ListBook({listBook}){

    return (
        <div>
            {listBook.length > 0 && listBook.map( (element) => (<Book key={element.id} book={element} />))}
        </div>
    )
}