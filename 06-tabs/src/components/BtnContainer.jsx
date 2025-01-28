const BtnContainer = ({ jobs, setCurrentItem, currentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => (
        <button
          key={item.id}
          className={index === currentItem ? "job-btn active-btn" : "job-btn"}
          onClick={() => setCurrentItem(index)}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
