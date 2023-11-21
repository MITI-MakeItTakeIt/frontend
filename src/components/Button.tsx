interface ButtonProps {
  size?: "small" | "medium" | "large";
  children: string;
  onClick?: () => number;
}

export const Button = ({ size, children, onClick }: ButtonProps) => {
  const buttonSizes = () => {
    switch (size) {
      case "small":
        return {
          fontSize: "14px",
          fontWeight: 500,
        };
      case "medium":
        return {
          width: "225px",
          height: "40px",
          fontSize: "16px",
          fontWeight: 700,
        };
      case "large":
        return {
          width: "442px",
          height: "56px",
          fontSize: "20px",
          fontWeight: 700,
        };
      default:
        return {};
    }
  };
  const buttonStyles = buttonSizes();

  return (
    <button
      type="button"
      className=" p-[0.5rem] rounded-lg bg-[#4065F6] text-center text-white"
      style={buttonStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
