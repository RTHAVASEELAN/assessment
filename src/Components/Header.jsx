import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Bell, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header({ sidebarOpen, setDarkMode, setSidebarOpen, darkMode }) {
  const [showNotifications, setShowNotifications] = useState(false);

  // Sample notifications (replace with Redux or API later)
  const notifications = [
    "Employee A completed training.",
    "New leave request from Employee B.",
    "Team C project deadline updated.",
    "Salary processed successfully.",
  ];

  const notifRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`flex justify-between items-center ${
        darkMode ? "bg-gray-800" : "bg-emerald-900"
      } text-white px-4 py-3 shadow-md fixed top-0 left-0 right-0 z-30`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h2 className="text-xl font-bold">EmployeeX Dashboard</h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative" ref={notifRef}>
        {/* Notification Icon with Count */}
        <div
          className="relative cursor-pointer"
          onClick={() => setShowNotifications((prev) => !prev)}
        >
          <Bell className="hover:text-emerald-300 transition" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
              {notifications.length}
            </span>
          )}

          {/* Notification Popup (aligned directly below Bell) */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute right-0 mt-3 w-72 rounded-lg shadow-lg ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                } border border-gray-200 overflow-hidden z-50`}
              >
                <div className="p-3 border-b font-semibold bg-emerald-600 text-white">
                  Recent Notifications
                </div>
                <ul className="max-h-60 overflow-y-auto">
                  {notifications.map((note, idx) => (
                    <li
                      key={idx}
                      className={`p-3 border-b last:border-0 ${
                        darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
                      }`}
                    >
                      {note}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="focus:outline-none"
        >
          {darkMode ? (
            <Sun className="hover:text-yellow-400 transition" />
          ) : (
            <Moon className="hover:text-gray-300 transition" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
