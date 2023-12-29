'use client'

import React, { useContext } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext)
}
export default function AuthContextProvider({ children }) {

    const [userState, setUserState] = useState("false");
    const [userData, setUserData] = useState([])

    return (<AuthContext.Provider value={{ userState, setUserState, setUserData, userData }}>
        {children}
    </AuthContext.Provider>)
}
