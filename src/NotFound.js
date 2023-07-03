// import { Link } from "react-router-dom"
// const NotFound = () => {
//   // return (
//   //   <div className="not-found">
//   //     <h2>Sorry</h2>
//   //     <p>That page cannot be found</p>
//   //     <Link to="/">Back to the homepage...</Link>
//   //   </div>
//   // );
// }

// export default NotFound;
import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const db = firebase.firestore();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = db.collection("Blog").doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
          const blogData = doc.data();
          console.log(blogData);
          setBlog(blogData);
        } else {
          console.log(id);
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };

    fetchBlog();
  }, [id, db]);

  return (
    <div className="blog-details">
      {blog ? (
        <article>
          <h2 style={{ color: "blue", fontSize: "30px" }}>{blog.Title}</h2>
          <p>Written by {blog.Author}</p>
          <div>{blog.Body}</div>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
