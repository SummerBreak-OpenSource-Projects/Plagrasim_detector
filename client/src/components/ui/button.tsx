import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}

const Button = ({
  children,
  variant = "solid",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        "w-full max-w-52 p-2 rounded-xl",
        variant === "solid" &&
          "bg-gradient-to-r from-[#BE35A9] hover:from-[#b94da9] to-[#712E9A] hover:to-[#7b4e97]",
        variant === "outline" &&
          "border-2 border-[#712E9A] text-[#999999] hover:hover:bg-[#712E9A] hover:text-white"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
