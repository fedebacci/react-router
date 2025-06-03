import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";



const apiUrl = 'http://localhost:3000/posts'





export default function ShowPostPage () {

    // const params = useParams();
    // console.log(params);


    const { id } = useParams();
    // console.log(id);

    const navigate = useNavigate();


    const [post, setPost] = useState({});

    useEffect(() => {
        axios
            .get(apiUrl + '/' + id)
            .then(response => {
                // console.info(response.data);
                setPost(response.data.post);
            })
            .catch(error => {
                console.error(error);

                navigate('/not-found')
                // navigate('/posts')
                // navigate(-1)
            })
    }, [])











    return (
        <main>
            <div className="container my-3">
                <div className="row g-3">
                    <div className="col-12">
                        {
                            !post.id ? 
                                <p>
                                    Post non trovato
                                </p>
                            : 
                            <>
                                <h2 className="text-center">
                                    {post.title}
                                </h2>
                                <div className="text-center my-3">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <p>
                                    {
                                        post.tags.length > 0 ?
                                        post.tags.map((tag, index) => {
                                            return (
                                                <span key={index} className="badge text-bg-primary me-1">
                                                    {tag}
                                                </span>
                                            )
                                        })
                                        :
                                        ""
                                    }
                                </p>
                                <p>
                                    {post.content}
                                </p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};