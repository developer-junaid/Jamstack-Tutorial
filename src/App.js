import React, { useEffect, useState } from "react";

function App() {
  const loadLinks = async () => {
    const res = await fetch("/api/getLinks");
    const links = await res.json(); // Get Data
    console.log("links", links);
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Save Links</h1>
    </div>
  );
}

export default App;
