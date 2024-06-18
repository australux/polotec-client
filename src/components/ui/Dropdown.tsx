import { useState } from "react";
import { ChevronD } from "./SVGs";

type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
    text: string;
    options: string[];
};

export function Dropdown({ text, options, ...props }: DropdownProps) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            {...props}
            className="flex flex-col group transition relative"
            onBlur={() => setOpen(false)}
        >
            <p
                className="hover:cursor-pointer hover:text-red-600 transition-colors duration-100 inline-flex items-center gap-1"
                onClick={() => setOpen(!open)}
            >
                {text}
                <ChevronD className="w-4 h-4 text-red-500" strokeWidth={3} />
            </p>

            <ul
                className={
                    open
                        ? "flex flex-col bg-red-500 gap-2 p-2 rounded-md mt-2 transition-all duration-500 opacity-100 max-h-96"
                        : "opacity-0 max-h-0"
                }
            >
                {options.map((option) => (
                    <li
                        className="hover:bg-red-400 rounded py-1 px-2 transition-colors duration-100 text-sm"
                        key={option}
                    >
                        <a
                            href={`/${option.replaceAll(" ", "-")}`}
                            className="inline-flex text-white drop-shadow-lg capitalize"
                        >
                            {option}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
