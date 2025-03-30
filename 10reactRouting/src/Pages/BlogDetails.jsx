// src/Pages/BlogDetails.jsx
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../Common/Header';
import { blogs } from '../Data/blogs';

function BlogDetails() {
  const { id } = useParams();  // Access the dynamic 'id' parameter from the URL
  let useLoc= useLocation();
  let currentId= useLoc.pathname.split('/')[2];
  let currentData= blogs.filter((v)=>v.id==currentId[0]);
  console.log(currentId)
  console.log(currentData)

  return (
    <div>
      <Header/>
      <h3 style={{textAlign:'center', color:'green'}}>Blog Details for Post {id}</h3>
      {/* Here, you can use 'id' to fetch and display the corresponding blog details */}
      <h2>{currentData[0].title}</h2>
      <p>{currentData[0].body}</p>
    </div>
  );
}

// Ensure you export the component as default
export default BlogDetails;
