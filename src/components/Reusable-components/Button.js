import "../../css/components/Button.css"

function Button({ text, onClick }) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };


return <div className="button-box">
        <button onClick={handleClick} className="button">
        <p className="button-text">
            {text}
            </p>
    </button>
    </div>
}

export default Button;