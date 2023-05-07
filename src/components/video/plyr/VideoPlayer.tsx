import { useEffect, useRef } from "react";

import Plyr, { APITypes, PlyrProps, PlyrInstance } from "plyr-react";
import Hls from "hls.js";
import "plyr-react/plyr.css";
import { Box, Button } from "@chakra-ui/react";

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer = ({ url = "" }: VideoPlayerProps) => {
  const playerRef = useRef<APITypes>(null);
  const supported = Hls.isSupported();

  const handleTogglePlay = () => {
    playerRef.current?.plyr.togglePlay();
  };

  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      var hls = new Hls();
      // hls.loadSource("http://localhost:3000/media/Bugatti_Chiron.m3u8");
      hls.loadSource(url);
      hls.attachMedia(video);

      // @ts-ignore
      playerRef.current.plyr.media = video;
    };
    loadVideo();
  });

  return (
    <Box>
      {supported ? (
        <Plyr
          ref={playerRef}
          id="plyr"
          options={{ volume: 0.1 }}
          source={{} as PlyrProps["source"]}
          autoPlay
          onClick={handleTogglePlay}
        />
      ) : (
        "HLS is not supported in your browser"
      )}
    </Box>
  );
};

export default VideoPlayer;
