import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Flex,
  Avatar,
  Heading
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import comments from "@/assets/data/comment.json";

export default function Comments() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({
    base: "95%",
    md: "50%"
  });
  const side = useBreakpointValue({
    base: "35%",
    md: "1%"
  });

  // Settings for the slider
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 3000,
    slidesToShow: useBreakpointValue({ base: 1, md: 2, xl: 3 }),
    slidesToScroll: 1
  };

  const CarouselsArrowIcon = ({ config }: any) => {
    return (
      <IconButton
        aria-label="left-arrow"
        position="absolute"
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        border={"1px solid #e2e8f0"}
        borderRadius={"100%"}
        bg={"#fff"}
        _hover={{
          bg: "#d7dbe0"
        }}
        {...config}
      />
    );
  };

  return (
    <Box pb={"1.875rem"} maxW={"1400px"} mx={"auto"}>
      <Heading fontSize={"3xl"} m={"1.875rem"} textAlign={"center"}>
        What Clients Says
      </Heading>

      <Box
        position={"relative"}
        maxW={"100vw"}
        height={{ base: "480px", md: "400px" }}
        overflow={"hidden"}
        color={"#718096"}
        px={{ base: 4, md: "1.375rem", lg: 5 }}
      >
        <CarouselsArrowIcon
          config={{
            left: side,
            icon: <span>＜</span>,
            onClick: () => slider?.slickPrev()
          }}
        />
        <CarouselsArrowIcon
          config={{
            right: side,
            icon: <span>＞</span>,
            onClick: () => slider?.slickNext()
          }}
        />

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {comments.map((info, index) => (
            <Box key={index} px={2}>
              <Stack
                w={"full"}
                maxW={{ base: "480px", lg: "460px" }}
                h={{ base: "auto", md: "400px" }}
                bgColor={"#FFF"}
                p={{ base: "1.5rem 1.5rem 2rem", md: "2.5rem 2.5rem 3rem" }}
                rounded={"lg"}
                mx={"auto"}
                spacing={5}
                overflow={"scroll"}
              >
                <Text px={6} pt={{ base: 5 }}>
                  {info.comment}
                </Text>

                <Flex alignItems={"center"}>
                  <Avatar boxSize={"3.75rem"} rounded={"full"} mr={4} />

                  <Box alignItems={"flex-start"}>
                    <Text>Happy Customer</Text>
                    <Text as={"span"} pr={2} color={"#2D3748"}>
                      {info.name}
                    </Text>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <IconButton
                        key={index}
                        variant="unstyled"
                        aria-label="star"
                        bgColor={"transparent"}
                        size={"16px"}
                        top={-0.5}
                        icon={<StarIcon color={"orange"} />}
                      />
                    ))}
                  </Box>
                </Flex>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
