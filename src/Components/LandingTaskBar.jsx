import React from "react";
import { features } from "../Pages/Landing/data";

function LandingTaskBar() {
    return (
        <section id="features" className="py-16 bg-gray-50 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Manage Your Workforce Seamlessly
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    EmployeeX empowers your organization with smart automation tools for HR,
                    payroll, and performance — so you can focus on people, not paperwork.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-transform"
                    >
                        <div className="text-emerald-700 text-4xl mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-lg transition">
                    Explore All Features
                </button>
            </div>
        </section>
    );
}

export default LandingTaskBar;
