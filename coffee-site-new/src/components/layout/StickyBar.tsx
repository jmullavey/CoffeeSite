import React from "react";
import OrderButton from "../ui/OrderButton";
import { Link } from "react-router-dom";

const StickyBar: React.FC<{ isOpen: boolean; nextOpenLabel: string }> = ({ isOpen, nextOpenLabel }) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center px-4 py-3 shadow-lg md:hidden">
    <Link to="/contact" className="flex-1 mr-2">
      <button className="w-full bg-primary text-white py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300">Find Us</button>
    </Link>
    <OrderButton
      variant="primary"
      to={isOpen ? undefined : "/menu"}
      disabledReason={isOpen ? undefined : nextOpenLabel}
    >
      {isOpen ? "Order Pickup" : "See Menu (Closed)"}
    </OrderButton>
  </div>
);

export default StickyBar;
