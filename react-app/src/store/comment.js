const GET_COMMENTS = 'comment/GET_COMMENTS'
const CREATE_COMMENT = 'comment/CREATE_COMMENT'
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT'
const DELETE_COMMENT = 'comment/DELETE_COMMENT'

// COMMENT ACTIONS

// READ | GET
// ALL COMMENTS
const getCommentsAction = (payload) => {
    // payload = comments with postId
    return {
        type: GET_COMMENTS,
        payload
    }
}

// CREATE | POST
const createCommentAction = (payload) => {
    // payload = comment-inputs
    return {
        type: CREATE_COMMENT,
        payload
    }
}

// UPDATE | PUT
const updateCommentAction = (payload) => {
    // payload = comment-inputs
    return {
        type: UPDATE_COMMENT,
        payload
    }
}

// DELETE
const deleteCommentAction = (payload) => {
    // payload = commentId
    return {
        type: DELETE_COMMENT,
        payload
    }
}

// THUNKS
// READ | GET
// ALL COMMENTS FOR POST BY ID
export const getCommentsThunk = async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/comments`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getCommentsAction(data))
        return data;
    }
};

// CREATE || POST
export const createCommentThunk = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = response.json()
        dispatch(createPostAction(data))
        return data
    }
};

// UPDATE || PUT
export const updateCommentThunk = (payload, commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = response.json()
        dispatch(updateCommentAction(data))
        return data
    }
};

// DELETE
export const deleteCommentThunk = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    })

    if (response.ok) {
        dispatch(deleteCommentAction(commentId))
    }
};
