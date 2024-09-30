import React from "react";

// Option 1
function Button1(props) {
    return (
        <div>
            <button className="text-green-500 border bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 rounded-lg px-6 py-2">
                {props.name}
            </button>
        </div>
    );
}

// Option 2
// const Button1 = ({ text }) => {
//   return (
//     <button className="text-green-500 border bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950 rounded-lg px-6 py-2">
//       {text}
//     </button>
//   );
// };

export default Button1;
