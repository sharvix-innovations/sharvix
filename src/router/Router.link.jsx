import { lazy } from "react";
import allRoutes from "./all_routes";

// Lazy-load all page components for code splitting
const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/ConatctUs"));
const Projects = lazy(() => import("../pages/Projects"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetails"));
const Services = lazy(() => import("../pages/Services"));
const ServicesDetails = lazy(() => import("../pages/ServicesDetails"));
const About = lazy(() => import("../pages/About"));
const PrivacyPolicy = lazy(() => import("../pages/PolicyPage"));
const TermsOfService = lazy(() => import("../pages/TermsofService"));

export const publicRoutes = [
  {
    id: "1",
    name: "Home",
    link: allRoutes.home,
    element: <Home />,
  },
  {
    id: "2",
    name: "About Us",
    link: allRoutes.about,
    element: <About />,
  },
  {
    id: "3",
    name: "Conatct Us",
    link: allRoutes.contact,
    element: <Contact/>,
  },
  {
    id: "4",
    name: "Services",
    link: allRoutes.services,
    element: <Services/>
  },

  {
    id: "5",
    name: "Projects",
    link: allRoutes.projects,
    element: <Projects/>
  },
  {
    id: "6",
    name: "Projects Details",
    link: allRoutes.projectsdetails,
    element: <ProjectDetail/>
  },
  {
    id: "7",
    name: "Services Details",
    link: allRoutes.servicesdetails,
    element: <ServicesDetails/>
  },
  {
    id: "8",
    name: "Privacy Policy",
    link: allRoutes.privacypolicy,
    element: <PrivacyPolicy/>
  },
  {
    id: "9",
    name: "Terms Of Service",
    link: allRoutes.termsofservice,
    element: <TermsOfService/>
  },
];
