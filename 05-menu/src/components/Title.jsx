const Title = ({ title }) => {
  return (
    <header className="title">
      <h2>{title || "default"}</h2>
      <div className="title-underline"></div>
    </header>
  );
};
export default Title;
