function TipPercentage({ tipInput, onTipInput, children }) {
    return (
        <div
            onClick={() => onTipInput(children)}
            className={
                `tip-percentage-container` +
                (tipInput === children ? " active-state" : "")
            }
        >
            <p>{children}</p>
        </div>
    );
}

export default TipPercentage;
