import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function BlogAll() {
    const [blogs, setBlogs] = useState([]);
    const getBlog = async () => {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
            throw new Error("Lỗi khi lấy danh sách bài viết")
        }
        const result = await response.json();
        setBlogs(result.posts);
    }

    useEffect(() => {
        getBlog();
    }, [])
    console.log(blogs)
    return (
        <>
            <div>
                {blogs.length > 0 && blogs.map((item) => (
                    <div key={item.id}>
                        <Link to={"/blog/" + item.id}>
                            <h2 className='title'>{item.title}</h2>
                        </Link>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </>


    )
}
