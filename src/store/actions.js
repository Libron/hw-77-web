import axios from '../axios-instance';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const PUBLISH_COMMENT_REQUEST = 'PUBLISH_COMMENT_REQUEST';
export const PUBLISH_COMMENT_SUCCESS = 'PUBLISH_COMMENT_SUCCESS';
export const PUBLISH_COMMENT_FAILURE = 'PUBLISH_COMMENT_FAILURE';

export const fetchCommentsRequest = () => {
    return {type: FETCH_COMMENTS_REQUEST};
};
export const fetchCommentsSuccess = comments => {
    return {type: FETCH_COMMENTS_SUCCESS, comments};
};
export const fetchCommentsFailure = error => {
    return {type: FETCH_COMMENTS_FAILURE, error}
};

export const publishCommentRequest = () => {
    return {type: PUBLISH_COMMENT_REQUEST};
};
export const publishCommentSuccess = (comment) => {
    return {type: PUBLISH_COMMENT_SUCCESS, comment};
};
export const publishCommentFailure = error => {
    return {type: PUBLISH_COMMENT_FAILURE, error}
};

export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        axios.get('/threads').then(response => {
            dispatch(fetchCommentsSuccess(response.data));
        }, error => {
            dispatch(fetchCommentsFailure(error));
        });
    }
};

export const publishComment = (data) => {
    return (dispatch) => {
        dispatch(publishCommentRequest());
        axios.post('/threads', data).then((response) => {
            dispatch(publishCommentSuccess(response.data));
        }, error => {
            dispatch(publishCommentFailure(error));
        });
    };
};