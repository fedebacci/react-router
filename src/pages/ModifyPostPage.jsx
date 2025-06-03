import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";



const apiUrl = 'http://localhost:3000/posts'





export default function ModifyPostPage () {

    // const params = useParams();
    // console.log(params);


    const { id } = useParams();
    // console.log(id);
    const navigate = useNavigate();

    const [post, setPost] = useState({});
    const [postData, setPostData] = useState({});

    useEffect(() => {
        axios
            .get(apiUrl + '/' + id)
            .then(response => {
                // console.info(response.data);
                setPost(response.data.post);
                setPostData(response.data.post);
            })
            .catch(error => {
                console.error(error);

                navigate('/not-found');
            })
    }, [])






const handleInputChange = (e) => {
    // if (e.target.type === "checkbox") return setPostData({ ...postData, [e.target.name]: e.target.checked});
    setPostData({ ...postData, [e.target.name]: e.target.value})
} 




const handleSubmit = (e) => {
    e.preventDefault();

    // console.info(post);
    // console.info(postData);
    // console.info(post === postData);

    console.info(apiUrl + '/' + id);

    if (post !== postData) {
        axios
            .patch(apiUrl + '/' + id, postData)
            .then(response => {
                console.info(response.data)
            })
            .catch(error => {
                console.error(error);
            })
    }
} 






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
                                    {/* <h2 className="text-center">
                                        Modifica: {post.title} ({post.id})
                                    </h2> */}
                                    {/* RIMPIAZZO TEMPORANEAMENTE LA PORTA NELL'URL DELLE IMMAGINI PER VEDERLE SENZA ERRORI */}
                                    {/* todo: SISTEMARE */}
                                    {/* <div className="text-center my-3">
                                        <img src={post.image.replaceAll('3000', '5173')} alt={post.title} />
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
                                    </p> */}



                                    <h3>
                                        Modifica il post: {post.title}
                                    </h3>
                                    <form>
                                        {/* <div className="mb-3">
                                            <label for="postTitle" className="form-label">
                                                Post title
                                            </label>
                                            <input type="text" className="form-control" id="postTitle" aria-describedby="postTitleHelp" />
                                            <div id="postTitleHelp" className="form-text">
                                                We'll never share your email with anyone else.
                                            </div>
                                        </div> */}



                                        <div className="mb-3">
                                            <label htmlFor="postTitle" className="form-label">
                                                * Post title
                                            </label>
                                            <input 
                                                value={postData.title}
                                                onChange={handleInputChange}
                                                name="title"
                                                required

                                                type="text" 
                                                className="form-control" 
                                                id="postTitle" 
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="postContent" className="form-label">
                                                * Post content
                                            </label>
                                            <textarea 
                                                value={postData.content}
                                                onChange={handleInputChange}
                                                name="content"
                                                required

                                                className="form-control" 
                                                id="postContent" 
                                                rows="5"
                                            >
                                            </textarea>
                                        </div>


                                        <button 
                                            onClick={handleSubmit}

                                            type="submit" 
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </form>


                                </>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};