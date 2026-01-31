import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button 
            {...rest}
            className={clsx(
                "px-4 py-2 text-white rounded focus:outline-none focus:ring-2 w-full",
                className
            )}
        >
            {children}
        </button> 
    );
}
