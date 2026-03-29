import { createContext, useContext, useEffect, useState } from 'react'
import { api } from './axios'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    let [user, setUser] = useState({})
    useEffect(() => {
        api.get('/auth/refreshToken').then(({ data }) => {
            console.log(data)
            setUser(data)
        }).catch((err) => { console.log(err.response) })
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}