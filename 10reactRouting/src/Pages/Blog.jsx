import React from 'react'
import Header from '../Common/Header'
import { blogs } from '../Data/blogs'
import { Link } from 'react-router-dom'

export const Blog = () => {
    let allBlogs = blogs.map((v, i) => {
        
        return (
            <div className='blogItems' key={i}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                <button>
                    <Link to={`/blog/${v.id}`} className='read-more'>Read More</Link>
                </button>
            </div>
        )
    })

    return (
        <div>
            <Header />
            <h1>Blog Page</h1>
            <div className="container">
                {allBlogs}
            </div>
        </div>
    )
}

export default Blog;
