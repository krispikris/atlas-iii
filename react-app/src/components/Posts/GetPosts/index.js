import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./GetPosts.css";
import { getAllPostsThunk } from "../../../store/post";

const GetPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts;
  });

  const [isLoaded, setIsLoaded] = useState(false);
  console.log("THIS IS THE POSTS VARIABLE: ", posts);

  const allPosts = Object.values(posts);
  console.log("This is all the Posts in an Array ", allPosts);

  useEffect(() => {
    dispatch(getAllPostsThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <div className="all-posts-wrap">
          <div className="all-posts-homepage-container">
            {allPosts.map((post) => (
              <div key={post.id} className="individual-post-container">
                <div id="post-description-left">
                  <div id="post-prop-1">{post.location}</div>
                  <div id="post-prop-2">Shared by {post.user_id}</div>
                </div>
                ;
                <NavLink to={`/posts/${post.id}`}>
                  <img
                    className="post-card"
                    src={post?.photo || ""}
                    onError={(e) =>
                      (e.target.src =
                        "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png")
                    }
                    alt="one-post-card"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default GetPosts;
