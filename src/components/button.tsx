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
    "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black border-teal-500 items-center rounded-lg bg-indigo-500 py-2 px-4 text-white duration-150 hover:bg-indigo-600 disabled:bg-indigo-400",
  outline:
    "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black items-center rounded-lg border border-stone-300 py-2 px-4 text-black duration-150 hover:bg-stone-200 disabled:bg-stone-200/50 disabled:text-stone-400",
  secondery:
    "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black   items-center rounded-lg bg-teal-500 py-2 px-4 text-white duration-150 hover:bg-teal-600 disabled:bg-teal-400",
};

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
