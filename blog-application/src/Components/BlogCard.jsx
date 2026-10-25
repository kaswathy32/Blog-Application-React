
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/blogSlice";
import { useNotification } from "../context/NotificationContext";

function BlogCard({ post }) {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmed) {
      dispatch(deletePost(post.id));
      showNotification("Blog deleted successfully!");
    }
  }

  return (
    <article className="blog-card">
      <div className="card-top">
        <span className="category-badge">{post.category}</span>
        <span className="blog-date">{post.createdAt}</span>
      </div>

      <h2>{post.title}</h2>

      <p className="blog-description">{post.description}</p>

      <div className="blog-meta">
        <span>
          <span className="meta-icon">✍</span> {post.author}
        </span>
        <span>
          <span className="meta-icon">▦</span> {post.createdAt}
        </span>
      </div>

      <div className="blog-actions">
        <Link to={`/blog/${post.id}`}>Read More →</Link>
        <Link to={`/edit/${post.id}`}>✎ Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default BlogCard;
