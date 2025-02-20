import React from "react";
import { FormProvider } from "react-hook-form";

interface IFieldTextProps {
  name?: string;
  type?: string;
  label?: string;
  required?: boolean;
  formGroup?: boolean;
  readOnly?: boolean;
  textColor?: string;
  iconFormGroup?: string;
  tabIndex?: string;
  multiple?: any;
  ref?: any;
  id?: string;
  uppercase?: string;
  placeholder?: string;
  customeCss?: string;
  input?: any;
  onChange?: any;
  onBlur?: any;
  value?: any;
  errors?: any;
  btnAction?: any;
  options?: any;
  menuIsOpen?: boolean;
  autoFocus?: any;
  closeMenuOnSelect?: any;
  isMulti?: any;
  isClearable?: any;
  isSearchable?: any;
  hideSelectedOptions?: any;
  defaultValue?: any;
  disabled?: boolean;
  register?: any;
}
interface IFieldProps {
  name: string;
  type?: string;
  label?: string;
  required?: boolean;
  formGroup?: boolean;
  readOnly?: boolean;
  textColor?: string;
  iconFormGroup?: string;
  tabIndex?: string;
  ref?: any;
  id?: string;
  uppercase?: string;
  placeholder?: string;
  customeCss?: string;
  input?: any;
  onChange?: any;
  onBlur?: any;
  value?: any;
  errors?: any;
  btnAction?: any;
  options?: any;
  menuIsOpen?: boolean;
  autoFocus?: any;
  closeMenuOnSelect?: any;
  isMulti?: any;
  isClearable?: any;
  isSearchable?: any;
  hideSelectedOptions?: any;
  defaultValue?: any;
  disabled?: boolean;
  control?: any;
}

// eslint-disable-next-line react/display-name
const InputField = React.forwardRef((props: IFieldTextProps, ref: any) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="input-group mb-3">
        <input
          {...props.register}
          type={props.type}
          readOnly={props.readOnly}
          placeholder={props.placeholder}
          style={{ textTransform: props.uppercase ? "uppercase" : "none" }}
          className={`form-control ${props.errors && "is-invalid "} ${
            props.customeCss || ""
          } `}
        />
        {props.formGroup && (
          // <div className="input-group-append">
          <span
            style={{ cursor: "pointer" }}
            onClick={props.btnAction}
            className="input-group-text"
          >
            <span className={props.iconFormGroup} />
          </span>
          // </div>
        )}

        {props.errors && (
          <span className="error invalid-feedback">
            {props.errors.message || ""}
          </span>
        )}
      </div>
    </div>
  );
});

function Form({ onSubmit, children, ...props }: any) {
  return (
    <FormProvider {...props}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
}
export { Form, InputField };
