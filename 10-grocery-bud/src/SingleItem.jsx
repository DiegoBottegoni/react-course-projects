import { useState } from "react";

const SingleItem = ({ item, removeItem, editItem, editTask }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <div style={{ display: "flex", gap: "0.25rem" }}>
        <button
          className="btn edit-btn"
          type="button"
          onClick={() => editTask(item.id)}
        >
          edit
        </button>
        <button
          className="btn remove-btn"
          type="button"
          onClick={() => removeItem(item.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};
export default SingleItem;
