import { Container } from "@chakra-ui/react";

import Comments from "./home/Comments";

const Home = () => {
  return (
    <Container maxW={{ base: "414px" }}>
      <Comments />
    </Container>
  );
};

export default Home;
