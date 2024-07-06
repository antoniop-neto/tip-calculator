import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const averageTip = bill * ((yourTip + friendTip) / 2 / 100);

  function handleReset() {
    setBill("");
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div className="tip-calculator">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectTip tip={yourTip} onSelect={setYourTip}>
        How did you like the service?
      </SelectTip>
      <SelectTip tip={friendTip} onSelect={setFriendTip}>
        How did your friend like the service?
      </SelectTip>
      {bill > 0 && (
        <>
          <DisplayText bill={bill} selected={yourTip} averageTip={averageTip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <form>
      <label>How much was the bill?</label>
      <input
        placeholder="Bill value"
        className="form"
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </form>
  );
}

function SelectTip({ tip, onSelect, children }) {
  return (
    <form>
      <label>{children}</label>
      <select
        className="form"
        value={tip}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </form>
  );
}

function DisplayText({ bill, averageTip }) {
  return (
    <h3>
      You pay ${bill + averageTip} (${bill} + ${averageTip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <button className="btn" onClick={onReset}>
      Reset
    </button>
  );
}
