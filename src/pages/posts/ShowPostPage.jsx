import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import pages from "../../assets/js/data/pages";



const apiUrl = 'http://localhost:3000/posts'



let prevPostId = null;
let nextPostId = null;


export default function ShowPostPage () {

    const { id } = useParams();

    
    const [post, setPost] = useState({});


    // # SOLUZIONE TEMPORANEA PER SCORRIMENTO TRA I POST
    // console.warn("id", id);
    // console.warn("typeof(id)", typeof(id));
    // // console.warn("post", post);
    // console.warn("post.id", post.id);
    // console.warn("typeof(post.id)", typeof(post.id));
    // console.warn("post.id == id", post.id == id);
    // console.warn("post.id === parseInt(id)", post.id === parseInt(id));
    // console.warn("_________________________________________________________-");
    if (post.id != id) {
        axios
            .get(apiUrl + '/' + id)
            .then(response => {
                // console.info(response.data);
                // console.info(response.data.prevPost);
                // console.info(response.data.nextPost);
                prevPostId = response.data.prevPost;
                nextPostId = response.data.nextPost;
                setPost(response.data.post);
            })
            .catch(error => {
                console.error(error);

                navigate('/not-found');
                // navigate('/posts');
                // navigate(-1);
            })
    };
    
    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(apiUrl + '/' + id)
            .then(response => {
                // console.info(response.data);
                // console.info(response.data.prevPost);
                // console.info(response.data.nextPost);
                prevPostId = response.data.prevPost;
                nextPostId = response.data.nextPost;
                setPost(response.data.post);
            })
            .catch(error => {
                console.error(error);

                navigate('/not-found');
                // navigate('/posts');
                // navigate(-1);
            })
    }, [])

    



    return (
        <main>
            <div className="container my-3">
                <div className="row g-3">
                    <div className="col-12">
                        <Link className="btn btn-primary me-1" to={pages.POSTS()}>
                            Torna alla lista
                        </Link>

                        <br />
                        {/* NO! DEVO SETTARE L'ID E BASTA E AGGIORNARE IL COMPONENTE CON UNO USESTATE, NON NAVIGARE DI NUOVO! */}
                        {
                            prevPostId != undefined ?
                            <Link className="btn btn-secondary me-1" to={pages.SHOWPOST(prevPostId)}>
                                Post precedente ({prevPostId})
                            </Link>
                            :
                            ""
                        }
                        {
                            nextPostId != undefined ?
                            <Link className="btn btn-secondary" to={pages.SHOWPOST(nextPostId)}>
                                Prossimo post ({nextPostId})
                            </Link>
                            :
                            ""
                        }







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