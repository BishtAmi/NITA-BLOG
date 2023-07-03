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
    <div className="blogpage">
      {blog ? (
        <article>
          <h2 style={{ color: "blue", fontSize: "40px", textAlign: "center" }}>
            {blog.Title}
          </h2>
          <p style={{ color: "yellow", fontSize: "20px", textAlign: "right" }}>
           -Written by {blog.Author}
          </p>
          <div className="blogContent">
            <p style={{ color: "black", fontSize: "15px" }}>{blog.Body}</p>
          </div>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
 
export default BlogDetails;
