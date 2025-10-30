import { motion } from "framer-motion";
import { notifications } from "../Pages/Dashboard/data";

function KPITables({filteredEmployees, search, onSearchChange}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Notifications */}
            <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md cursor-pointer"
            >
                <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
                <ul className="space-y-2 text-sm">
                    {notifications.map((note, i) => (
                        <li key={i} className="border-b pb-2 last:border-none">
                            {note}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Employee Table */}
            <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md overflow-x-auto cursor-pointer"
            >
                <h2 className="text-lg font-semibold mb-4">Employee Details</h2>
                <input
                    type="text"
                    placeholder="Search employee..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="p-2 mb-4 border rounded-lg w-full focus:ring-2 focus:ring-emerald-500 text-gray-800"
                />
                <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="p-3 border-b">Name</th>
                            <th className="p-3 border-b">Department</th>
                            <th className="p-3 border-b">Attendance</th>
                            <th className="p-3 border-b">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((emp) => (
                            <tr key={emp.id} className="hover:bg-gray-50">
                                <td className="p-3 border-b">{emp.name}</td>
                                <td className="p-3 border-b">{emp.department}</td>
                                <td className="p-3 border-b">{emp.attendance}</td>
                                <td className="p-3 border-b">{emp.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    )
}

export default KPITables
