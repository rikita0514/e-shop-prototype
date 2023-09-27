import React from 'react'

import { useSearchParams } from 'react-router-dom';

import { getProductByQuery } from '../fetcher';

import CategoryProduct from './categoryProduct';


const SearchResults = () => {
  const [products, setProducts] = React.useState({
    errorMessage: "",
    data: [],
});
const [searchParams] = useSearchParams();
const query = searchParams.get('s');

React.useEffect(() => {
  const fetchData = async () => {
      const responseObject = await getProductByQuery(query);
      setProducts(responseObject);
  }
  fetchData();
}, [query]);

const renderProducts = () => {
  return products.data.map((p) => (
      <CategoryProduct key={p.id} {...p}>
          {p.title}
      </CategoryProduct>
  ));
};

  return (
    <div>
            {products.errorMessage &&
                <div>Error: {products.errorMessage}</div>}
            {products.data && renderProducts()}
        </div>
  )
}

export default SearchResults