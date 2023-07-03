import { createContext, useEffect, useState} from 'react';
import { createUserDocumentFromAuth, onAuthStateChanged$ } from '../utils/firebase.utils';

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : ()=>null
})

function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
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