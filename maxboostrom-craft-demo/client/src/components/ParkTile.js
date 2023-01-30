import React from "react";

import Button from "./Button";

const ParkTile = ({ park = {} }) => {
  const { category, title, link, linkText, image, body } = park;
  let classNameKey = category.toLowerCase();
  let bannerClassName = classNameKey;
  let linkClassName = classNameKey + "Link";
  let titleClassName = classNameKey + "Title";

  return (
    <div className="park-tile">
      <div className={bannerClassName}>
        <p className="category">{category}</p>
      </div>
      <img src={image} alt="park image" className="park-image"></img>
      <p className={titleClassName}>{title || "National Park"}</p>
      <p className="body">{body}</p>
      <Button link={link} divClassName={linkClassName}>
        {linkText}
      </Button>
    </div>
  );
};

export default ParkTile;
