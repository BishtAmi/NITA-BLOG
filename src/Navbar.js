import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div
        style={{
          color: "white",
          marginLeft: "5px",
          fontSize: "1.8rem",
          marginTop: ".5rem",
        }}
      >
       NITA BLOG
      </div>
      <div className="links">
        <Link
          to="/"
          style={{
            color: "white",
            borderRadius: "8px",
            fontSize: "1.3rem",
          }}
        >
          Home
        </Link>
        {/* <Link
          to="/BlogDetails"
          style={{
            color: "white",
            borderRadius: "8px",
            fontSize: "1.3rem",
          }}
        >
         Blog Data
        </Link> */}
        <Link
          to="/create"
          style={{
            color: "white",
            borderRadius: "8px",
            fontSize: "1.3rem",
          }}
        >
          Add Blog
        </Link>
        <Link
          to="/uploadphoto"
          style={{
            color: "white",
            borderRadius: "8px",
            fontSize: "1.3rem",
          }}
        >
          Add photo
        </Link>
        <Link
          to="/Contact"
          style={{
            color: "white",
            borderRadius: "8px",
            fontSize: "1.3rem",
          }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
