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
    // payload = comment-input
    return {
        type: CREATE_COMMENT,
        payload
    }
}

// UPDATE | PUT
const updateCommentAction = (payload) => {
    // payload = comment-input
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
export const getCommentsThunk = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/comments`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getCommentsAction(data))
        return data;
    }
};

// CREATE || POST
export const createCommentThunk = (payload, postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = response.json()
        dispatch(createCommentAction(data))
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

const initialState = {};
const commentsReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case GET_COMMENTS:
            action.payload.Comment.forEach(comment => {
                newState[comment.post_id] = comment
            })
            return newState;

        case CREATE_COMMENT:
            newState = {...state}
            newState[action.payload] = {...newState[action.payload.id], ...action.payload}
            return newState;

        case UPDATE_COMMENT:
            newState = {...state}
            newState[action.payload] = {...newState[action.payload.id], ...action.payload}
            return newState;

        case DELETE_COMMENT:
            newState = {...state}
            delete newState[action.payload]

        default:
            return state;
    };
};

export default commentsReducer
