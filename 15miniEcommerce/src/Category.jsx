import React from 'react'

function Category({ cat, setCatName}) {  // Destructuring 'cat' prop
  return (
    <div>
      <h2 className='text-[1.5rem] font-[500] p-[0.5rem]'>Product Category</h2>
      <ul>
        {
          cat && cat.length > 0 ? (
            cat.map((v, i) => {
              return (
                <li onClick={()=>setCatName(v.name)} key={i} className='bg-[#ccc] font-serif mb-2 cursor-pointer px-3'>
                  {v.name}
                </li>
              )
            })
          ) : (
            <li>No categories available</li>  // Display a message if no categories
          )
        }
      </ul>
    </div>
  )
}

export default Category
