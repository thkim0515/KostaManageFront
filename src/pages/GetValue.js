import React, { useState } from "react";

const GetValue = () => {
  const [alone, setAlone] = useState();
  const [value, setValue] = useState({
    Valueb: "",
    Valuec: "",
    Valued: "",
    Valuee: "",
  });

  const handleGetChange = (e) => {
    const { name, value } = e.target;
    setValue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  console.log(value);
  console.log(alone);

  return (
    <div>
      <input
        name="Valuea"
        value={value.Valuea}
        onChange={(e) => setAlone(e.target.value)}
      />
      <hr />
      <input name="Valueb" value={value.Valueb} onChange={handleGetChange} />
      <input name="Valuec" value={value.Valuec} onChange={handleGetChange} />
      <input name="Valued" value={value.Valued} onChange={handleGetChange} />
      <input name="Valuee" value={value.Valuee} onChange={handleGetChange} />
    </div>
  );
};

export default GetValue;
