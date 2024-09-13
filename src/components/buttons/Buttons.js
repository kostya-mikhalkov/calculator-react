
const Buttons = ({theme}) => {
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
        </div>
    )
}

export default Buttons;