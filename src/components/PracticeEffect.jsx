// import { useEffect, useState } from "react";


// export default function PracticeEffect() {

//     const [count, setCount] = useState(0)
//     const [multiply, setMultiply] = useState(2)
//     useEffect(() => {
//         setTimeout(setCount((count) => count + 1), 20)

//     },[multiply])
//     return (
//             <>
//                 <h1 style={{ textAlign: "center" }}>{count}</h1>
//                 <button onClick={() => { setMultiply((multiply) => multiply * 2) }}> Multiply</button>
//                 <h1>Multiplication Result : {multiply}</h1>



//             </>
//         )
//     }