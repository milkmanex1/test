import React, { useState } from "react";

const Telephone = () => {
  const [input, setInput] = useState("");

  function formatter(input) {
    //if nothing entered
    if (!input) return input;
    //remove all non-digit values
    //remove all non-digit value
    const phoneNumber = input.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    //if length is less than 4, return it unformatted
    if (phoneNumberLength < 4) {
      return phoneNumber;
    }
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength >= 7)
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 9)}`;
  }

  return (
    <div className="h-full w-full grid place-items-center">
      <div className="text-xl font-semibold">Input Your Telephone Number</div>
      <input
        className="w-36 p-4 border-2 rounded-lg border-black"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
};

export default Telephone;
