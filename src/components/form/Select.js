import { useField } from "formik";
import { useState } from "react";
import { ErrorMessage } from "formik";
export default function Input({ label, options,original=false, ...props }) {
  const [field, meta, helpers] = useField(props);

  const changeHandle = (e) => {

    let selected = options.find(
      (option) => option.key === parseInt(e.target.value)
    );
    helpers.setValue(original ? selected : e.target.value);
     

  };

 
  return (
    <>
    <label className="block w-full">
      <div className="text-sm text-gray-600">{label}</div>
      
      <select 
        className="w-full h-10 border-b outline-none focus:border-black"
        onChange={changeHandle} 
        {...props}
        
      >
        <option value="">Seçin</option>
        {options.map((option, key) => (
          <option key={key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />

    </label>

     
    </>
  );
}
