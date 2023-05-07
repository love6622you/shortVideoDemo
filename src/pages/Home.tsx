import ReactPlayer from "@/components/video/react-player/VideoPlayer";

import apiClient from "@/lib/axios";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";

type videoListProps = {
  title: String;
  cover: String;
  play_url: String;
};

const Home = () => {
  const [playerId, setPlayerId] = useState(null);

  // Settings for the slider
  const settings = {
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    afterChange: (index: number) => setPlayerId(videoList[index].title)
  };

  const [slider, setSlider] = useState<Slider | null>(null);
  const [videoList, setVideoList] = useState<any>([]);
  const [url, setUrl] = useState(
    "http://localhost:3000/media/Bugatti_Chiron.m3u8"
  );

  const getVideoList = () => {
    apiClient({
      // url: "/following_list",
      url: "/for_you_list",
      method: "get"
    }).then((res) => {
      const { data } = res;
      setVideoList(data.items);
    });
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <Box pos={"relative"}>
      <Flex gap={4} pos={"absolute"}>
        <Text>Following</Text>
        <Text>For You</Text>
      </Flex>

      {/* <Box> */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {videoList.length > 0 &&
          videoList.map((video: videoListProps, index: number) => {
            return <ReactPlayer key={index} id={playerId} video={video} />;
          })}
      </Slider>
      {/* </Box> */}
    </Box>
  );
};

export default Home;
