import React from 'react'

function Navbar({ darkMode, sidebarOpen }) {
    return (
        <div>
            <aside
                className={`fixed top-0 left-0 z-40 h-full w-64 ${darkMode ? "bg-gray-800" : "bg-emerald-900 text-white"
                    } flex flex-col py-6 px-4 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <h2 className="text-2xl font-bold mb-8 text-center hidden md:block">
                    EmployeeX
                </h2>

                <nav className="space-y-4">
                    {
                        // ["Overview", "Attendance", "Salary", "Employees", "Settings"].map(
                        ["Overview"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className={`block px-4 py-2 rounded-lg hover:bg-emerald-700 transition ${item === "Overview" ? "bg-emerald-800" : ""
                                        }`}
                                >
                                    {item}
                                </a>
                            )
                        )}
                </nav>

                <div className="mt-auto text-center text-sm text-gray-300 pt-8">
                    © {new Date().getFullYear()} EmployeeX
                </div>
            </aside>
        </div>
    )
}

export default Navbar
