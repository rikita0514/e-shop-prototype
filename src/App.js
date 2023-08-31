import React, {useState} from 'react';
import './App.css';
import Category from './components/category';

function App() {
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      setResults(data);
    })
  }, [])

  const renderCategories = () => {
    // return results.map(c => 
    //   <Category key={c.id} id={c.id} title={c.title}/>
    // )//Incase the results does not get called
    const categories = [];
    for(let i=0; i < results.length;i++){
      categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title}/>)
    }
    return categories;
  }

  return (
    <>
      <header>My Store</header>

      <section>
        <nav>
        {results && renderCategories()}
        </nav>
        <article>
          main area
        </article>
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
