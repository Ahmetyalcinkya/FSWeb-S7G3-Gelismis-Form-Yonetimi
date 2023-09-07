import React from "react";
import "./Form.css";

function Form(props) {
  const { submitHandler, formData, changeHandler, isValid, formErr } = props;
  return (
    <form onSubmit={submitHandler}>
      <div className="label-div">
        <label>
          <span>Name : </span>
          <input
            data-cy="name-input"
            type="text"
            name="name"
            onChange={changeHandler}
            value={formData.name}
          />
          {formErr.name && <span className="text">{formErr.name}</span>}
        </label>
        <label>
          <span>Email : </span>
          <input
            data-cy="email-input"
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
          {formErr.email && <span className="text">{formErr.email}</span>}
        </label>
        <label>
          <span>Password : </span>
          <input
            data-cy="password-input"
            type="password"
            name="password"
            onChange={changeHandler}
            value={formData.password}
          />
          {formErr.password && <span className="text">{formErr.password}</span>}
        </label>
        <label>
          <span>Terms : </span>
          <input
            data-cy="checkbox-input"
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={changeHandler}
          />
          {formErr.terms && <span className="text">{formErr.terms}</span>}
          Kullanım şartlarını kabul ediyorum.
        </label>
      </div>
      <button
        data-cy="button-cyp"
        className="btn"
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}
export default Form;
