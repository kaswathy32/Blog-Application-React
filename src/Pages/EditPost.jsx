
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost } from "../redux/blogSlice";
import { useNotification } from "../context/NotificationContext";
import BlogForm from "../Components/BlogForm";

function EditPost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showNotification } = useNotification();

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

  function handleUpdate(formData) {
    dispatch(
      updatePost({
        ...formData,
        id: post.id,
        createdAt: post.createdAt,
      })
     
    
    );

    showNotification("Blog updated successfully!");

    navigate("/");
  }

  return (
    <div className="container">
      <BlogForm
        initialData={post}
        onSubmit={handleUpdate}
      />
    </div>
  );
}

export default EditPost;
