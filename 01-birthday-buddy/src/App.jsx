import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays</h3>
        <List people={people} />

        {people.length === 0 ? (
          <button className="btn" onClick={() => setPeople(data)}>
            Refresh
          </button>
        ) : (
          <button className="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        )}
      </section>
    </main>
  );
};
export default App;
