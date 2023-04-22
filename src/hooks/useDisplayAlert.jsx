/*
Used in Home.jsx after contact form submitted
*/

import { useEffect } from "react";

function useDisplayAlert(displayAlert, setDisplayAlert, messageParagraph) {
  useEffect(() => {
    if (displayAlert) {
      document.documentElement.scrollIntoView(top);
      const minimizeTimings = {
        reduceHeightBy: 4,
        reduceHeightOnTheseSeconds: 10,
        timeToBeginHidingAlert: 3000,
        additionalBufferTime: 25,
        timeToHideDisplayAlert: function () {
          return (
            (parseInt(getComputedStyle(messageParagraph.current).height) /
              this.reduceHeightOnTheseSeconds) *
              this.reduceHeightOnTheseSeconds +
            this.timeToBeginHidingAlert +
            this.additionalBufferTime
          );
        },
      };
      let innerInterval;

      const beginReductionOfHeight = setTimeout(() => {
        innerInterval = setInterval(() => {
          let messageParagraphHeight = parseInt(
            getComputedStyle(messageParagraph.current).height
          );
          if (messageParagraphHeight > 0) {
            messageParagraph.current.style.height = `${
              messageParagraphHeight - minimizeTimings.reduceHeightBy
            }px`;
          }
        }, minimizeTimings.reduceHeightOnTheseSeconds);
      }, minimizeTimings.timeToBeginHidingAlert);

      const showAlert = setTimeout(() => {
        setDisplayAlert(false);
      }, minimizeTimings.timeToHideDisplayAlert());
      return () => {
        clearTimeout(showAlert);
        clearTimeout(beginReductionOfHeight);
        clearInterval(innerInterval);
      };
    }
  }, [displayAlert]);
}

export default useDisplayAlert;
