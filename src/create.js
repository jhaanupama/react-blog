import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIspending] = useState(false);
  const history = useHistory();
  let authorNew = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = { title, body, author };
    console.log(blogs);

    setIspending(true);

    fetch("https://jsonserver-ten.vercel.app/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blogs),
    })
      .then(() => {
        console.log("new blog added");
        setIspending(false);
        history.go(-1);
        history.push("/");
      })
      .catch((err) => {
        console.log("err aagy");
      });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <textarea
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></textarea>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
