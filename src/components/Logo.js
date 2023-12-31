import logo from "../images/logo.svg";

function Logo() {
    return (
        <div className="header">{<img src={logo} alt="splitter logo" />}</div>
    );
}

export default Logo;
