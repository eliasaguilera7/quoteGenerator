import RandomQuotes from "./RandomQuotes";
const QuotesDb = () => {
    const quotes = [
        {id:1, author:'Friedrich Nietzsche', quote:'"That which does not kill us makes us stronger"'},
        {id:2, author:'John Lennon', quote:'"When the going gets tough, the tough get going."'},
        {id:3, author:'Mahatma Gandhi', quote:'"You must be the change you wish to see in the world"'},

        {id:4, author:'Nelson Mandela', quote:'" The greatest glory in living lies not in never falling, but in rising every time"'},
        {id:5, author:'Walt Disney', quote:'" The way to get started is to quit talking and begin doing"'},
        {id:6, author:'Steve Jobs', quote:'"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking "'},

        {id:7, author:'Eleanor Roosevelt', quote:'"If life were predictable it would cease to be life, and be without flavor"'},
        {id:8, author:'Oprah Winfrey', quote:'" If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough"'},
        {id:9, author:'James Cameron', quote:'"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success "'},

        {id:10, author:'John Lennon', quote:'"Life is what happens when you\'re busy making other plans "'},
        {id:11, author:'Mother Teresa', quote:'"Spread love everywhere you go. Let no one ever come to you without leaving happier "'},
        {id:12, author:'D. Roosevelt', quote:'"When you reach the end of your rope, tie a knot in it and hang on "'},

        {id:13, author:'Margaret Mead', quote:'"Always remember that you are absolutely unique. Just like everyone else "'},
        {id:14, author:'Robert Louis Stevenson', quote:'"Don\'t judge each day by the harvest you reap but by the seeds that you plant"'},
        {id:15, author:'Eleanor Roosevelt', quote:'" The future belongs to those who believe in the beauty of their dreams"'},

        {id:16, author:'Benjamin Franklin', quote:'"Tell me and I forget. Teach me and I remember. Involve me and I learn"'},
        {id:17, author:'Helen Keller', quote:'"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart "'},
        {id:18, author:'Aristotle', quote:'"It is during our darkest moments that we must focus to see the light "'},

        {id:19, author:'Anne Frank', quote:'"Whoever is happy will make others happy too "'},
        {id:20, author:'Ralph Waldo Emerson', quote:'"Do not go where the path may lead, go instead where there is no path and leave a trail "'},
        {id:21, author:'Mother Teresa', quote:'"Spread love everywhere you go. Let no one ever come to you without leaving happie "'},

    ]
 

    return ( 
        <div>
         <RandomQuotes quotes={quotes} hello='hello'/>
        </div>
     );
}
 
export default QuotesDb;