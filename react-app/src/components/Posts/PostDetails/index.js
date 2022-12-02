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
  // console.log("All Reviews for current spot as an OBJECT of objects | currentSpotReviewsObj: ", currentSpotReviewsObj);
  // console.log("All Reviews for current spot as an ARRAY of objects | currentSpotReviewsArr: ", currentSpotReviewsArr);
  // console.log("All Posts Information as an ARRAY of Objects of Posts by SpotID | allPostsArr: ", allPostsArr);
  // console.log("Current spot based on the :spotId as an OBJECT in URL of the SpotDetailsPage | currentPostObj: ", currentPostObj);

  useEffect(() => {
    dispatch(getPostThunk(postId))
      .then(() => dispatch(getCommentsThunk(postId)))
      .then(() => setIsLoaded(true));
    let extra = dispatch(getCommentsThunk(postId));
    console.log(`THIS IS EXTRA VARIABLE +++++++: `, extra);
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
  if (currentPostObj?.ownerId === sessionUser?.id) {
    postButtons = (
      <div>
        {/* <UpdateSpotFormModal currentPostObj={currentPostObj}/>
                                <DeleteSpotFormModal currentPostObj={currentPostObj}/> */}
        <UpdatePostFormModal postToUpdate={currentPostObj} />
        <DeletePostFormModal postToUpdate={currentPostObj} />
      </div>
    );
  }
  // else {
  //     spotButtons =     <div>
  //                             <CreateSpotFormModal />
  //                         </div>;
  // }

  if (isLoaded && !currentPostObj) return <Redirect to="/" />;

  return (
    isLoaded && (
      <>
        <div className="full-post-page-wrap">
          <div className="post-detail-title-container">
            <h2 id="post-title">{currentPostObj?.title}</h2>
            <h4 id="post-title-info"></h4>
          </div>

          <div id="post-photo">
            <img
              id="post-img"
              src={currentPostObj?.photo}
              alt="spot-image-inside-grid-1"
              onError={(e) =>
                (e.target.src =
                  "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png")
              }
            ></img>
          </div>

          <div className="double-card">
            <div className="post-detail-info-container">
              {postButtons}

              <div id="post-detail-description">
                <h4>Description</h4>
                <>{currentPostObj.description}</>
                <h4>Tips</h4>
                <>{currentPostObj.tips}</>
              </div>
            </div>

            <div className="comments-container">
              <div className="comments-of-post">
                <div>
                  <h4 id="title-header-2">Comments</h4>
                </div>
                <div className="comment-buttons">{commentButtons}</div>

                {currentPostCommentsArr.map((comment) => (
                  <div
                    key={comment?.id}
                    className="individual-comment-container"
                  >
                    {/* {console.log('comment for current Spot as an OBJECT: ', comment)} */}
                    <div id="comment-writer">
                      {comment?.User?.firstName} says...
                    </div>
                    {/* <div>{comment.createdAt}</div>       FIND WAY TO CONVERT INTO MONTH YEAR */}
                    <div id="comment-after">{comment?.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <DeletecommentForm /> */}
          {/* <UpdateSpotFormModal />
        <DeleteButton setIsLoaded={setIsLoaded}/> */}
        </div>
      </>
    )
  );
};

export default PostDetails;
