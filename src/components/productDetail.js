import React from 'react'

import { useParams } from 'react-router-dom'

import { getProductById } from '../fetcher';

const ProductDetail = () => {
    const [product, setProduct] = React.useState({errorMessage: '', data: []});
    const params = useParams();

    React.useEffect(() => {
        const fetchData =async () => {
            const responseObject = await getProductById(params.productId);
            setProduct(responseObject);
        }
        fetchData();
    }, [params.productId]);


  return (
    <div>ProductDetail id:{params.productId} title:{product.data.title}</div>
  )
}

export default ProductDetail
