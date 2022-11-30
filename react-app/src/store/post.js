const GET_POSTS = 'post/GET_POSTS'
const GET_USER_POSTS = 'post/GET_USER_POSTS'
const GET_POST = 'post/GET_POST'
const CREATE_POST = 'post/CREATE_POST'
const UPDATE_POST = 'post/UPDATE_POST'
const DELETE_POST = 'post/DELETE_POST'

// POST ACTIONS

// READ | GET (3x)
// ALL POSTS
const getPostsAction = (payload) => {
    // payload = posts
    return {
        type: GET_POSTS,
        payload
    }
}

// USER'S POSTS
const getUserPostsAction = (payload) => {
    // payload = current_user
    return {
        type: GET_USER_POSTS,
        payload
    }
}

// SINGLE POST
const getPostAction = (payload) => {
    // payload = postId
    return {
        type: GET_POST,
        payload
    }
}

// CREATE | POST
const createPostAction = (payload) => {
    // payload = post-inputs
    return {
        type: CREATE_POST,
        payload
    }
}

// UPDATE | PUT
const updatePostAction = (payload) => {
    // payload = post-inputs
    return {
        type: UPDATE_POST,
        payload
    }
}

// DELETE
const deletePostAction = (payload) => {
    // payload = postId
    return {
        type: DELETE_POST,
        payload
    }
}

// THUNKS
// READ | GET (3x)
// ALL POSTS
export const getAllPostsThunk = async (dispatch) => {
    const response = await fetch("/api/posts")

    if (response.ok) {
        const data = await response.json()
        dispatch(getPostsAction(data))
        return data;
    }
};

// CURRENT USER'S POSTS
export const getCurrentUserPostsThunk = async (dispatch) => {
    const response = await fetch(`/api/posts/current`)

    if (response.ok) {
        const data = await response.json()
        // dispatch(getUserPostsAction(data.Posts))
        dispatch(getUserPostsAction(data))
        return data;
    }
};

// SINGLE POST
export const getPostThunk = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getPostAction(data))
        return data;
    }
};

// CREATE || POST
export const createPostThunk = (payload) => async (dispatch) => {
    const response = await fetch(`/api/posts`, {
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
export const updatePostThunk = (payload, postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = response.json()
        dispatch(updatePostAction(data))
        return data
    }
};

// DELETE
export const deletePostThunk = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
    })

    if (response.ok) {
        dispatch(deletePostAction(postId))
    }
};
