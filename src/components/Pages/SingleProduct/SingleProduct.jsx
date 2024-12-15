import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { singleProduct } from '../../Services/data/data';
import SvgIcon from '../../../../public/images/Svgicon';
import Information from './Sections/Information';
import Header from './Sections/Header';
import Order from './Sections/Order';
import BestSeller from '../Home/Sections/BestSeller/BestSeller';

const SingleProduct = () => { 
    const { productId } = useParams();
     
    const product = singleProduct.find((p) => p.id == productId);

    if (!product) return <div>Product not found!</div>; 

    return (
        <div>
            <Header/>
            <div className="px-32">
            <Order product={product} />            
            <Information description={product.description}/>
            </div>
            <BestSeller title={"Related Products"}/>
        </div>
    )
}

export default SingleProduct
