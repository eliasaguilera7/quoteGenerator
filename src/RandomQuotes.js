import { setState,useState } from "react";


const RandomQuotes = ({quotes, hello}) => {
    const [quote, setQuote] = useState(quotes[0].quote);
    const [author , setAuthor] = useState(quotes[0].author);

    const changeQuote = () => {
        // Make this not to be repeated.
        let selectedQuote="";
        do{ let randomNumb = Math.floor(Math.random() * (quotes.length - 1) + 1);
            console.log(randomNumb);
            selectedQuote = quotes.filter(quoteObj => 
            quoteObj.id == randomNumb);
      
        }while(quote === selectedQuote[0].quote)
  
        setQuote(selectedQuote[selectedQuote.length-1].quote);
        setAuthor(selectedQuote[selectedQuote.length-1].author)

    }

    return (  
    <div className="quote">      
       <span className="root2">
       <h2 className="quotes">{quote}</h2>
      <p>{author}</p>
       </span>
       <button onClick={changeQuote}>New Quote</button>
    </div>


    );
}
 
export default RandomQuotes;