import { Link } from "react-router-dom";
const Bloglist = ({ blogs, title }) => {
  return (
    <div className="blogList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="Blogspreview" key={blog.id}>
          <Link
            onClick={() => {
              window.location.href = `/blogs/${blog.id}`;
            }}
          >
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
