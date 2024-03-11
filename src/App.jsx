import { useState } from "react";
import { data } from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlePara = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (amount < 1) amount = 1;
    if (amount > 7) amount = 7;

    setText(data.slice(0, amount));
    return;
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Paragraph Generator </h1>

      <form
        action=""
        className="flex justify-center items-center my-5 gap-4"
        onSubmit={handlePara}
      >
        <label htmlFor="" className="text-xl font-medium">
          Number of Paragraph
        </label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="Type the number"
          className="p-2 text-base font-medium"
        />

        <button
          type="submit"
          className="py-2 px-4 bg-slate-900 text-white text-sm font-bold"
        >
          Generate Paragraph{" "}
        </button>
      </form>

      {text.map((data, index) => (
        <div key={index} className="px-10">
          <p className="text-base font-medium">{data}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
