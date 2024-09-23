import { useState } from "react";
import { evaluate } from 'mathjs';

import ToggleTheme from "../toggleTheme/ToggleTheme";
import Display from "../display/Display";
import Buttons from "../buttons/Buttons";

import './Calculator.scss';

const Calculator = () => {
    const [theme, setTheme] = useState(true);
    const [expression, setExpression] = useState('0');
    const [history, setHistory] = useState([]);

    const changeAritmeticsArray = (arr) => {
        return arr.map(item => {
            if (item === '÷') {
                return '/'
            } else if (item === 'x') {
                return '*'
            } else {
                return item;
            }
        })
    }

    const changeExpression = (e) => {
        const numCalc = e.target.getAttribute('data-num');
        setExpression(expression => {
            if (numCalc === '=') {
                if (expression.length === 1 || typeof expression === 'number') {
                    return expression;
                }
                const lastNumber = expression[expression.length - 1];
                const regExp = /[1-9]/gi;
                if (!regExp.test(lastNumber)) {
                    alert(`Вы незакончили выражение после символа`);
                    return expression.slice(0, expression.length - 1);
                }
                const arrExpr = expression.split(/([+\-\x÷])/);
                const newArrInChangeAritmetics = changeAritmeticsArray(arrExpr);
                setHistory(history => [...history, `${expression} = ${evaluate(newArrInChangeAritmetics.join(''))}`])
                return evaluate(newArrInChangeAritmetics.join(''));
            }
            if (['-', '+', 'x', '÷'].includes(numCalc)) {
                const lastChar = expression[expression.length - 1];
                if (['-', '+', 'x', '÷'].includes(lastChar)) {
                    return expression.slice(0, -1) + numCalc;
                } else {
                    return expression + numCalc;
                }
            }
            if (numCalc === '%') {
                if (typeof expression === 'number') {
                    return expression
                }
                const arrExpr = expression.split(/([+\-\x÷])/);
                if (arrExpr.length === 1) {
                    return expression;
                }
                const newArrInChangeAritmetics = changeAritmeticsArray(arrExpr);
                const lastNumber = parseFloat(newArrInChangeAritmetics.pop());
                const operator = newArrInChangeAritmetics.pop();
                const resultExpr = evaluate(newArrInChangeAritmetics.join(''));
                const finalPercent = (resultExpr * lastNumber) / 100
                const regExp = /[1-9]/gi;
                    if (!regExp.test(lastNumber)) {
                        alert(`Вы незакончили выражение после символа ${operator}`);
                        return expression.slice(0, expression.length - 1);
                    }
                setHistory(expression => [...expression, `${resultExpr} - ${finalPercent}% = ${resultExpr - finalPercent}`])
                return resultExpr - finalPercent;
            }
            if (numCalc === 'AC') {
                setHistory([]);
                return '0';
            }
            if (numCalc === '+/-' && expression[0] !== '-') {
                if (expression[0] === '0') {
                    return expression
                }
                return '-' + expression;
            }
            if (numCalc === '+/-' && expression[0] === '-' && expression[0] !== '0') {
                return expression.slice(1, expression.length);
            }
            if (expression.length === 1 && expression[0] === '0') {
                if (numCalc === '0' || numCalc === '00') {
                    return expression;
                }
                if (numCalc === '.') {
                    return expression + numCalc;
                }
                return numCalc;
            } else {
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
            <Display expr={expression} history={history} theme={theme}/>
            <Buttons theme={theme} changeExp={changeExpression}/>
        </div>
    )
}

export default Calculator;