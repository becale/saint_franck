
import { useContext, createContext, Children, useEffect
 } from "react";


const UserContext = createContext(undefined);

export const UserProvider = () => {

    // valeur à transfere

    return (<UserContext.Provider value={{1:'Yema'}}></UserContext.Provider>)
}

export const useUser = () => { useContext(UserContext)}

useEffect(()=>{1+1}, {}) 