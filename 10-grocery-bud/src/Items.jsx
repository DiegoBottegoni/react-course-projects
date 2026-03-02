import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem, editTask }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
            editTask={editTask}
          />
        );
      })}
    </div>
  );
};
export default Items;
