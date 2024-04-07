import React, {
  ChangeEvent,
  FC,
  FocusEventHandler,
  Fragment,
  useEffect,
  useRef,
} from "react";
import { Control, FieldValues, Controller, FieldErrors } from "react-hook-form";
import { PiWarningCircleFill } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./ui/input";
import { Span } from "next/dist/trace";
export enum InputTypeEnum {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  PASSWORD = "password",
}
interface TextBoxProps {
  control: any;
  rules?: any;
  errors: any;
  errorMessageStyles?: string;
  helperTextStyles?: string;
  helperText?: string;
  onChangeHandler?: any;
  onBlurHandler?: any;
  name: string;
  label: string;
  variant?: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  inputType?: InputTypeEnum;
  maxLength?: number;
}
const TextBox: FC<TextBoxProps> = ({
  control,
  name,
  label,
  rules,
  errors,
  variant,
  errorMessageStyles,
  helperTextStyles,
  helperText,
  onChangeHandler,
  onBlurHandler,
  isRequired,
  isDisabled,
  isReadOnly,
  inputType = InputTypeEnum.TEXT,
  maxLength,
}): JSX.Element => {
  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement>,
    callback: (...event: any[]) => void
  ) => {
    if (!!onChangeHandler) onChangeHandler(event, callback);
    else callback(event);
  };
  const handleOnBlur = (event: any, callback: any) => {
    if (!!onBlurHandler) onBlurHandler(event, callback);
    else callback(event);
  };
  const ref = useRef<any>();
  // useEffect(()=>{
  //   if(ref && ref.current){
  //     ref.current.addEventListener("mousewheel",()=>{
  //       if(ref.current) ref.current.blur();
  //     });
  //   }

  // },[ref])
  return (
    <Fragment>
      <div className="flex flex-col gap-y-2">
        {label ? (
          <p>
            {label} {"   "}{" "}
            {isRequired ? <span className="text-red-500">*</span> : <></>}
          </p>
        ) : (
          <></>
        )}
        <Controller
          control={control}
          name={name}
          defaultValue={""}
          rules={rules}
          render={({ field: { onBlur, value, onChange } }) => (
            <Input
              ref={ref as any}
              value={value}
              onChange={(e) => handleOnChange(e, onChange)}
              onBlur={(e) => handleOnBlur(e, onBlur)}
              // error={!!errors && Boolean(errors?.type)}
              disabled={isDisabled}
              readOnly={isReadOnly}
              type={inputType}
              onInput={(event: any) => {
                if (!!maxLength) {
                  event.target.value = String(event.target.value).slice(
                    0,
                    maxLength
                  );
                }
              }}
              color="cyan"
              className={`!bg-white disabled:border disabled:border-gray-400 disabled:cursor-auto ${
                !!errors && Boolean(errors?.type) ? `border border-red-600` : ``
              }  `}
            />
          )}
        />
        {!!helperText ? (
          <p
            className={twMerge(
              " flex items-center gap-1 font-normal",
              helperTextStyles
            )}
          >
            <PiWarningCircleFill size={12} className="text-[11px]" />
            {helperText}
          </p>
        ) : (
          <></>
        )}
        {errors.message || errors.type ? (
          <p
            className={twMerge(
              " flex items-center text-red-500 gap-1 font-normal text-[11px] mt-1",
              errorMessageStyles
            )}
          >
            <PiWarningCircleFill size={20} />
            {errors.message || errors.type === "required"
              ? `${label} is required`
              : errors.type === "maxlength"
              ? errors.message
              : `${label} is invalid`}
          </p>
        ) : (
          <></>
        )}
      </div>
    </Fragment>
  );
};

export default TextBox;
