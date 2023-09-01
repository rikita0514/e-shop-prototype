import React, {useState} from 'react';
import './App.css';

import { getCategories, getProducts } from './fetcher';

import Category from './components/category';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});
  const [products, setProducts] = useState({errorMessage: '', data: []});
  

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      debugger;
      setCategories(responseObject);
    }
    fetchData();
    
    }, [])

    const handleCategoryClick = id => {
      const fetchData = async () => {
        const responseObject = await getProducts(id);
        debugger;
        setProducts(responseObject);
      }
      fetchData();
    }

    const renderCategories = () => {
      return categories.data.map(c =>
        <Category key={c.id} id={c.id} title={c.title}  onCategoryClick={() => handleCategoryClick(c.id)}/>
      );
    }

    const renderProducts = () => {
      return products.data.map(p => 
        <div>{p.title}</div>
        )
    }

  return (
    <>
    <header>My Store</header>
    <section>
      <nav>
        { categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
        { categories.data && renderCategories()  }
      </nav>
      <article>
      { products.errorMessage && <div>Error: {products.errorMessage}</div>}
        <h4>Products</h4>
        { products && renderProducts() }
      </article>
    </section>

    <footer>
      footer
    </footer>
    </>
  );
}

export default App;
