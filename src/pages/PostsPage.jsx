import { useEffect, useState } from "react";
import axios from "axios";




import PostsList from "../components/posts/PostsList";





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

                    <PostsList posts={posts} />
                </div>
            </div>
        </main>
    );
};