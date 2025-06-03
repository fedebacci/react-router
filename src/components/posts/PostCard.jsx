import { Link } from "react-router-dom";



import pages from "../../assets/js/data/pages";




export default function PostCard ({ post }) {
    return (
        <div className="col">
            <div className="card shadow h-100" data-id={post.id}>
                <div className="card-header p-0 overflow-hidden">
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
                    <Link to={pages.MODIFYPOST(post.id)}>
                        Modifica post
                    </Link>
                </div>
            </div>
        </div>
    );
};