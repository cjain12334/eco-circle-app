// Button1.js
import React from "react";

<<<<<<< HEAD
function Button1(props){
    return(
        <div>
            <button className="text-green-500 border bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 rounded-lg px-6 py-2">{props.name}</button>
        </div>
    )
}
=======
const Button1 = ({ text }) => {
  return (
    <button className="text-green-500 border bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 rounded-lg px-6 py-2">
      {text}
    </button>
  );
};
>>>>>>> 156bcec (Added login component and updated nav)

export default Button1;
