import React from 'react'
import { COLORS } from '../Pages/Dashboard/data'
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
function KPICharts({selectedEmp, departmentData}) {
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Bar Chart */}
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md cursor-pointer"
            >
              <h2 className="text-lg font-semibold mb-4">
                Attendance & Salary — {selectedEmp.name}
              </h2>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={selectedEmp.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="attendance" fill="#047857" name="Attendance (%)" />
                    <Bar dataKey="salary" fill="#10B981" name="Salary (₹)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md cursor-pointer"
            >
              <h2 className="text-lg font-semibold mb-4">Department Breakdown</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={departmentData} dataKey="value" outerRadius={80} label>
                    {departmentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
  )
}

export default KPICharts
