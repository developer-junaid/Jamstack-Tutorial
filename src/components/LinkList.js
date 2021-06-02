import React from "react";

// Components
import LinkCard from "./LinkCard";

// Component
const LinkList = ({ links }) => {
  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links && links.map((link) => <LinkCard key={link.name} link={link} />)}
    </div>
  );
};

export default LinkList;
