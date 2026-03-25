import InnerBanner from "../components/common/InnerBanner";
import ServiceSection from "../components/sections/ServiceDetail/ServiceSection";
import OtherServicesSection from "../components/sections/ServiceDetail/OtherServicesSection";
import SEO from "../components/common/SEO";

import { useParams, Navigate } from "react-router-dom";
import servicesData from "../data/servicesData";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const currentService = servicesData.find(s => s.id === serviceId);

  if (!currentService) {
    return <Navigate to="/404" />;
  }

  const { details } = currentService;

  const otherServices = servicesData
    .filter(s => s.id !== serviceId)
    .map(s => ({
      title: s.title,
      description: s.description,
      list: s.list,
      link: `/services/${s.id}`
    }));

  const titleText = currentService.title.replace(/<br\s*\/?>/gi, " ");

  return (
    <>
      <SEO 
        title={`${titleText} Services`}
        description={currentService.description}
        url={`/services/${serviceId}`}
        type="article"
      />
      <InnerBanner {...details.banner} />
      <ServiceSection 
        approachTitle={details.approach.title}
        approachThin={details.approach.thin}
        approachText={details.approach.text}
        accordions={details.accordions}
      />
      <OtherServicesSection services={otherServices} />
    </>
  );
}
