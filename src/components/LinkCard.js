import React from "react";

const LinkCard = ({ link }) => {
  return (
    <div className="card">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-warning mr2">Archive</button>
        &nbsp;
        <button className="btn btn-danger  ml2">Delete</button>
      </div>
    </div>
  );
};

export default LinkCard;
