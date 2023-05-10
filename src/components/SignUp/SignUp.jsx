import { useState } from "react";
import LoadingAnimation from "../../utils/components/LoadingAnimation";
import SignupForm from "./signup-form-sub-components/SignupForm";
import SignupMessages from "./signup-form-sub-components/SignupMessages";
import BodyContainer from "../../utils/components/BodyContainer";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className=" lg:flex lg:justify-center">
        <BodyContainer title="Sign up" width="lg:w-3/4">
          <SignupMessages />
        </BodyContainer>
      </div>
      {isLoading && <LoadingAnimation />}
      <div className=" md:flex md:justify-center">
        <BodyContainer width="md:w-3/4 lg:w-1/2">
          <SignupForm setIsLoading={setIsLoading} />
        </BodyContainer>
      </div>
    </>
  );
}

export default SignUp;
