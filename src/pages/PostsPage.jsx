import { useEffect, useState } from "react";
import axios from "axios";


const apiUrl = 'http://localhost:3000/posts'

export default function PostsPage () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(response => {
                console.info(response);
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <main>
            <div className="container my-3">
                <div className="row g-3">
                    <div className="col-12">
                        <h2 className="text-center">
                            Posts
                        </h2>
                    </div>

                    <div className="col-12">
                        <div className="row row-cols-2 g-3">
                            {
                                posts.length > 0 ?
                                posts.map(post => {
                                    return(
                                        <div className="col" key={post.id}>
                                            <div className="card shadow h-100" data-id={post.id}>
                                                <div className="card-header">
                                                    {/* RIMPIAZZO TEMPORANEAMENTE LA PORTA NELL'URL DELLE IMMAGINI PER VEDERLE SENZA ERRORI */}
                                                    {/* todo: SISTEMARE */}
                                                    <img className="post-image" src={post.image.replaceAll('3000', '5173')} alt={post.title} />
                                                </div>
                                                <div className="card-body">
                                                    <h6>
                                                        <strong>
                                                            {post.title}
                                                        </strong>
                                                    </h6>
                                                    <p>
                                                        {post.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                "Nessun post da visualizzare"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};