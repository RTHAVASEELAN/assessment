import {
    Menu,
    X,
    Gift,
    TrendingUp,
    CalendarCheck,
    Clock,
    User,
    Bell,
    Moon,
    Sun,
} from "lucide-react";
import { motion } from "framer-motion";
function KPICards({ selectedEmp }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
                {
                    title: "Performance",
                    icon: <TrendingUp size={28} />,
                    value: `${selectedEmp.performance}%`,
                    color: "bg-emerald-100 text-emerald-700",
                },
                {
                    title: "Birthday",
                    icon: <Gift size={28} />,
                    value: selectedEmp.birthday,
                    color: "bg-pink-100 text-pink-600",
                },
                {
                    title: "Total Leave",
                    icon: <CalendarCheck size={28} />,
                    value: selectedEmp.totalLeave,
                    color: "bg-blue-100 text-blue-600",
                },
                {
                    title: "Pending Leave",
                    icon: <Clock size={28} />,
                    value: selectedEmp.pendingLeave,
                    color: "bg-yellow-100 text-yellow-600",
                },
            ].map((card, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md flex items-center gap-4"
                >
                    <div className={`p-3 rounded-xl ${card.color}`}>{card.icon}</div>
                    <div>
                        <h3 className="font-semibold">{card.title}</h3>
                        <p className="text-2xl font-bold">{card.value}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default KPICards
