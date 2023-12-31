import { useState } from "react";
import BillInput from "./BillInput";
import Logo from "./Logo";
import PeopleInput from "./PeopleInput";
import TipInput from "./TipInput";
import TipResult from "./TipResult";

function TipCalculator() {
    const [billInput, setBillInput] = useState("");
    const [tipInput, setTipInput] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [isBillValid, setIsBillValid] = useState(true);
    const [isNumberOfPeopleValid, setIsNumberOfPeopleValid] = useState(true);
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleResultPageChanges = (bill, tip, numberOfPeople) => {
        const parsedBill = parseFloat(bill);
        const parsedTip = parseFloat(tip);
        const parsedNumberOfPeople = parseInt(numberOfPeople);

        if (parsedBill > 0 && parsedNumberOfPeople > 0) {
            const tip = parseFloat(
                (
                    (parsedBill * (parsedTip / 100)) /
                    parsedNumberOfPeople
                ).toFixed(2)
            );
            setTipPerPerson(tip);
            setTotalPerPerson(
                (
                    (tip * parsedNumberOfPeople + parsedBill) /
                    parsedNumberOfPeople
                ).toFixed(2)
            );
        }
        setIsButtonDisabled((buttonDisabled) => {
            if (parsedBill > 0 || parsedTip > 0 || parsedNumberOfPeople > 0) {
                return false;
            } else {
                return true;
            }
        });
    };

    const handleBillChange = (bill) => {
        const parsedBill = parseFloat(bill);
        setIsBillValid(isNaN(parsedBill) ? false : true);
        setBillInput(bill);
        handleResultPageChanges(bill, tipInput, numberOfPeople);
    };

    const handleTipInput = (tip) => {
        setTipInput(tip);
        handleResultPageChanges(billInput, tip, numberOfPeople);
    };

    const handleNumberOfPeopleInput = (numOfPeople) => {
        const parsedNumberOfPeople = parseInt(numOfPeople);

        setIsNumberOfPeopleValid(isNaN(parsedNumberOfPeople) ? false : true);
        setNumberOfPeople(numOfPeople);
        handleResultPageChanges(billInput, tipInput, numOfPeople);
    };

    const handleReset = () => {
        setBillInput("");
        setTipInput("");
        setNumberOfPeople("");
        setIsBillValid(true);
        setIsNumberOfPeopleValid(true);
        setIsButtonDisabled(true);
        setTipPerPerson(0);
        setTotalPerPerson(0);
    };

    return (
        <div>
            <Logo />
            <div className="form-section">
                <form>
                    <BillInput
                        billInput={billInput}
                        onBillChange={handleBillChange}
                        isBillValid={isBillValid}
                    >
                        Bill
                    </BillInput>
                    <TipInput tipInput={tipInput} onTipInput={handleTipInput}>
                        Select Tip %
                    </TipInput>
                    <PeopleInput
                        numberOfPeople={numberOfPeople}
                        onNumberOfPeopleInput={handleNumberOfPeopleInput}
                        isNumberOfPeopleValid={isNumberOfPeopleValid}
                    >
                        Number of People
                    </PeopleInput>
                </form>
                <TipResult
                    tipPerPerson={tipPerPerson}
                    totalPerPerson={totalPerPerson}
                    isButtonDisabled={isButtonDisabled}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
}

export default TipCalculator;
