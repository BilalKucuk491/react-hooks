import { useField } from "formik";
import { FiCheck } from "react-icons/fi";
import classNames from "classnames";
import { ErrorMessage } from "formik";
export default function Radio({ label, options, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (

  <div className="grid gap-y-2">
    {options.map((option, key) => (
    <div key={key} className="flex gap-x-2 text-sm cursor-pointer items-center">
      <button type="button" onClick={()=> helpers.setValue(option.key)}
        className={classNames({
          "w-5 h-5 rounded-full  border transition-all flex items-center justify-center": true,
          "border-gray-400": !field.value !== option.key,
          "border-green-600":field.value === option.key
        })}
      >
        <div 
          className={classNames({
            "w-3 h-3 rounded-full": true,
            "bg-green-600": field.value === option.key,
          })}
        />
      </button>

      {option.value}
    </div>
  ))}
      <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />

  </div>)
}
