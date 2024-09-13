import sun_light from '../../img/sun-light.svg';
import sun_dark from '../../img/sun-dark.svg';
import moon_light from '../../img/moon-light.svg';
import moon_dark from '../../img/moon-dark.svg';

const ToggleTheme = ({changeTheme, theme}) => {
    return (
        <div className="theme">
            <div className="theme_sun"
                 onClick={changeTheme}>
                <img src={theme ? sun_light : sun_dark} alt="sun" />
            </div>
            <div className="theme_moon"
                 onClick={changeTheme}>
                <img src={theme ? moon_light : moon_dark} alt="moon" />
            </div>
            <div className={`theme_slider ${theme ? 'left' : 'right'}`}></div>
        </div>
    )
}

export default ToggleTheme;