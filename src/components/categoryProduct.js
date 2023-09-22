import React, { useContext } from "react";

import { Link, useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';

import { CartContext } from "../contexts/cartContext";


const CategoryProduct = ({
    id,
    title, 
    image, 
    specs,
    features,
    price,
    stock
}) => {
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const { addProduct } = cartContext;

    return (
        <ProductArticle>
            <ProductTitle>
                <Link to={`products/${id}`}>{title}</Link>
            </ProductTitle>

            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImg src={`/assets/${image}`} alt={title}/>
                </ProductImageContainer>
            </figure>

            <aside>
                <ProductInfo>
                    <ProductHeader>Dimensions</ProductHeader>
                    <label>{specs.dimensions}</label>
                </ProductInfo>

                {specs.capacity && (
                <ProductInfo>
                    <ProductHeader>Capacity</ProductHeader>
                    <label>{specs.capacity}</label>
                </ProductInfo>
                )}

                <ProductInfo>
                    <ProductHeader>Features</ProductHeader>
                    <ul>
                        {features?.map((f, i) => {
                            return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>
                        })} 
                    </ul>
                </ProductInfo>
            </aside>

            <aside>
                <ProductInfoFinancePrice>
                  &#8377;{price}
                </ProductInfoFinancePrice>

                <ProductInfoStock>
                <ProductInfoStockLabel>
                        Stock Level: {stock}
                    </ProductInfoStockLabel>
                    <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
                </ProductInfoStock>

                <ProductAction>
                    <ProductActionButton onClick={() => navigate(`products/${id}`)}>View Product</ProductActionButton>
                    <ProductActionButton onClick={() => addProduct({id, title, price})}>Add to Basket</ProductActionButton>
                </ProductAction>
            </aside> 
        </ProductArticle>
    )
}

export default CategoryProduct;

const ProductArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    column-gap: 20px;
`;

const ProductTitle = styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px;
`;

const ProductImageContainer = styled.div`
    padding: 10px;
    width: 60%;
`;

const ProductImageContainerImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductHeader = styled.h3`
    color: darkslategray;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`;

const ProductInfoListItem = styled.li`
    padding-top: 5px;
`;

const ProductInfoFinancePrice = styled.div`
    color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
`;

const ProductInfoStock = styled.div`
    padding-left: 10px;
    margin-top: 20px;
    padding-top: 10px;
    background-color: lightgrey;
    height: 25%;
    width: 40%;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
    padding-bottom: 5px;
`;

const ProductAction = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductActionButton = styled.button`
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;