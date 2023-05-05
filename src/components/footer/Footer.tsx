import { Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const routeList = [
  {
    path: "/",
    name: "home"
  },
  {
    path: "/discover",
    name: "discover"
  }
];

const Footer = () => {
  return (
    <Grid
      h={"100%"}
      py={{ base: 2 }}
      templateColumns={`repeat(${routeList.length},1fr)`}
      alignContent={'center'}
      bgColor={"#191919"}
      textAlign={"center"}
    >
      {routeList.map((route) => {
        return (
          <GridItem key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Footer;
