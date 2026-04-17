import Aboutheader from "./components/Aboutheader"
import Content3 from "./components/Content1"
import VoipFeatureDisplay from "../../components/FeatureAnimation"
import AboutUsContent2 from "./components/Content2"
import RegistrationPage from "../../components/Contactform"

const AboutPage = () => {

  return (
    <div>
<Aboutheader/>
      <RegistrationPage />
<Content3/>
<VoipFeatureDisplay/>
<AboutUsContent2/>
    </div>
  )
}

export default AboutPage