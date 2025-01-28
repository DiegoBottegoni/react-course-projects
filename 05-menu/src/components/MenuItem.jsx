import React, { useState } from "react";

const MenuItem = ({ img, title, price, desc }) => {
  const [readMore, setReadMore] = useState(false);

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">
          {readMore ? desc : `${desc.substring(0, 50)}`}
          <button type="button" className="read-btn" onClick={toggleReadMore}>
            {readMore ? "show less..." : "read more..."}
          </button>{" "}
        </p>
      </div>
    </article>
  );
};
export default MenuItem;
