import actionTypes from './actionTypes';
import {getAllCodeService} from "../.././services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {

    return async(dispatch,getState)=>{
        try {
            dispatch({
                type:actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER");
            if(res&&res.errcode===0){
                     dispatch(fetchGenderSucess(res.data));
                    }else{
                     dispatch(fetchGenderFailed());
                     console.log("loi")
                    }
        
            
           } catch (e) {
            dispatch(fetchGenderFailed());
            console.log(e);
            
           }

    }
   
}

export const fetchGenderSucess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})


export const fetchPositionSucess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})

export const fetchRoleSucess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})


export const fetchPositionStart = () => {

    return async(dispatch,getState)=>{
        try {
            dispatch({
                type:actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("position");
            if(res&&res.errcode===0){
                     dispatch(fetchPositionSucess(res.data));
                    }else{
                     dispatch(fetchPositionFailed());
                     console.log("loi")
                    }
        
            
           } catch (e) {
            dispatch(fetchPositionFailed());
            console.log(e);
            
           }

    }
   
}

export const fetchRoleStart = () => {

    return async(dispatch,getState)=>{
        try {
            dispatch({
                type:actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("ROLE");
            if(res&&res.errcode===0){
                     dispatch(fetchRoleSucess(res.data));
                    }else{
                     dispatch(fetchRoleFailed());
                     console.log("loi")
                    }
        
            
           } catch (e) {
            dispatch(fetchRoleFailed());
            console.log(e);
            
           }

    }
   
}

