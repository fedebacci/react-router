export default function ModifyPostPage () {

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get(apiUrl)
    //         .then(response => {
    //             console.info(response);
    //             setPosts(response.data.posts);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }, [])

    return (
        <main>
            <div className="container my-3">
                <div className="row g-3">
                    <div className="col-12">
                        <h2 className="text-center">
                            Modifica Post
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};