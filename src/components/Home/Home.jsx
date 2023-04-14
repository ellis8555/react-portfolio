import BodyContainer from "../../utils/BodyContainer";
import Construction from "../Construction/Construction";
import HomeMessagePoints from "./Home-components/HomeMessagePoints";
import Certificates from "../Certificates/Certificates";

function Home() {
  return (
    <>
      <BodyContainer
        title="My React Portfolio"
        contentComponent={<Construction />}
      />
      <BodyContainer contentComponent={<HomeMessagePoints />} />
      <div className="flex justify-center">
        <Certificates />
      </div>
    </>
  );
}

export default Home;
