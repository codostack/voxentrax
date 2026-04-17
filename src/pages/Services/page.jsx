import Content4 from "./components/Content1";
import VoipHeader from "./components/ServiceHeader";
import VoipCommonPage from "../../components/Animationpage";
import VoipFeatures from "../../components/FeatureAnimation";
import ServiceContent2 from "./components/Content2";

export default function Services() {
  return (
    <div>
      <VoipHeader />
      <VoipCommonPage />
      <Content4 />
      <VoipFeatures />
      <ServiceContent2 />
    </div>
  );
}