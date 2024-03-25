function App(){
    const title = "Blog Post";
    const body = "This is a blog post";
    const comments = [
        {id:1, text: "comment1"},
        {id:2, text: "comment2"},
        {id:3, text: "comment3"},
    ];

    const showComments = true
    const display = (<div>
        <h3>Comments: {comments.length}</h3>
        <ul>
            {comments.map((comment,index)=>(
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>)
    const loading = false;
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="container">
            <h2>{title.toLowerCase()}</h2>
            <p>{body}</p>
            {showComments && display}
            
        </div>
    );
}

export default App