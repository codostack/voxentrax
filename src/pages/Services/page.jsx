import Content4 from "./components/Content1";
import VoipHeader from "./components/ServiceHeader";
import ServiceContent2 from "./components/Content2";
import RegistrationPage from "../../components/Contactform";

export default function Services() {
  return (
    <div>
      <VoipHeader />
      <Content4 />
      <RegistrationPage />
      <ServiceContent2 />
    </div>
  );
}