import { useEffect, useRef, useState } from "react";

const delay = 5000;

export const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    const slides = [
        {
            link: "",
            src: "https://utfs.io/f/1c76ad9e-25eb-4c7e-9336-06f02f14f35f-x0d1wr.jpg",
            alt: "licitación",
        },
        {
            link: "",
            src: "https://utfs.io/f/6aa8bc80-fa38-445a-b1f7-744f339a8fda-i9xmf5.png",
            alt: "1000 mujeres en ia",
        },
        {
            link: "",
            src: "https://utfs.io/f/58f820b1-03f5-4b3f-b2eb-dc155006b850-rns1eu.png",
            alt: "becas digital house",
        },
        {
            link: "",
            src: "https://utfs.io/f/0d450253-2c01-45ad-9276-ae74714d9682-1kakiv.png",
            alt: "cessi",
        },
    ];

    return (
        <div className="my-0 mx-auto w-full rounded-2xl overflow-clip flex flex-col items-center">
            <div
                className="whitespace-nowrap transition ease duration-500"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slides.map((slide) => (
                    <a
                        href={slide.link}
                        key={slide.alt}
                        className="inline-block w-full rounded-2xl overflow-clip"
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full"
                        />
                    </a>
                ))}
            </div>
            <div className="flex gap-2 py-2">
                {slides.map((current, i) => (
                    <div
                        key={current.alt}
                        onClick={() => setIndex(i)}
                        className={`w-5 h-2 rounded-full hover:cursor-pointer transition-all duration-500 ${
                            index === i ? "bg-zinc-100" : "bg-red-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
