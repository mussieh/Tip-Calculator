import TipPercentage from "./TipPercentage";

function TipInput({ tipInput, onTipInput, children }) {
    return (
        <div>
            <p id="tip-label">{children}</p>
            <div className="tip-percentages">
                <TipPercentage tipInput={tipInput} onTipInput={onTipInput}>
                    5%
                </TipPercentage>
                <TipPercentage tipInput={tipInput} onTipInput={onTipInput}>
                    10%
                </TipPercentage>
                <TipPercentage tipInput={tipInput} onTipInput={onTipInput}>
                    15%
                </TipPercentage>
                <TipPercentage tipInput={tipInput} onTipInput={onTipInput}>
                    25%
                </TipPercentage>
                <TipPercentage tipInput={tipInput} onTipInput={onTipInput}>
                    50%
                </TipPercentage>
                <div className="tip-percentage-container">
                    <input
                        placeholder="Custom"
                        type="text"
                        id="custom-tip-input"
                        onChange={(e) =>
                            onTipInput(e.target.value ? e.target.value : 0)
                        }
                        name="custom-tip"
                    />
                </div>
            </div>
        </div>
    );
}

export default TipInput;
