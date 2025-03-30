import React from 'react'

function ProductItem({product}) {
    // console.log(product)
    return (
        <div className=' shadow-lg text-center pb-4'>
            <img src={product.thumbnail} alt="" />
            <h4>{product.title}</h4>
            <b>{product.price} $</b>
        </div>
    )
}

export default ProductItem