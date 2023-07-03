// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import firebase from "firebase/compat/app";

// const Home = () => {
//   const navigate = useNavigate();
//   const [allDoc, setallDoc] = useState([]);
//   const db = firebase.firestore();

//   const fetchData = async () => {
//     const snapshot = await db.collection("Blog").get();
//     const data = snapshot.docs.map((doc) => doc.data());
//     setallDoc(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array ensures it only runs once on component mount

//   return (
//     <div className="home">
//       <div className="blog-list">
//         {allDoc.map((blog) => (
//           <div className="blog-preview" key={blog.id}>
//             <Link to={`/blogs/${blog.id}`}>
//               <h2>{blog.Title}</h2>
//               <p>Written by {blog.Author}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const Home = () => {
  const navigate = useNavigate();
  const [allDoc, setallDoc] = useState([]);
  const db = firebase.firestore();

  const fetchData = async () => {
    const snapshot = await db.collection("Blog").get();
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setallDoc(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="blog-list">
        {allDoc.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <div
              onClick={() => {
                navigate(
                  `BlogDetails/${blog.id}`
                  // { state: blog }
                );
              }}
            >
              <h2>
                {console.log(blog.id)}
                {blog.Title}
              </h2>{" "}
            </div>
            <p>Written by {blog.Author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Home;
