import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem, editId, items, updateItem }) => {
  const [newItemName, setNewItemName] = useState("");

  useEffect(() => {
    if (editId) {
      const specificItem = items.find((item) => item.id === editId);
      if (specificItem) {
        setNewItemName(specificItem.name);
      }
    } else {
      setNewItemName("");
    }
  }, [editId, items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) {
      toast.error("please provide something");
      return;
    }
    if (editId) {
      updateItem(newItemName);
    } else {
      addItem(newItemName);
    }
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>My List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          {editId ? "edit" : "add item"}
        </button>
      </div>
    </form>
  );
};
export default Form;
