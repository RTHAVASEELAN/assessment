import React, { lazy, Suspense } from "react";

const LandingHeroPanner = lazy(() =>
  import("../../Components/LandingHeroPanner")
);
const LandingHeader = lazy(() => import("../../Components/LandingHeader"));
const LandingFooter = lazy(() => import("../../Components/LandingHeader"));
const LandingTaskBar = lazy(() => import("../../Components/LandingTaskBar"));

export { LandingFooter, LandingHeader, LandingHeroPanner, LandingTaskBar };
