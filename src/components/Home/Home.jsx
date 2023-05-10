import { useRef, useContext } from "react";
import { DisplayAlertContext } from "../../contexts/DisplayAlertContext";
import useDisplayAlert from "../../hooks/useDisplayAlert";
import BodyContainer from "../../utils/components/BodyContainer";
import HomeAlertMessage from "./Home-components/HomeAlertMessage";
import Construction from "../Construction/Construction";
import HomeMessagePoints from "./Home-components/HomeMessagePoints";
import Certificates from "../Certificates/Certificates";

function Home() {
  const { displayAlert, setDisplayAlert, messageToDisplay } =
    useContext(DisplayAlertContext);
  const messageParagraph = useRef();

  useDisplayAlert(displayAlert, setDisplayAlert, messageParagraph);

  return (
    <>
      {displayAlert && (
        <BodyContainer>
          <HomeAlertMessage
            messageParagraph={messageParagraph}
            messageToDisplay={messageToDisplay}
            displayAlert={displayAlert}
          />
        </BodyContainer>
      )}
      <BodyContainer title="My React Portfolio">
        <div className="py-2 h6">
          <p>
            This portfolio has two seperate versions that are both connected to
            a single back end
          </p>
          <p> - The first version was created out of vanilla javascript</p>
          <p> - The second version (this site) is React</p>
        </div>
      </BodyContainer>
      <BodyContainer>
        <Construction />
      </BodyContainer>
      <BodyContainer>
        <HomeMessagePoints />
      </BodyContainer>
      <div className="flex justify-center mx-auto overflow-hidden">
        <Certificates />
      </div>
    </>
  );
}

export default Home;
