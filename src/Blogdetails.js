import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const Blogdetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("https://jsonserver-ten.vercel.app/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("https://jsonserver-ten.vercel.app/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.go(-1);
      //history.push('/');
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
