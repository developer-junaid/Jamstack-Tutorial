import React from "react";

// Components
import LinkCard from "./LinkCard";

// Component
const LinkList = ({ links, refreshLinks }) => {
  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links &&
        links
          .filter((link) => !link.archived)
          .map((link) => (
            <LinkCard key={link.name} link={link} refreshLinks={refreshLinks} />
          ))}
      <h2 className="my-4">Archived</h2>
      {links &&
        links
          .filter((link) => link.archived)
          .map((link) => (
            <LinkCard key={link.name} link={link} refreshLinks={refreshLinks} />
          ))}
    </div>
  );
};

export default LinkList;
