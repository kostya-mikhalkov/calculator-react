import { useState } from "react";

import ToggleTheme from "../toggleTheme/ToggleTheme";
import Display from "../display/Display";
import Buttons from "../buttons/Buttons";

import './Calculator.scss';

const Calculator = () => {
    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(theme => !theme)
    };

    return (
        <div className={`calc ${theme ? 'calc-light' : 'calc-dark'}`}>
            <ToggleTheme changeTheme={changeTheme} theme={theme}/>
            <Display />
            <Buttons theme={theme}/>
        </div>
    )
}

export default Calculator;