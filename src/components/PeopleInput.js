function PeopleInput({
    numberOfPeople,
    onNumberOfPeopleInput,
    isNumberOfPeopleValid,
    children,
}) {
    return (
        <div className="people-container">
            <div className="error-container">
                <label htmlFor="people-input" id="people-label">
                    {children}
                </label>
                <span
                    className="zero-error"
                    style={{
                        visibility: isNumberOfPeopleValid
                            ? "hidden"
                            : "visible",
                    }}
                >
                    Can't be zero
                </span>
            </div>
            <input
                type="text"
                placeholder="0"
                value={numberOfPeople}
                onChange={(e) => onNumberOfPeopleInput(e.target.value)}
                id="people-input"
                name="people-input"
            />
        </div>
    );
}

export default PeopleInput;
