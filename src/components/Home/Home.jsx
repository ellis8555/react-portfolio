import BodyContainer from "../../utils/components/BodyContainer";
import Construction from "../Construction/Construction";
import HomeMessagePoints from "./Home-components/HomeMessagePoints";
import Certificates from "../Certificates/Certificates";

function Home() {
  return (
    <>
      <BodyContainer title="My React Portfolio">
        <Construction />
      </BodyContainer>
      <BodyContainer>
        <HomeMessagePoints />
      </BodyContainer>
      <div className="flex justify-center">
        <Certificates />
      </div>
    </>
  );
}

export default Home;
