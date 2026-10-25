
import { useState } from "react";

function BlogForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [category, setCategory] = useState(
    initialData?.category || ""
  );
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [content, setContent] = useState(
    initialData?.content || ""
  );

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !title.trim() ||
      !author.trim() ||
      !category.trim() ||
      !description.trim() ||
      !content.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    onSubmit({
      title: title.trim(),
      author: author.trim(),
      category: category.trim(),
      description: description.trim(),
      content: content.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h2>{initialData ? "Edit Blog" : "Create Blog"}</h2>

      {error && <p className="error">{error}</p>}

      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />

      <label>Author</label>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter author name"
      />

      
<label>Category</label>
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  required
>
  <option value="">Select a category</option>
  <option value="Programming">Programming</option>
  <option value="React">React</option>
  <option value="Technology">Technology</option>
  <option value="Education">Education</option>
  <option value="Lifestyle">Lifestyle</option>
</select>


      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description"
      />

      <label>Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your full blog"
        rows={6}
      />

      <button type="submit">
        {initialData ? "Update Blog" : "Publish Blog"}
      </button>
    </form>
  );
}

export default BlogForm;
