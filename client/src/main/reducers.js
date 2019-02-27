import { combineReducers } from 'redux'  
import { apiData, removeItem, adicionaItem } from '../reducers/reducer'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({   
    retornoDb: apiData,
    removeItem,
    adicionaItem,
    toastr: toastrReducer
})

