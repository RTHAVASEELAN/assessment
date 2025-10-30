import React, { useMemo, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User, ArrowLeft } from "lucide-react";
import { employees, departmentData } from "./data";

import {
  Navbar,
  KPICards,
  KPICharts,
  KPIProgress,
  KPITables,
  Header,
} from "./index";

import {
  toggleSidebar,
  toggleDarkMode,
  setSelectedEmployee,
  setSearch,
} from "./dashboard.slice";
import Loader from "../../Components/Loader";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { sidebarOpen, selectedEmployee, darkMode, search } = useSelector(
    (state) => state.dashboard
  );

  const selectedEmp = useMemo(
    () => employees.find((emp) => emp.id === selectedEmployee),
    [selectedEmployee]
  );

  const filteredEmployees = useMemo(() => {
    const query = search.toLowerCase();
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <Suspense fallback={<Loader />}>
      <div
        className={`flex h-screen overflow-hidden transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
          }`}
      >
        <Navbar darkMode={darkMode} sidebarOpen={sidebarOpen} />

        <div className="flex-1 flex flex-col md:ml-64 relative">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={(v) => dispatch(toggleSidebar(v))}
            darkMode={darkMode}
            setDarkMode={(v) => dispatch(toggleDarkMode(v))}
          />

          <main className="flex-1 p-4 md:p-8 mt-16 overflow-y-auto">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <ArrowLeft
                  size={24}
                  className="cursor-pointer hover:text-emerald-600 transition"
                  onClick={() => window.history.back()}
                />
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Dashboard Overview
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <User className="text-emerald-600" />
                <select
                  value={selectedEmployee}
                  onChange={(e) =>
                    dispatch(setSelectedEmployee(Number(e.target.value)))
                  }
                  className="p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {employees.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <KPICards selectedEmp={selectedEmp} />
            <KPIProgress selectedEmp={selectedEmp} />
            <KPICharts
              selectedEmp={selectedEmp}
              departmentData={departmentData}
            />
            <KPITables
              filteredEmployees={filteredEmployees}
              search={search}
              onSearchChange={(value) => {
                dispatch(setSearch(value))
              }}
            />
          </main>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
            onClick={() => dispatch(toggleSidebar(false))}
          />
        )}
      </div>
    </Suspense>
  );
};

export default Dashboard;
