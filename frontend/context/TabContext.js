'use client'

import { createContext, useState } from "react";


export const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('');
    
    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
        </TabContext.Provider>
    );
}