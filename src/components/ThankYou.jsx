import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div>
      <h1>Get ready to Jam!</h1>
      <h3>Order #:</h3>
      <p>Thank you for ordering from KamJam!</p>
      <p>
        You'll receive an email shortly with a summary of your order and
        shipping information when it becomes available
      </p>
      <Link to="/">Keep Jamming</Link>
    </div>
  );
}
