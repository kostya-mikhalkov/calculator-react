
const Buttons = ({theme, changeExp}) => {
    const btnReset = ['AC', '+/-', '%'];
    const btnNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'];
    const btnArithmetics = ['÷', 'x', '-', '+', '='];
    return (
        <div className={`btn ${theme ? 'btn_light' : 'btn_dark'}`}>
            <div className={`btn_reset ${theme ? 'btn_reset__light' : 'btn_reset__dark'}`}>
                {btnReset.map((item, ind) => {
                    return <button className={`btn_reset__button ${theme ? 'btn_reset__button__light' : 'btn_reset__button__dark'}`}
                                    key={ind}>
                                {item}
                            </button>
                })}
            </div>
            <div className={`btn_num ${theme ? 'btn_num__light' : 'btn_num__dark'}`}>
                {btnNum.map((item, ind) => {
                    return <button className={`btn_num__button ${theme ? 'btn_num__button__light' : 'btn_num__button__dark'}`}
                            key={ind}
                            data-num={item}
                            onClick={(e) => changeExp(e)}>
                                {item}
                           </button>
                })}
            </div>
            <div className={`btn_arithmetics ${theme ? 'btn_arithmetics__light' : 'btn_arithmetics__dark'}`}>
                {btnArithmetics.map((item, ind) => {
                    return <button className={`btn_arithmetics__button ${theme ? 'btn_arithmetics__button__light' : 'btn_arithmetics__button__dark'} ${btnArithmetics.length - 1 === ind ? 'btn_arithmetics__button__circle' : null}`}
                            key={ind}>
                                {item}
                           </button>
                })}
            </div>
        </div>
    )
}

export default Buttons;