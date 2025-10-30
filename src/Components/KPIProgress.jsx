import { motion } from "framer-motion";

function KPIProgress({selectedEmp}) {
  return (
      <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md mb-8 cursor-pointer"
          >
            <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
            <div className="space-y-4">
              {[
                { label: "Attendance", value: selectedEmp.attendance },
                { label: "Performance", value: `${selectedEmp.performance}%` },
              ].map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{metric.label}</span>
                    <span>{metric.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full"
                      style={{
                        width: metric.value.replace("%", ""),
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
  )
}

export default KPIProgress
