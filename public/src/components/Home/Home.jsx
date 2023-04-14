import BodyContainer from "../../utils/BodyContainer";
import Construction from "../Construction/Construction";
import HomeMessagePoints from "./Home-components/HomeMessagePoints";
import Certificates from "./Home-components/Certificates";

function Home() {
  return (
    <>
      <BodyContainer
        title="My React Portfolio"
        contentComponent={<Construction />}
      />
      <BodyContainer contentComponent={<HomeMessagePoints />} />
      <Certificates />
    </>
  );
}

export default Home;
