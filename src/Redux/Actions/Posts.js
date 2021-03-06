import * as types from "../Constants/Posts"
import {callPostApi, callGetApi, callDeleteApi, callPutApi, callPutNotBody} from "../utils/callApi"
import { actFetchGetComment } from "./Comment"
import { notifyError, notifySuccess, notifyWarning } from "./Notify"

export const getPost = (data) => ({
    type: types.GET_POSTS,
    data
})
export const turnOff = () => ({
    type: types.TURN_OFF
})
export const actFetchGetPost = () => {
    return (dispatch) => {
        return callGetApi(`api/Posts?pageIndex=1&pageSize=10`, 'GET', null).then(res => {
            dispatch(getPost(res));
        });
    }
}
export const actFetchDeletePost = (id) => {
    return (dispatch) => {
        const check = {res: false};
        return callDeleteApi(`api/Posts/MyPosts/${id}`, check).then(res => {
            if(check.res){

            } else{
                dispatch(actFetchGetPost())
                dispatch(notifySuccess('Đã xóa bài viết'))
            }
        });
    }
}
export const actFetchTurnOff = (id) => {
    return (dispatch) => {
        return callPutNotBody(`api/Posts/MyPost/${id}`).then(res => {
            dispatch(actFetchGetPost());
            dispatch(turnOff())
        });
    }
}
