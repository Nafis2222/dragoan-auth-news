import logo from "../../../Picture/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <p>Journalism without Fear or fire</p>
            <h1>{moment().format("dddd,D MMMM,  YYYY")}</h1>
        </div>
    );
};

export default Header;