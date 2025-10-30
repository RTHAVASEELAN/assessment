import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { slides } from "../Pages/Landing/data";

function LandingHeroPanner({ current, setCurrent }) {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    return (
        <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 md:px-20">
                        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-xl mb-4">
                            {slides[current].title}
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-6">
                            {slides[current].subtitle}
                        </p>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full w-fit" onClick={() => {
                            navigate('/dashboard')
                        }}>
                            {slides[current].button}
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Carousel indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default LandingHeroPanner
