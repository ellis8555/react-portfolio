import { useRef, useEffect, useContext } from "react";
import { ProvideDisplayAlert } from "../App/App";
import BodyContainer from "../../utils/components/BodyContainer";
import HomeAlertMessage from "./Home-components/HomeAlertMessage";
import Construction from "../Construction/Construction";
import HomeMessagePoints from "./Home-components/HomeMessagePoints";
import Certificates from "../Certificates/Certificates";

function Home() {
  const { displayAlert, setDisplayAlert } = useContext(ProvideDisplayAlert);
  const messageParagraph = useRef();

  useEffect(() => {
    if (displayAlert) {
      document.documentElement.scrollIntoView(top);
      let innerInterval;
      const timeToHideDisplayAlert =
        (parseInt(getComputedStyle(messageParagraph.current).height) / 10) *
          10 +
        3075;

      const beginReductionOfHeight = setTimeout(() => {
        innerInterval = setInterval(() => {
          let messageParagraphHeight = parseInt(
            getComputedStyle(messageParagraph.current).height
          );
          if (messageParagraphHeight > 0) {
            messageParagraph.current.style.height = `${
              messageParagraphHeight - 4
            }px`;
          }
        }, 10);
      }, 3000);

      const showAlert = setTimeout(() => {
        setDisplayAlert(false);
      }, timeToHideDisplayAlert);
      return () => {
        clearTimeout(showAlert);
        clearTimeout(beginReductionOfHeight);
        clearInterval(innerInterval);
      };
    }
  }, [displayAlert]);

  return (
    <>
      {displayAlert && (
        <BodyContainer>
          <HomeAlertMessage
            messageParagraph={messageParagraph}
            displayAlert={displayAlert}
          />
        </BodyContainer>
      )}
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
