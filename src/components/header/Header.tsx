import { Box, Flex, Image } from "@chakra-ui/react";

import logoSrc from "/img/logo.png";

const Header = () => {
  return (
    <Box
      position={"fixed"}
      w={"full"}
      px={6}
      py={2.5}
      bgColor={"#191919"}
      zIndex={"100"}
    >
      <Flex alignItems={"center"} h={"full"} gap={5}>
        <Image src={logoSrc} h={"70px"} />
      </Flex>
    </Box>
  );
};

export default Header;
