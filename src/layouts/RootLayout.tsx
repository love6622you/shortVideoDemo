import Footer from "@/components/footer/Footer";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Container maxW={{ base: "414px" }} px={0}>
      <Grid
        gridTemplateRows={"1fr 50px"}
        bg={"#323638"}
        color={"#fff"}
        h={"100dvh"}
      >
        <GridItem as="main">
          <Outlet />
        </GridItem>

        <GridItem as="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default RootLayout;
