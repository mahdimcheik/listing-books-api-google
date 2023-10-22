export default function({numbers, bookPerPage, changePage}){

    let  pageNumbers =Math.ceil(numbers / bookPerPage);
    let pageList = [];
    for(let i = 0 ;i< pageNumbers;i++)
    {
        pageList.push(i+1);
    }
   
    return (
        <ul className="numbers">
            {pageList.map( (number,index) => <button key={index} className="number" onClick={() =>changePage(index)}>{number} </button>)}
        </ul>
    );
}