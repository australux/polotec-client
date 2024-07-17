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
            link: "https://www.argentina.gob.ar/ciencia/sact/construirciencia",
            src: "https://utfs.io/f/1c76ad9e-25eb-4c7e-9336-06f02f14f35f-x0d1wr.jpg",
            alt: "licitación",
        },
        {
            link: "https://milmujeresia.com/",
            src: "https://utfs.io/f/6aa8bc80-fa38-445a-b1f7-744f339a8fda-i9xmf5.png",
            alt: "1000 mujeres en ia",
        },
        {
            link: "https://www.digitalhouse.com/ar/landing/55-becas-fs-larioja",
            src: "https://utfs.io/f/58f820b1-03f5-4b3f-b2eb-dc155006b850-rns1eu.png",
            alt: "becas digital house",
        },
        {
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfGEnvKHnEpFGjUcE1L4eE9-d0envSVE_7_jKFlJP9ZmEJO_w/closedform",
            src: "https://utfs.io/f/0d450253-2c01-45ad-9276-ae74714d9682-1kakiv.png",
            alt: "cessi",
        },
        {
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdPVLfWY6VxCb6UJiOLKp26OuMldhkhKK7tuD92nwZdK0HiNA/viewform",
            src: "https://utfs.io/f/34aaca71-e458-48c6-bff9-f2170b2892da-b4n4p2.jpeg",
            alt: "mern stack 2024",
        },
    ];

    return (
        <div className="my-0 mx-auto w-full rounded-2xl overflow-hidden flex flex-col items-center">
            <div
                className="whitespace-nowrap transition ease duration-500"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slides.map((slide) => (
                    <a
                        href={slide.link}
                        key={slide.alt}
                        className="inline-block rounded-2xl overflow-hidden"
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="object-cover  w-full aspect-[2.8_/_1]"
                        />
                    </a>
                ))}
            </div>
            <div className="flex gap-2 py-2">
                {slides.map((current, i) => (
                    <div
                        key={current.alt}
                        onClick={() => setIndex(i)}
                        className={`w-6 h-3 rounded-full hover:cursor-pointer transition-all duration-500 ${
                            index === i ? "bg-zinc-100" : "bg-red-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
