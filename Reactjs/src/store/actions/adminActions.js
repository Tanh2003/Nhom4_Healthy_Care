import actionTypes from './actionTypes';

export const fetchGenderStart = () => ({
    type: actionTypes.FETCH_GENDER_START
})

export const fetchGenderSucess = () => ({
    type: actionTypes.FETCH_GENDER_SUCCESS
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})


