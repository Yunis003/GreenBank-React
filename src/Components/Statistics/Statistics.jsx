import React, { useState, useEffect, useRef } from 'react';
import '../Partials/_main.scss';
const Statistics = () => {
    const [counts, setCounts] = useState({
        years: 0,
        partners: 0,
        experience: 0,
        clients: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef(null);

    const targets = {
        years: 16,
        partners: 250,
        experience: 18,
        clients: 10200
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    startAnimation();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    const startAnimation = () => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const timer = setInterval(() => {
            setCounts(prevCounts => ({
                years: Math.min(prevCounts.years + Math.ceil(targets.years / steps), targets.years),
                partners: Math.min(prevCounts.partners + Math.ceil(targets.partners / steps), targets.partners),
                experience: Math.min(prevCounts.experience + Math.ceil(targets.experience / steps), targets.experience),
                clients: Math.min(prevCounts.clients + Math.ceil(targets.clients / steps), targets.clients)
            }));
        }, interval);

        setTimeout(() => clearInterval(timer), duration);
    };

    return (
        <div className='statisticsContainer' ref={containerRef}>
            <div className="experience">
                <span>{counts.years}y</span>
                <span>Experience</span>
            </div>
            <div className="partner">
                <span>{counts.partners}+</span>
                <span>Merchant Partner</span>
            </div>
            <div className="experience2">
                <span>{counts.experience}+</span>
                <span>Years Experience</span>
            </div>
            <div className="clients">
                <span>{(counts.clients / 1000).toFixed(1)}k+</span>
                <span>Worldwide Clients</span>
            </div>
        </div>
    );
}

export default Statistics;
