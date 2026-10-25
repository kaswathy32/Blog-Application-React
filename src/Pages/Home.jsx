
import { useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../Components/BlogCard";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";

function Home() {
  const posts = useSelector((state) => state.blogs.posts);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category)),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="hero">
        <p className="hero-label">WELCOME TO MY BLOG</p>

        <h1>Stories, Ideas &amp; Inspiration</h1>

        <p className="hero-description">
          Share your thoughts, explore new ideas, and learn something new every day.
        </p>

        <div className="hero-filters">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            categories={categories}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </section>

      <main className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">EXPLORE THE LATEST</p>
            <h2>Latest Blogs</h2>
          </div>

          <span>{filteredPosts.length} blogs found</span>
        </div>

        {filteredPosts.length === 0 ? (
          <p className="empty-message">
            No blogs found. Try another search.
          </p>
        ) : (
          <div className="blog-list">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
