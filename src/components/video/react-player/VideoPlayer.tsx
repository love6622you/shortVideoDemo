import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
  video: any;
  id?: string | number | null;
};

const DEFAULT_HEIGHT = window.innerHeight - 50;

const VideoPlayer = ({ video, id }: VideoPlayerProps) => {
  const videoRef = useRef<ReactPlayer>(null);
  const [windowHeight, setWindowHeight] = useState(DEFAULT_HEIGHT);

  const [playing, setPlaying] = useState(false);
  const [mute, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === video.title) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [id]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(DEFAULT_HEIGHT);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      onTouchStart={() => {
        setPlaying(!playing);
      }}
    >
      <ReactPlayer
        ref={videoRef}
        url={video.play_url}
        width="100%"
        height={windowHeight}
        playsinline={true}
        playing={playing}
        controls={true}
        muted={mute}
        volume={volume}
        loop={true}
        config={{
          file: {
            forceHLS: true
          }
        }}
      />
      {/* {loading && (
        <img
          className="loader"
          src="https://media1.tenor.com/images/a6a6686cbddb3e99a5f0b60a829effb3/tenor.gif"
          alt=""
        />
      )} */}
    </Box>
  );
};

export default VideoPlayer;
