import { useState } from "react";

import ToggleTheme from "../toggleTheme/ToggleTheme";
import Display from "../display/Display";
import Buttons from "../buttons/Buttons";

import './Calculator.scss';

const Calculator = () => {
    const [theme, setTheme] = useState(true);
    const [expression, setExpression] = useState('0')

    const changeExpression = (e) => {
        const numCalc = e.target.getAttribute('data-num');
        setExpression(expression => {
            if (expression.length === 1 && expression[0] === '0') {
                // Если введено '0' и нажата кнопка '0' или '00', ничего не происходит
                if (numCalc === '0' || numCalc === '00') {
                    return expression; // Не изменяем выражение
                }
                // Иначе заменяем '0' на введенное число
                return numCalc;
            } else {
                // Если выражение не начинается с '0', просто добавляем символ
                return expression + numCalc;
            }
        })
    }

    const changeTheme = () => {
        setTheme(theme => !theme)
    };

    return (
        <div className={`calc ${theme ? 'calc-light' : 'calc-dark'}`}>
            <ToggleTheme changeTheme={changeTheme} theme={theme}/>
            <Display expr={expression} />
            <Buttons theme={theme} changeExp={changeExpression}/>
        </div>
    )
}

export default Calculator;