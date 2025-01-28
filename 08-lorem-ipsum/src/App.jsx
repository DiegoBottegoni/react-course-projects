import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let amount = parseInt(count);

    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h4>Lorem Ipsum generate</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="input"
          min="1"
          step="1"
          max="9"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
