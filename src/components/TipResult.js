function TipResult({
    tipPerPerson,
    totalPerPerson,
    isButtonDisabled,
    onReset,
}) {
    return (
        <div className="tip-result-container">
            <div>
                <div className="tip-amount-container">
                    <div className="tip-amount-text">
                        <p className="tip-amount">Tip Amount</p>
                        <p className="person">/ person</p>
                    </div>
                    <h1>${tipPerPerson}</h1>
                </div>
                <div className="total-tip-container">
                    <div className="total-tip-text">
                        <p className="total">Total</p>
                        <p className="person">/ person</p>
                    </div>
                    <h1>${totalPerPerson}</h1>
                </div>
            </div>
            <button
                onClick={onReset}
                className="reset-btn"
                disabled={isButtonDisabled}
            >
                RESET
            </button>
        </div>
    );
}

export default TipResult;
