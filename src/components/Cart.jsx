// cart, edit cart, remove from cart, checkout

import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Cart = ({ cartId }) => {
    const [userId, setUserId] = useState([]);
    const [productId, setProductId] = useState([]);
    const [quantity, setQuantity] = useState([]);

    useEffect(() => {
        const getCart = async () => {
            const response = await fetch(
                // 'api route here'
            );
            const data = await response.json();
            setProductId(data);
        };
        getCart();
    });

const handleSubmit = async (event) => {
    event.preventDefault();
    const TOKEN = window.localStorage.getItem("token");

    const response = await fetch(
    //   `API route here`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      }
    );
    const data = await response.json();
    console.log(productId);
    history.push("/products");
  };

//   return (
//     <>
//       <div className="addActivity">
//         <h1>Let's attach activities to your routine</h1>

//         <form onSubmit={handleSubmit}>
//           <h3>Select an activity:</h3>
//           <select
//             value={activities}
//             onChange={(e) => setActivityId(e.target.value)}
//           >
//             {activities.map((activity) => (
//               <option value={activity.id}>{activity.name}</option>
//             ))}
//           </select>
//           <br />
//           <br />
//           <label>
//             Number of Reps:
//             <br />
//             <input
//               type="text"
//               required
//               name="count"
//               value={count}
//               placeholder="set desired count"
//               onChange={(e) => setCount(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Duration:
//             <br />
//             <input
//               type="text"
//               required
//               name="duration"
//               value={duration}
//               placeholder="set desired duration"
//               onChange={(e) => setDuration(e.target.value)}
//             />
//           </label>
//           <br />
//           {/* <button type="submit">Add Activity</button> */}
//           <input type="submit" value="Add Activity" />
//         </form>
//       </div>
//     </>
//   );

};
export default Cart