// import React, { useState } from "react";

// export default function App() {
//   let [isLoggedIn, setIsLoggedIn] = useState(true);

//   return (
//     <div>
//       <h1>Test of Conditional Rendering</h1>

//       {/* ?: */}
//       {isLoggedIn ? (
//         <h2>Omer is the king! welcome back</h2>
//       ) : (
//         <h2>Please login</h2>
//       )}

//       <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </div>
//   );
// }



import React, { useState } from "react";

export default function App() {
  let [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>Test of Conditional Rendering</h1>

      {/* ?: */}

<img style={{width:'300px'}} src={isOn ? "./light-on.png" : "./light-off.png"} alt="" />

      <button onClick={()=> setIsOn(!isOn)}>
        {isOn ? "Turn off" : "Turn on"}
      </button>
    </div>
  );
}
