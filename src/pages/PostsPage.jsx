import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import pages from "../assets/js/data/pages";



import PostsList from "../components/posts/PostsList";





const apiUrl = 'http://localhost:3000/posts'





export default function PostsPage () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(response => {
                // console.info(response.data);
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <main>
            <div className="container my-3">


                {/* <div className="row g-3">
                    <div className="col-12">
                        <h2 className="text-center">
                            Posts
                        </h2>
                    </div>

                    <PostsList posts={posts} />
                </div> */}


                <div className="row g-3">
                    <div className="col-12">
                        <h2 className="text-center">
                            Posts
                        </h2>

                        <Link to="/posts/create" className="btn btn-primary">
                            Crea nuovo post
                        </Link>

                        {
                            posts.length > 0 ?
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>
                                            ID
                                        </th>
                                        <th>
                                            TITLE
                                        </th>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.map(post => {
                                            return (
                                                <tr key={post.id}>
                                                    <td>
                                                        {post.id}
                                                    </td>
                                                    <td>
                                                        <Link to={pages.SHOWPOST(post.id)}>
                                                            {post.title}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link className="btn btn-primary" to={pages.MODIFYPOST(post.id)}>
                                                            Modifica
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                    <tr key="1000">
                                        <td>
                                            X
                                        </td>
                                        <td>
                                            <Link to={pages.SHOWPOST('1000')}>
                                                TEST ERRORE SHOW
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={pages.MODIFYPOST('1000')}>
                                                TEST ERRORE MODIFY
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            :
                            <div className="col-12">
                                <h5>
                                    Nessun post da visualizzare
                                </h5>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};