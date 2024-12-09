import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';


/* let book = {
  "asin": "0316202304",
    "title": "Area 51: An Uncensored History of America's Top Secret Military Base",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71QPBFYW0eL.jpg",
    "price": 11.59,
    "category": "history"
} */


function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks/>
      <MyFooter />
    </div>
  );
}

export default App;



/*

S9/L3
  1 Crea un componente SingleBook utilizzando una funzione. 
    Questo componente dovrà essere predisposto per ricevere nelle 
    props un oggetto corrispondente ad un singolo libro, e 
    visualizzerà la sua copertina e il titolo. Usa le Card di 
    react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser 
    preso da uno dei file .json  che hai ricevuto ieri).
    
  2 Crea un componente BookList. Questo componente riceverà dalle 
    prop un array di libri, e li visualizzerà attraverso un .map() 
    ritornando per ogni elemento il componente SingleBook. 
    Successivamente monta BookList dentro il componente App, e 
    forniscigli una lista di libri da uno dei file .json come prop. 
    Dovresti ottenere a schermo un risultato simile al componente 
    AllTheBooks: ora però la struttura è molto più modulare e 
    riutilizzabile.

  3 [EXTRA] Crea una funzione getSearchQuery che salvi la stringa 
    di ricerca dentro allo stato del componente BookList e filtri i 
    libri di conseguenza. Il componente BookList dovrà quindi 
    renderizzare a quel punto solo i libri contenenti la stringa 
    cercata come titolo del libro.

  4 Converti il tuo componente SingleBook in una classe, 
    e crea il suo stato contenente una proprietà booleana selected.

  5 Un click sulla copertina del libro dovrà fare il toggle della 
    proprietà selected. Se la proprietà selected sarà true, il 
    SingleBook dovrà ricevere dello stile che rifletta il cambio di 
    stato, visivamente (potresti ad esempio utilizzare un bordo rosso).
*/