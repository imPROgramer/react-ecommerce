import { createContext, useEffect, useReducer } from 'react';
import { createUserDocumentFromAuth, onAuthStateChanged$ } from '../utils/firebase.utils';
import { createAction } from '../reducers/reducer.utils';

const INITIAL_STATE = {
    currentUser:null
}

const userReducer =(state, action)=>{

    const {type,payload} = action;
    console.log({type,payload});
    switch(type){
        case 'SET_CURRENT_USER':
            return {currentUser:payload}
        case 'GET_CURRENT_USER':
            return state.currentUser;
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : ()=>null
})

const USER_ACTION_TYPES ={
    SET_CURRENT_USER:'SET_CURRENT_USER',
    GET_CURRENT_USER:'GET_CURRENT_USER'
}

function UserProvider({children}){
    
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const {currentUser} = state;

    const setCurrentUser = (user)=>{
        // dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }
    
    const value  = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged$((user)=>{
            console.log({user});
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        },
        (err)=>{console.log(err)},
        ()=>{console.log('done')}
        )
        return unSubscribe;
    },[]);
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );

}

export default UserProvider;



