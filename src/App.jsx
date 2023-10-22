import { useEffect, useState } from "react";
import "./App.css";
import Book from "./components/Book";
import ListBook from "./components/ListBook";
import Indexer from "./components/Indexer";
let totalItems = 0;

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchWord, setSearchWorld] = useState("Mia");
  function restartSearch(e)
  {
    if(e.key === "Enter")
    {
      setSearchWorld(e.target.value);
      fetchApiData(e.target.value);
    }    
  }

  useEffect(() => {
    setIsLoading(true);
    fetchApiData();
  }, []);

  function changePage(pageIndex){
    fetchApiData(searchWord, 20, (pageIndex * 20));
  }

  function fetchApiData(searchWords = "Mia+Khalifa", maxResults = 20, startIndex = 0){
    let words = searchWords.replace(/\s */g,'+');
    fetch(
       `https://www.googleapis.com/books/v1/volumes?q=${words}&maxResults=${maxResults}&startIndex=${startIndex}&key=AIzaSyCvGnmu2rPAFXTuFVw8Yu94iVvizTIOOuA`
    ).then( response => response.json())
    .then(data => {setBooks(data.items.filter(item => item.volumeInfo.language !== 'tr'));
    setIsLoading(false);
    totalItems= data.totalItems;
    });
  };

  return (
    <div className="container-sm container-custom ">
      <input type="text" onKeyDown={restartSearch} />
      {!isLoading && <ListBook  listBook={books}/>}
      <Indexer numbers={totalItems} bookPerPage={20} changePage={changePage}/>
    </div>
  );
}

export default App;
