import React, { useEffect, useState } from 'react'
import './App.css'
import Category from './Category'
import axios from 'axios'
import ProductItem from './ProductItem'

function App() {
  let [category, setFinalCategory] = useState([])
  let [products, setFinalProducts] = useState([])
  let [catName,setCatName]=useState('')

  let getCategories = () => {
    // Fetch categories using axios
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setFinalCategory(finalRes)
      })
  }

  let getProducts = () => {
    // Fetch products using axios
    axios.get('https://dummyjson.com/products')
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setFinalProducts(finalRes.products) // Save products in state
      })
  }

  useEffect(()=>{
    if(catName!==''){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setFinalProducts(finalRes.products) // Save products in state
      })
          }
  },[catName])
  useEffect(() => {
    getCategories()
    getProducts()
  }, [])



  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[90%] mx-auto'>
          <h1 className='text-3xl font-bold underline text-center'>Our Products</h1>
          <div className="grid grid-cols-[30%_auto] mt-5">
            <div className='px-5'>
              {/* Passing the category data to Category component */}
              <Category cat={category} setCatName={setCatName}/>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Passing the products data to ProductItem component */}
              {products.map((product, index) => (
                <ProductItem key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
