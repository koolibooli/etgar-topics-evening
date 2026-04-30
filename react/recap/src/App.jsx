import React, { useState } from "react";

export default function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <h1>Test of Conditional Rendering</h1>

      {/* ?: */}
      {isLoggedIn ? (
        <h2>Omer is the king! welcome back</h2>
      ) : (
        <h2>Please login</h2>
      )}

      <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
