// import { collection, getDoc } from "firebase/firestore";
// import { getPostsFromDb,postsCollectionRef } from "./firebase/compat/app";
// import React, { useEffect, useState,useParams,usehistory } from "react";
// const useFetch = () => {
//   const [Blog, setBlog] = useState(null);
//   useEffect(() => {
//     const fetchBlog = async () => {
//       await getDoc(postsCollectionRef).then((querySnapshot) => {
//         const newBlog = querySnapshot.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setBlog(newBlog);
//         console.log(Blog, newBlog);
//       });
//     };
//     fetchBlog();
//   }, []);
//   return {Blog};
// };

// export default useFetch;
