'use client';
import { useState, createContext, useContext } from 'react';

const Context = createContext('none');

export function BackgroundProvider({children}) {
    const [background, setBackground] = useState('none');

    return (
        <Context.Provider value={[background, setBackground]}> {children} </Context.Provider>
    )
}

export function useBackgroundContext() {
    return useContext(Context);
}