import { useState } from "react";
import LoadingAnimation from "../../utils/components/LoadingAnimation";
import BodyContainer from "../../utils/components/BodyContainer";
import LoginForm from "./login-form-sub-components/LoginForm";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <BodyContainer title="Login"></BodyContainer>
      {isLoading && <LoadingAnimation />}
      <div className=" md:flex md:justify-center">
        <BodyContainer width="md:w-3/4 lg:w-1/2">
          <LoginForm setIsLoading={setIsLoading} />
        </BodyContainer>
      </div>
    </>
  );
}

export default Login;
