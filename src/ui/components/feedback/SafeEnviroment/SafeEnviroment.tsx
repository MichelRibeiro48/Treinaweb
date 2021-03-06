import React from "react";
import { SafeEnviromentContainer } from "./SafeEnviroment.style";
import { Container } from "@material-ui/core";

const SafeEnviroment: React.FC = () => {
  return (
    <SafeEnviromentContainer>
      <Container>
        Ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnviromentContainer>
  );
};

export default SafeEnviroment;
