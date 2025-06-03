import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function CreatePostPage () {




    return (
        <main>
            <div className="container my-3">
                <div className="row g-3">
                    <div className="col-12">
                        <Link className="btn btn-primary" to="/posts">
                            Torna alla lista
                        </Link>
                        <h1>
                            Create new Post
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    );
};