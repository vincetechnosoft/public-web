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
    "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:-ring-base1-page border-accent1 items-center rounded-lg bg-accent1 py-2 px-4 -text-accent1 duration-150 hover:bg-accent1-hover disabled:bg-accent1-disabled/80",
  outline:
    "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:-ring-base1-page items-center rounded-lg border border-base1-border py-2 px-4 -text-base1-page duration-150 hover:bg-base1-darker disabled:bg-base1-darker/50 disabled:-text-base1-disabled",
  text: "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:-ring-base1-page items-center rounded-lg  py-2 px-4 -text-base1-page duration-150 hover:bg-base1-darker disabled:bg-base1-darker/50 disabled:-text-base1-disabled",
  secondery:
    "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:-ring-base1-page items-center rounded-lg bg-accent2 py-2 px-4 -text-accent2 duration-150 hover:bg-accent2-hover disabled:bg-accent2-disabled",
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
      className={`${className[variant]} ${propClassName}`}
    >
      {loading && <Loader className="mr-2 h-5 w-auto animate-spin" />}
      {!loading && leadingIcon}
      {children}
      {!loading && trailingIcon}
    </button>
  );
};

export default Button;
