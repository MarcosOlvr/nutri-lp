import { useEffect, useRef } from "react";

export default function Reveal({ children }) {

    const ref = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }

            },
            {
                threshold: 0.2
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();

    }, []);

    return (
        <div ref={ref} className="entrada">
            {children}
        </div>
    );
}