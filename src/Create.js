import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat";
const Create = () => {
  const db = firebase.firestore();
  const [Blog, setBlog] = useState({ title: "", body: "", author: "" });
  const handelChange = (event) => {
    event.preventDefault();
    const { title, value } = event.target;
    setBlog((prev) => {
      return { ...prev, [title]: value };
    });
  };
  const addDoc = (event) => {
    event.preventDefault();
    // .set() method if you want to give id of your choice
    // .add() method id generated automatically
    db.collection("Blog")
      .add({
        Title: Blog.title,
        Body: Blog.body,
        Author: Blog.author,
      })
      .then((docRef) => {
        // refrence a document and an Id from firestore object contain that id
        const docId = docRef.id;
        console.log(docId);
      })
      .catch(() => {
        // if fuction catches an error
        console.log("error");
      });
    if (Blog) {
      alert("Data Stored");
    } else {
      alert("plz fill the data");
    }
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={addDoc}>
        <label>Blog title:</label>
        <input
          required
          type="text"
          title="title"
          value={Blog.title}
          onChange={handelChange}
        />
        <label>Blog body:</label>
        <textarea
          rows={17}
          cols={40}
          required
          type="text"
          title="body"
          value={Blog.body}
          onChange={handelChange}
        ></textarea>
        <label>Blog author:</label>
        {/* <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        <input
          required
          type="text"
          title="author"
          value={Blog.author}
          onChange={handelChange}
          placeholder="Title"
        />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
