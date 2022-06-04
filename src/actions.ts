import {Dispatch} from 'react';
import { SET_LOADING, SET_SEARCH, UNSET_LOADING } from './constants';

export const setLoading = (dispatch:Dispatch<{type:string}>) =>{
    dispatch({type:SET_LOADING});
}
export const unsetLoading = (dispatch:Dispatch<{type:string}>) =>{
    dispatch({type:UNSET_LOADING});
}
export const setSearch = (dispatch:Dispatch<{type:string,search?:string}>,search:string) =>{
    dispatch({type:SET_SEARCH, search:search});
}