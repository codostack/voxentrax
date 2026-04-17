import Content4 from "./components/Content1";
import VoipHeader from "./components/ServiceHeader";
import VoipFeatures from "../../components/FeatureAnimation";
import ServiceContent2 from "./components/Content2";
import RegistrationPage from "../../components/Contactform";

export default function Services() {
  return (
    <div>
      <VoipHeader />
      <RegistrationPage />
      <Content4 />
      <VoipFeatures />
      <ServiceContent2 />
    </div>
  );
}