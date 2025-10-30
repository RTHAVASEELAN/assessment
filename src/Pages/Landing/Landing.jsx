import React, { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { LandingFooter, LandingHeader, LandingHeroPanner, LandingTaskBar } from "./index";
import Loader from "../../Components/Loader";

const EmployeeLandingPage = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800">
            <Suspense fallback={<Loader />}>
                <LandingHeader />
            </Suspense>

            <Suspense fallback={<Loader />}>
                <LandingHeroPanner current={current} setCurrent={setCurrent} />
            </Suspense>

            <Suspense fallback={<Loader />}>
                <LandingTaskBar />
            </Suspense>

            <section className="flex flex-wrap justify-center items-center space-x-6 md:space-x-10 py-8 border-t border-gray-200 bg-white">
                {["slack", "notion", "google", "microsoft", "zoom"].map((logo) => (
                    <img
                        key={logo}
                        src={`https://cdn.simpleicons.org/${logo}/444`}
                        alt={logo}
                        className="h-6 md:h-8 opacity-70 hover:opacity-100 transition"
                    />
                ))}
            </section>

            <Suspense fallback={<Loader />}>
                <LandingFooter />
            </Suspense>
        </div>
    );
};

export default EmployeeLandingPage;
