import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Timeline = ({ description }) => {
    const scope = useRef();

    useGSAP(() => {
        // Target all cards within the scope
        const cards = gsap.utils.toArray('.timeline-card');

        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%", // Animation starts when card top hits 85% of viewport
                    end: "top 50%",
                    scrub: 1,         // Smoothly catches up to scroll
                },
                x: 100,               // Slide in from the RIGHT
                opacity: 0,
                ease: "power2.out"
            });
        });
    }, { scope });

    const timelineData = [
        "You have meaningful goals — maybe you have recently retired and are concerned about outliving your nest egg.",
        "Strategic planning helps ensure your wealth lasts as long as you do.",
        "Tailored investment portfolios designed to minimize risk."
    ];

    return (
        <div ref={scope} style={pageWrapper}>
            {/* The Timeline Spine (Vertical Line) */}
            <div style={timelineContainer}>
                <div style={verticalLine}></div>

                {description?.map((text, i) => (
                    <div key={i} className="timeline-card" style={cardStyle}>
                        {/* The "Anchor" dot on the line */}
                        <div style={dotStyle}></div>

                        <div style={iconCircleStyle}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2.5">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <p style={textStyle}>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Styles ---

const pageWrapper = {


    minHeight: '50vh'
};

const timelineContainer = {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '40px', // Space for the line
};

const verticalLine = {
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: '#e2e8f0', // The "horizontal" line look you requested
};

const cardStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '20px 25px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid #f0f0f0',
    marginBottom: '40px',
    gap: '20px',
};

const dotStyle = {
    position: 'absolute',
    left: '-47px', // Positions it exactly on the vertical line
    top: '50%',
    transform: 'translateY(-50%)',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#d32f2f',
    border: '4px solid #fff',
    boxShadow: '0 0 0 2px #e2e8f0'
};

const iconCircleStyle = {
    minWidth: '42px',
    height: '42px',
    borderRadius: '50%',
    backgroundColor: '#fff5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
};

const textStyle = {
    color: '#4a5568',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: 0,
    fontFamily: 'sans-serif'
};

export default Timeline;