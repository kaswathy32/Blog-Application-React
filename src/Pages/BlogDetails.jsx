
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) =>
    state.blogs.posts.find((item) => item.id === id)
  );

  if (!post) {
    return (
      <div className="container">
        <h2>Blog not found!</h2>
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <article className="blog-details">
        <h1>{post.title}</h1>

        <p>Author: {post.author}</p>
        <p>Category: {post.category}</p>
        <p>Date: {post.createdAt}</p>

        <hr />

        <p>{post.description}</p>
        <div className="full-content">{post.content}</div>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </article>
    </div>
  );
}

export default BlogDetails;
