import React from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = React.useState(false);

    const handleToggleClick = () => {
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
            className={`p-2 w-20 h-10 rounded-full cursor-pointer transition-colors duration-300 ${
                isOn ? "bg-yellow-500" : "bg-gray-600"
            }`}
            onClick={handleToggleClick}
        >
            <div
                className={`w-1/2 h-full rounded-full bg-green-500 transition-transform duration-300 ease-out flex items-center justify-center ${
                    isOn ? "translate-x-full" : ""
                }`}
            >
                <span className='text-xs'>{isOn ? 'ON' : 'OFF'}</span>
            </div>
        </div>
    )
}

export default Toggle;