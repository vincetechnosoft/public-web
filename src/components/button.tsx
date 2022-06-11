import React from "react";
import { Loader } from "react-feather";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
  loading?: boolean;
  isDisabled?: boolean;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
}

const Button: React.FC<Props> = ({
  variant = "filled",
  loading = false,
  isDisabled = false,
  leadingIcon,
  className,
  trailingIcon,
  children,
  ...props
}) => {
  const variantStyles = () => {
    switch (variant) {
      case "outline": {
        return `flex items-center rounded-lg border border-stone-300 py-2 px-4 text-black duration-150 hover:bg-stone-200 disabled:bg-stone-200/50 disabled:text-stone-400 ${className}`;
      }
      default: {
        return `flex items-center rounded-lg bg-indigo-500 py-2 px-4 text-white duration-150 hover:bg-indigo-600 disabled:bg-indigo-400 ${className}`;
      }
    }
  };
  return (
    <button disabled={isDisabled || loading} className={variantStyles()} {...props}>
      {loading && <Loader className="mr-2 h-5 w-auto animate-spin" />}
      {!loading && leadingIcon}
      {children}
      {!loading && trailingIcon}
    </button>
  );
};

export default Button;
