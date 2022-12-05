import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { getPostThunk } from "../../../store/post";
import { getCommentsThunk } from "../../../store/comment";

import UpdatePostFormModal from "../UpdatePostFormModal";
import DeletePostFormModal from "../DeletePostFormModal";

import DeleteCommentFormModal from "../../Comments/DeleteCommentModal";
import UpdateCommentFormModal from "../../Comments/UpdateCommentFormModal";
import CreateCommentFormModal from "../../Comments/CreateCommentFormModal";
import "./PostDetails.css";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector((state) => state.session.user); // OBJ | CURRENT SESSION USER | WHO IS LOGGED IN

  const allPostsObj = useSelector((state) => state.posts); // OBJ OF OBJS | ALL POSTS
  const allPostsArr = Object.values(allPostsObj); // ARR OF OBJS | ALL POSTS
  const currentPostObj = allPostsArr.find(
    (post) => post.id === parseInt(postId)
  ); // OBJ | CURRENT SPOT

  const currentPostCommentsObj = useSelector((state) => state.comments); // OBJ OF OBJS | commentS FOR THE CURRENT SPOT DETAILS PAGE
  const currentPostCommentsArr = Object.values(currentPostCommentsObj); // ARR OF OBJS | commentS FOR THE CURRENT SPOT DETAILS PAGE

  // const commentCount = currentPostCommentsArr.length;
  const commentToUpdate = sessionUser
    ? currentPostCommentsArr.find(
        (comment) => comment.user_id === sessionUser.id
      )
    : undefined;

  // CONDITIONAL RENDERING CONSOLE LOGS | UPDATE AND DELETE SPOT
  console.log("postId based on useParams | postID:", postId);
  console.log(
    "All Posts Information as an OBJECT of Objects of Posts by SpotID | allPostsObj: ",
    allPostsObj
  );
  console.log(
    "All Posts Information as an ARRAY of Objects of Posts by SpotID | allPostsArr: ",
    allPostsArr
  );
  console.log(
    "Current post based on the :postId as an OBJECT in URL of the PostDetailsPage | currentPostObj: ",
    currentPostObj
  );

  // USE FOR LIKES
  //   const starRatingsArr = currentSpotcommentsArr.map((comment) => comment.stars);
  //   // console.log('This is the star ratings as an Array: ', starRatingsArr);

  //   const sumOfStarRatings = starRatingsArr.reduce(
  //     (previousValue, currentValue) => +previousValue + +currentValue,
  //     0
  //   );

  // CONDITIONAL RENDERING CONSOLE LOGS | SESSION USER | OWNER ID
  // console.log('The Current Session User as an OBJECT | sessionUser: ', sessionUser);
  // console.log("The Current Seesion User ID as a NUMBER | sessionUser.id: ", sessionUser.id);
  // console.log("The Current Spot Owner ID as a NUMBER | currentPostObj.ownerId: ", currentPostObj.ownerId);

  // CONDITIONAL RENDERING CONSOLE LOGS | UPDATE AND DELETE comment
  console.log(
    "All Comments for current Post as an OBJECT of objects | currentPostCommentsObj: ",
    currentPostCommentsObj
  );
  console.log(
    "All Comments for current Post as an ARRAY of objects | currentPostCommentsArr: ",
    currentPostCommentsArr
  );
  // console.log("All Posts Information as an ARRAY of Objects of Posts by SpotID | allPostsArr: ", allPostsArr);
  // console.log("Current spot based on the :spotId as an OBJECT in URL of the SpotDetailsPage | currentPostObj: ", currentPostObj);

  useEffect(() => {
    dispatch(getPostThunk(postId))
      .then(() => dispatch(getCommentsThunk(postId)))
      .then(() => setIsLoaded(true));
    // let extra = dispatch(getCommentsThunk(postId));
    // console.log(`THIS IS EXTRA VARIABLE +++++++: `, extra);
  }, [dispatch, postId]);

  let commentButtons;
  if (commentToUpdate) {
    commentButtons = (
      <div>
        <UpdateCommentFormModal commentToUpdate={commentToUpdate} />
        <DeleteCommentFormModal commentToUpdate={commentToUpdate} />
      </div>
    );
  } else {
    commentButtons = (
      <div>
        {sessionUser && currentPostObj?.user_id !== sessionUser?.id && (
          <CreateCommentFormModal />
        )}
      </div>
    );
  }

  let postButtons;
  if (currentPostObj?.user_id === sessionUser?.id) {
    postButtons = (
      <div>
        <UpdatePostFormModal postToUpdate={currentPostObj} />
        <DeletePostFormModal postToUpdate={currentPostObj} />
      </div>
    );
  }

  if (isLoaded && !currentPostObj) return <Redirect to="/discover" />;

  return (
    isLoaded && (
      <>
        <div className="a-full-post-page-wrap">
          <div className="a1-left-container">
            {/* <div className="a1-left-post-photo"> */}
            <img
              className="post-detail-image"
              id="post-img"
              src={currentPostObj?.photo}
              alt="post-left"
              onError={(e) =>
                (e.target.src =
                  "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png")
              }
            ></img>
            {/* </div> */}
          </div>

          <div class="a2-right-details">
            <div class="a2a-username-location">
              <img
                id="username-image"
                src={currentPostObj?.User?.profile_photo}
              ></img>
              <div>
                <div id="a2a-us-lo">
                  <p id="a2a-1">{currentPostObj?.User.username}</p>
                  <p id="a2a-2">{currentPostObj?.location}</p>
                </div>
                <div id="edit-post-buttons">{postButtons}</div>
              </div>
            </div>

            <div class="a2b">
              <div class="a2b-description-tips">
                <p id="a2b-1-description">{currentPostObj?.description}</p>
                <p id="a2b-2-tips">{currentPostObj?.tips}</p>
              </div>

              <div class="a2c-comments-container">
                <div id="a2c-1-comments">
                  {/* <p id="comments-title">Comments</p> */}
                  {currentPostCommentsArr.map((comment) => (
                    <div
                      key={comment?.id}
                      className="individual-comment-container"
                      id="a2c-2-individual-comments"
                    >
                      <div id="a2c-3-comment">
                        {comment?.User?.username}: {comment?.comment}
                      </div>
                    </div>
                  ))}
                </div>
                <div class="a2d-5-update-comment-buttons">{commentButtons}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default PostDetails;
