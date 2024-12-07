import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../../components/GoBack/GoBack';

export default function BlogDetail() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);  // For loading state
    const [error, setError] = useState(null);      // For error handling

    const getPost = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
            if (!response.ok) {
                throw new Error("Lỗi vui lòng thử lại");
            }
            const result = await response.json();
            setPost(result);
            setLoading(false);  // Stop loading after data fetch
        } catch (err) {
            setError(err.message);
            setLoading(false);  // Stop loading if error occurs
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='blog'>
            <GoBack />
            <h2 className='title'>{post.title}</h2>
            <p className='desc'>{post.body}</p>
            <ul>

                {post?.tags?.length > 0 && post.tags.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
