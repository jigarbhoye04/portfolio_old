// // src/components/ui/Button.tsx
// import React from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
//   const baseStyles = "px-4 py-2 font-semibold rounded-lg transition-colors focus:outline-none";
//   const variantStyles = {
//     primary: "bg-blue-500 text-white hover:bg-blue-600",
//     secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400"
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variantStyles[variant]} ${className}`}
//       {...props}
//     />
//   );
// }

import React from "react";
import clsx from "clsx";

const QButton = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <button
         className={clsx(
            "px-8 py-4 rounded-full text-black relative overflow-hidden",
            "bg-neutral-700 hover:bg-blue-500 transition-colors duration-300",
            "before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-blue-500 before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300",
            className
         )}
      >
         <span className="relative z-10">{children}</span>
      </button>
   );
};

export default QButton;
