import React from 'react'

function LandingHeader() {
    return (
        <header className="flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-sm">
            <div className="text-2xl font-bold text-emerald-900">EmployeeX</div>

            <nav className="hidden md:flex space-x-8 text-gray-700">
                <a href="#features" className="hover:text-emerald-700">
                    Features
                </a>
                <a href="#pricing" className="hover:text-emerald-700">
                    Pricing
                </a>
                <a href="#about" className="hover:text-emerald-700">
                    About Us
                </a>
                <a href="#contact" className="hover:text-emerald-700">
                    Contact
                </a>
            </nav>

            <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-emerald-700">Login</button>
                <button className="bg-emerald-900 text-white px-4 py-2 rounded-full hover:bg-emerald-800 transition">
                    Sign Up
                </button>
            </div>
        </header>
    )
}

export function LandingFooter() {
    return <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} EmployeeX. All rights reserved.</p>
    </footer>
}

export default LandingHeader
