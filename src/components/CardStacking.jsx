import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CardStacking = () => {
    const container = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.card');

        cards.forEach((card, index) => {
            if (index !== cards.length - 1) {
                gsap.to(card, {
                    scale: 0.95, // Subtle scaling
                    opacity: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 15%",
                        endTrigger: container.current,
                        end: "bottom bottom",
                        scrub: true,
                    },
                });
            }
        });
    }, { scope: container });

    const cardData = [
        {
            title: "Life Insurance",
            desc: "Protect your family's financial future with comprehensive life coverage plans tailored to your needs.",
            color: "#FF0040",
            icon: "🛡️"
        },
        {
            title: "Retirement Planning",
            desc: "Build a corpus that lets you retire with dignity. Strategic SIP and pension fund allocation.",
            color: "#FF8000",
            icon: "☀️"
        },
        {
            title: "Health Insurance",
            desc: "Quality healthcare shouldn't be a burden. Get covered for medical emergencies and hospitalizations.",
            color: "#00C853",
            icon: "➕"
        },
        {
            title: "Investment Plans",
            desc: "Grow your wealth with market-linked or guaranteed return plans designed for long-term goals.",
            color: "#2979FF",
            icon: "📈"
        }
    ];

    return (
        <div ref={container} style={styles.wrapper}>
            <div style={styles.cardsContainer}>
                {cardData.map((card, i) => (
                    <div
                        key={i}
                        className="card"
                        style={{
                            ...styles.card,
                            top: `${100 + (i * 30)}px` // Creates the stack effect
                        }}
                    >
                        {/* Left Icon Box */}
                        <div style={{ ...styles.iconBox, backgroundColor: card.color }}>
                            <span style={{ fontSize: '24px', color: 'white' }}>{card.icon}</span>
                        </div>

                        {/* Content Middle */}
                        <div style={styles.content}>
                            <h2 style={styles.cardTitle}>{card.title}</h2>
                            <p style={styles.cardDesc}>{card.desc}</p>
                        </div>

                        {/* Button Right */}
                        <button style={styles.button}>
                            Enquiry Now <span style={{ marginLeft: '8px' }}>→</span>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

const styles = {
    wrapper: {


        minHeight: '100vh',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
    },
    card: {
        position: 'sticky',
        height: '200px',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#FFFFFF',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid #E9ECEF',
        boxSizing: 'border-box',
    },
    iconBox: {
        width: '80px',
        height: '80px',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
    },
    content: {
        marginLeft: '30px',
        flexGrow: 1,
    },
    cardTitle: {
        margin: '0 0 8px 0',
        fontSize: '24px',
        color: '#1A1C2E',
        fontWeight: '700',
        fontFamily: 'Inter, sans-serif',
    },
    cardDesc: {
        margin: 0,
        fontSize: '16px',
        color: '#6C757D',
        lineHeight: '1.5',
        maxWidth: '500px',
        fontFamily: 'Inter, sans-serif',
    },
    button: {
        backgroundColor: '#111827',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '50px',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        marginLeft: '20px',
        transition: 'transform 0.2s ease',
    }
};

export default CardStacking;