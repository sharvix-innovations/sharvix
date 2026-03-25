import allRoutes from "./all_routes";
import Home from "../pages/Home";
import Contact from "../pages/ConatctUs";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetails";
import Services from "../pages/Services";
import ServicesDetails from "../pages/ServicesDetails";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PolicyPage";
import TermsOfService from "../pages/TermsofService";

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
