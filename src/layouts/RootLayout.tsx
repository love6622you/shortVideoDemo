import Footer from "@/components/footer/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Grid bg={"#323638"} color={"#fff"} fontWeight={600}>
      <GridItem as="main" minHeight={"95dvh"}>
        <Outlet />
      </GridItem>

      <GridItem as="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
