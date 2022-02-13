import React from "react";

export const renderField = ({
  defaultValue,
  input,
  meta: { touched, error },
  ...others
}) => {
  const { value, ...newVal } = input;
  return (
    <div>
      <div>
        <input
          {...newVal}
          {...others}
          defaultValue={value ? value : defaultValue}
        />
        {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
      </div>
    </div>
  );
};

export const RadioGroup = ({ input, options, meta: { touched, error } }) => (
  <div>
    {options.map(o => (
      <label key={o.value}>
        <input
          type="radio"
          {...input}
          value={o.value}
          checked={o.value === input.value}
        />{" "}
        {o.title}
      </label>
    ))}
    {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
  </div>
);

export const CheckboxGroup = ({ input, options, meta: { touched, error } }) => (
  <div>
    {options.map(o => (
      <label key={o.value}>
        <input
          type="checkbox"
          {...input}
          key={o.value}
          name={o.value}
          value={o.value}
        />{" "}
        {o.title}
      </label>
    ))}
    {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
  </div>
);
