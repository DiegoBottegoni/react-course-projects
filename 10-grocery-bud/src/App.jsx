import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(defaultList);
  const [editId, setEditId] = useState("");

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success(`'${itemName}' added`);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.error("item deleted");
    if (itemId === editId) {
      setEditId("");
    }
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const updateItem = (newName) => {
    const newItems = items.map((item) => {
      if (item.id === editId) {
        return { ...item, name: newName };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    setEditId("");
    toast.success("value changed");
  };

  const editTask = (itemId) => {
    setEditId(itemId);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-right" />
      <Form
        addItem={addItem}
        editId={editId}
        items={items}
        updateItem={updateItem}
      />
      <Items items={items} removeItem={removeItem} editItem={editItem} editTask={editTask} />
    </section>
  );
};

export default App;
