import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    className?: string;
};

export function Button({ variant, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={buttonVariants({ variant })}
            id="button"
        />
    );
}

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-1 px-4 py-2 text-sm rounded-full drop-shadow-lg transition duration-150 font-medium group",
    {
        variants: {
            variant: {
                primary: "bg-red-500 text-white hover:ring hover:ring-red-300",
                secondary:
                    "transparent border-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-500",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
