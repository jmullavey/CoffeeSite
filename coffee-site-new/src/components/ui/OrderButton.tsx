import React from "react";
import clsx from "clsx";

interface OrderButtonProps {
  variant?: "primary" | "secondary";
  disabledReason?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  to?: string;
}

const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300";
const variants = {
  primary:
    "bg-primary text-white hover:bg-primary/90 active:bg-primary/95",
  secondary:
    "bg-white text-primary border border-primary hover:bg-primary/10",
};

export const OrderButton: React.FC<OrderButtonProps> = ({
  variant = "primary",
  disabledReason,
  children,
  onClick,
  to,
}) => {
  const isDisabled = Boolean(disabledReason);
  const button = (
    <button
      type="button"
      className={clsx(
        baseStyles,
        variants[variant],
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={isDisabled ? undefined : onClick}
      aria-disabled={isDisabled}
      aria-label={disabledReason ? disabledReason : undefined}
      tabIndex={isDisabled ? -1 : 0}
      title={disabledReason || undefined}
    >
      {children}
    </button>
  );
  if (to && !isDisabled) {
    return (
      <a href={to} className="no-underline" tabIndex={0} aria-label={children as string}>
        {button}
      </a>
    );
  }
  return button;
};
export default OrderButton;
