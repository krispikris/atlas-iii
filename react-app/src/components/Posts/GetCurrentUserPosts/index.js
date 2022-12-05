import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./GetCurrentUserPosts.css";
import { getCurrentUserPostsThunk } from "../../../store/post";

const GetCurrentUserPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts;
  });

  const [isLoaded, setIsLoaded] = useState(false);
  console.log("THIS IS THE POSTS VARIABLE: ", posts);

  const allPosts = Object.values(posts);
  console.log("This is all the Posts in an Array ", allPosts);

  useEffect(() => {
    dispatch(getCurrentUserPostsThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <div className="all-current-posts-wrap">
          <div id="all-current-posts-title">Your Posts</div>
          <div className="all-current-posts-container">
            {allPosts.map((post) => (
              <div key={post.id} className="individual-post-container">
                <div id="current-post-description-left">
                  <div id="current-post-prop-1">{post.location}</div>
                </div>

                <NavLink to={`/posts/${post.id}`}>
                  <img
                    className="current-post-card"
                    src={post?.photo || ""}
                    onError={(e) =>
                      (e.target.src =
                        "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png")
                    }
                    alt="current-one-post-card"
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

export default GetCurrentUserPosts;
