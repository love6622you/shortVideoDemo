import VideoPlayer from "@/components/video/plyr/VideoPlayer";

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
  const [slider, setSlider] = useState<Slider | null>(null);
  const [videoList, setVideoList] = useState<any>([]);
  const [url, setUrl] = useState(
    "http://localhost:3000/media/Bugatti_Chiron.m3u8"
  );

  const getVideoList = () => {
    apiClient({
      url: "/following_list",
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

      {videoList.length > 0 && videoList[0].play_url && (
        <VideoPlayer url={videoList[0].play_url} />
      )}

      {/* <Box h={"95vh"}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Video url={videoList[0]?.play_url} />
        </Slider>
      </Box> */}
    </Box>
  );
};

export default Home;
