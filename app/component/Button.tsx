import { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
