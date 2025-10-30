import { lazy } from "react";

const Navbar = lazy(() => import("../../Components/Navbar"));
const KPICards = lazy(() => import("../../Components/KPICards"));
const KPIProgress = lazy(() => import("../../Components/KPIProgress"));
const KPICharts = lazy(() => import("../../Components/KPICharts"));
const KPITables = lazy(() => import("../../Components/KPITables"));
const Header = lazy(() => import("../../Components/Header"));

export { Navbar, KPICards, KPICharts, KPIProgress, KPITables, Header };
