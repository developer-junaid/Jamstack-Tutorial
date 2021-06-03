import React, { useEffect, useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import "./app.css";

// Component
function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch("/.netlify/functions/getLinks");
      const links = await res.json(); // Get Data
      setLinks(links);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-white">Save Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
