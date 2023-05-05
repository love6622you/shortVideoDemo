import { Grid, GridItem } from "@chakra-ui/react";

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
      bgColor={"#191919"}
      py={{ base: 2 }}
      templateColumns={`repeat(${routeList.length},1fr)`}
      textAlign={"center"}
    >
      {routeList.map((route) => {
        return <GridItem key={route.name}>{route.name}</GridItem>;
      })}
    </Grid>
  );
};

export default Footer;
