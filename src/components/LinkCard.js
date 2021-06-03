import React from "react";

const LinkCard = ({ link, refreshLinks }) => {
  const archiveLink = async () => {
    link.archived = !link.archived; // Archive the object
    try {
      // Update DB
      await fetch("/.netlify/functions/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
      refreshLinks(); // Refresh
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = async () => {
    const id = link._id;

    try {
      await fetch("/.netlify/functions/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }), // Send id to delete
      });
      refreshLinks(); // Refresh
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button onClick={archiveLink} className="btn btn-warning mr2">
          {link.archived ? "Unarchive" : "Archive"}
        </button>
        &nbsp;
        <button onClick={deleteLink} className="btn btn-danger  ml2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
