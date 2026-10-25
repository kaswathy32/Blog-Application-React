
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/blogSlice";
import BlogForm from "../Components/BlogForm";
import { useNotification } from "../context/NotificationContext";

function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  function handleCreate(formData) {
    const newPost = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
    };

    dispatch(addPost(newPost));
    showNotification("Blog created successfully!");
    navigate("/");
  }

  return (
    <div className="container">
      <BlogForm onSubmit={handleCreate} />
    </div>
  );
}

export default CreatePost;
