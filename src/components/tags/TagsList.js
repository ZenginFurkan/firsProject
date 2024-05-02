import React from "react";
import { useSelector } from "react-redux";

const Tags = () => {
  const tags = useSelector((state) => state.tags.data);
  console.log(tags);

  return (
    <div className="tags-container">
      {tags?.map((tag, index) => (
        <span key={index} className="tag">
          {tag.label} 
        </span>
      ))}
    </div>
  );
};

export default Tags;
