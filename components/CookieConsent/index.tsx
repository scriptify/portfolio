import React, { useEffect, useState } from "react";
import { giveConsent, wasConsentGiven } from "../../util/analytics";

interface Props {}

const CookieConsentCmp = ({}: Props) => {
  const [consent, setConsent] = useState<"unset" | "given" | "not_given">(
    wasConsentGiven() ? "given" : "unset"
  );

  function onConsent(given: boolean) {
    setConsent(given ? "given" : "not_given");
  }

  useEffect(() => {
    if (consent === "given") {
      giveConsent();
    }
  }, [consent]);

  if (consent !== "unset") {
    return <></>;
  }

  return (
    <div className="fixed bottom-0 right-0 w-full p-2 max-w-screen-md">
      <div className="text-center sm:text-left bg-black p-2 text-white sm:flex justify-between font-secondary items-center rounded-lg">
        <p>
          I use cookies to gain a better understanding of how this site is used
        </p>
        <div className="flex justify-center mt-2 sm:mt-0">
          <button
            onClick={() => onConsent(false)}
            className="w-1/2 sm:w-24 bg-gray-400 rounded-md py-2 mr-2"
          >
            No, thanks
          </button>
          <button
            onClick={() => onConsent(true)}
            className="w-1/2 sm:w-24 bg-blue-500 rounded-md py-2"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

function CookieConsent() {
  const [didMount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return didMount ? <CookieConsentCmp /> : <></>;
}

export default CookieConsent;
