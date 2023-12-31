function BillInput({ billInput, onBillChange, isBillValid, children }) {
    return (
        <div className="bill-container">
            <div className="error-container">
                <label htmlFor="bill-input" id="bill-label">
                    {children}
                </label>
                <span
                    className="zero-error"
                    style={{ visibility: isBillValid ? "hidden" : "visible" }}
                >
                    Can't be zero
                </span>
            </div>
            <input
                type="text"
                placeholder="0"
                value={billInput}
                onChange={(e) => {
                    onBillChange(e.target.value);
                }}
                id="bill-input"
                name="bill-input"
            />
        </div>
    );
}

export default BillInput;
