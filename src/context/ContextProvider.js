import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false)
    const handelClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }
    const setColor = (color) => {
        setcurrentColor(color)
        localStorage.setItem('themeMode', color);
        console.log(color);
        setThemeSettings(false)
    }
    const setMode = (e) => {
        setcurrentMode(e.target.value)
        localStorage.setItem('colorMode', e.target.value);
        console.log(e.target.value);
        setThemeSettings(false)
    }
    return (

        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handelClick,
                screenSize,
                setScreenSize,
                setColor,
                setMode,
                currentMode,
                currentColor,
                setThemeSettings,
                themeSettings
            }}>
            {children}
        </StateContext.Provider>
    );
};
export const useSateContext = () => useContext(StateContext);