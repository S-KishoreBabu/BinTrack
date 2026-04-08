import React, { useContext } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";
const Toggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    const [isOn, setIsOn] = React.useState(false);

    const handleToggleClick = () => {
        toggleTheme();
        const newState = !isOn;
        setIsOn(newState);

        if (newState) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    };

    return (
        <div
            className={`p-2 w-20 h-10 rounded-full cursor-pointer transition-colors shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)] duration-300 ${
                isOn ? "bg-gray-600" : "bg-[#e5e5e5]"
            }`}
            onClick={handleToggleClick}
        >
            <div
                className={`w-1/2 h-full rounded-full bg-green-500 shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out flex items-center justify-center ${
                    isOn ? "translate-x-full" : ""
                }`}
            >
                <span className='text-md'>{isOn ? <MdDarkMode /> : <CiLight />}</span>
            </div>
        </div>
    )
}

export default Toggle;