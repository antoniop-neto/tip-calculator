import { useState } from "react";

export default function App() {
  const [billInput, setBillInput] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const averageTip = (yourTip + friendTip) / 2;

  function handleReset() {
    setBillInput(0);
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput input={billInput} onBillInput={setBillInput} />
      <SelectTip tip={yourTip} onTip={setYourTip}>
        How did you like the service?
      </SelectTip>
      <SelectTip tip={friendTip} onTip={setFriendTip}>
        How did your friend like the service?
      </SelectTip>
      <DisplayText
        input={billInput}
        selected={yourTip}
        averageTip={averageTip}
      />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ input, onBillInput }) {
  return (
    <form>
      <h3>How much was the bill?</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => onBillInput(Number(e.target.value))}
      ></input>
    </form>
  );
}

function SelectTip({ tip, onTip, children }) {
  return (
    <form>
      <h3>{children}</h3>
      <select value={tip} onChange={(e) => onTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </form>
  );
}

function DisplayText({ input, averageTip }) {
  const totalTip = (input * averageTip) / 100;
  return (
    <h1>
      You pay ${input + totalTip} (${input} + ${totalTip} tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
