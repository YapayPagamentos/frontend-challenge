import api from '../services/api';
import { toastr } from 'react-redux-toastr'

export const apiAction  =  () => {  
    
    const response = api.get('/users');
 
    return{         
        type: 'Api_data',
        payload: response      
    } 

}

export const DeleteItem = (id) => {
    return  dispatch => {
        dispatch(itemRemove(true))
        api.delete('/users/' + id).then(() => {
            dispatch(itemRemove(false))
            dispatch(apiAction())
        })
        
    }
}

export function itemRemove(bool) {     
    return {         
        type: 'REMOVE_ITEM',         
        isRemoved: bool     
    } 
}

export const AddItem = (user) => {
    return dispatch => {
        api.post('/users/', user).then(() => {
            dispatch(itemAdd(false))
            dispatch(apiAction())
        }).then(response => {
            toastr.success('Sucesso!', 'Cadastrado com sucesso!')
        });
    }
}
  
export function itemAdd(bool) {     
    return {         
        type: 'ADICIONA_ITEM',         
        isAdd: bool     
    } 
}