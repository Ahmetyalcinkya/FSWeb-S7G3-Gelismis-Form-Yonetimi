import React from "react";

function Form(props) {
  const { submitHandler, formData, changeHandler, isValid, formErr } = props;
  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>AAAAA</span>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={formData.name}
        />
        {formErr.name && <span className="text">{formErr.name}</span>}
      </label>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
export default Form;
