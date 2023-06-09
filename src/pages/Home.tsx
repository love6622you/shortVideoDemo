import ReactPlayer from "@/components/video/react-player/VideoPlayer";

import apiClient from "@/lib/axios";
import { Box, Flex, List, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";

type videoListProps = {
  title: String;
  cover: String;
  play_url: String;
};

enum ListType {
  Following = "following",
  ForYou = "forYou"
}

const Home = () => {
  const [playerId, setPlayerId] = useState(null);
  const [slider, setSlider] = useState<Slider | null>(null);
  const [videoList, setVideoList] = useState<any>([]);
  const [currentType, setCurrentType] = useState(ListType.Following);

  // Settings for the slider
  const settings = {
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setPlayerId(videoList[index].title)
  };

  const getVideoList = (url = "following_list") => {
    apiClient({
      url,
      method: "get"
    }).then((res) => {
      const { data } = res;
      setVideoList(data.items);
    });
  };

  const RenderTypeList = () => {
    const types = [
      {
        key: ListType.Following,
        label: "Following",
        onClick: () => {
          getVideoList("following_list");
        }
      },
      {
        key: ListType.ForYou,
        label: "For You",
        onClick: () => {
          getVideoList("for_you_list");
        }
      }
    ];

    return types.map((type) => (
      <Text
        key={type.key}
        fontWeight={"bold"}
        cursor={"pointer"}
        {...(type.key === currentType
          ? {
              color: "lightskyblue"
            }
          : {})}
        onClick={() => {
          if (currentType !== type.key) {
            type.onClick();
            setCurrentType(type.key);
          }
        }}
      >
        {type.label}
      </Text>
    ));
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <Box pos={"relative"}>
      <Flex
        pos={"absolute"}
        top={"2%"}
        w={"full"}
        justifyContent={"center"}
        gap={10}
        zIndex={10}
      >
        {RenderTypeList()}
      </Flex>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {videoList.length > 0 &&
          videoList.map((video: videoListProps, index: number) => {
            return (
              <ReactPlayer
                key={index}
                id={playerId}
                type={currentType}
                video={video}
              />
            );
          })}
      </Slider>
    </Box>
  );
};

export default Home;
