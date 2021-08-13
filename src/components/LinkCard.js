import React, { useState } from "react";

const LinkCard = ({ link, refreshLinks }) => {
  const [archiving, setArchiving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const archiveLink = async () => {
    link.archived = !link.archived; // Archive the object

    setArchiving(true);
    try {
      // Update DB
      await fetch("/.netlify/functions/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
      refreshLinks(); // Refresh
      setArchiving(false);
    } catch (error) {
      console.log(error);
      setArchiving(false);
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    setDeleting(true);

    try {
      await fetch("/.netlify/functions/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }), // Send id to delete
      });
      refreshLinks(); // Refresh
      setDeleting(false);
    } catch (error) {
      console.log(error);
      setDeleting(false);
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        {archiving ? (
          <button
            onClick={archiveLink}
            className="btn btn-warning mr2"
            disabled
          >
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ml-4">
              {link.archived ? "Archiving..." : "Unarchiving..."}
            </span>
          </button>
        ) : (
          <button onClick={archiveLink} className="btn btn-warning mr2">
            {" "}
            {link.archived ? "Unarchive" : "Archive"}
          </button>
        )}
        &nbsp;
        {deleting ? (
          <button onClick={deleteLink} disabled className="btn btn-danger ml2">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ml-4"> Deleting...</span>
          </button>
        ) : (
          <button onClick={deleteLink} className="btn btn-danger ml2">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default LinkCard;
