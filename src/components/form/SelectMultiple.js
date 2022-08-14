import { useField } from "formik";
import { useState } from "react";

export default function SelectMultiple({ label, options,original=false, ...props }) {

  const [field, meta, helpers] = useField(props);

  const [data,updateData] = useState([])

  const changeHandle = (e) => {

      const option = options[parseInt(e.target.value)];
      console.log(e);
      updateData(arr=> [...arr, option ])
      helpers.setValue(data)
  };

 
  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600">{label}</div>
      <select 
        className="w-full h-40 border-b outline-none focus:border-black"
        onClick={changeHandle} 
        {...props}
      >
        {options.map((option, key) => (
          <option key={key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </label>
  );
}
