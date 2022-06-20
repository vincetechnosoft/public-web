import React from "react";
import { Loader } from "react-feather";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof className;
  loading?: boolean;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
}

const className = {
  filled:
    "button border-accent1 rounded-lg bg-accent1 py-2 px-4 -text-accent1 duration-150 hover:bg-accent1-hover disabled:bg-accent1-disabled/80",
  outline:
    "button outline-button hover:bg-base1-darker hover:-text-base1 disabled:opacity-50 disabled:-text-base1-disabled",
  text: "button hover:bg-base1-darker disabled:disabled:opacity-50 disabled:-text-base1-disabled",
  secondery:
    "button bg-accent2 -text-accent2 hover:bg-accent2-hover disabled:bg-accent2-disabled",
};

export const buttonClass = className;

const Button: React.FC<Props> = ({
  variant = "filled",
  loading = false,
  disabled,
  leadingIcon,
  trailingIcon,
  children,
  className: propClassName,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${className[variant]} flex items-center  ${propClassName}`}
    >
      {loading && <Loader className="mr-2 h-5 w-auto animate-spin" />}
      {!loading && leadingIcon}
      {children}
      {!loading && trailingIcon}
    </button>
  );
};

export default Button;
