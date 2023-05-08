import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

type VideoPlayerProps = {
  video: any;
  type: String;
  id?: string | number | null;
};

const DEFAULT_HEIGHT = window.innerHeight - 50;

const DEFAULT_STATE: ReactPlayerProps = {
  url: undefined,
  pip: false,
  playing: false,
  controls: true,
  light: false,
  volume: 0.8,
  played: 0,
  muted: true,
  playbackRate: 1.0,
  loop: true
};

const VideoPlayer = ({ video, type, id }: VideoPlayerProps) => {
  const videoRef = useRef<ReactPlayer>(null);
  const [windowHeight, setWindowHeight] = useState(DEFAULT_HEIGHT);

  const [videoState, setVideoState] = useState(DEFAULT_STATE);

  useEffect(() => {
    if (id === video.title) {
      setVideoState({ ...videoState, playing: true });
    } else {
      setVideoState({ ...videoState, playing: false });
      videoRef.current?.seekTo(0);
    }
  }, [id]);

  useEffect(() => {
    setVideoState({ ...videoState, playing: false });
  }, [type]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(DEFAULT_HEIGHT);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box>
      <ReactPlayer
        {...videoState}
        ref={videoRef}
        url={video?.play_url}
        width="100%"
        height={windowHeight}
        config={{
          file: {
            forceHLS: true
          }
        }}
      />
    </Box>
  );
};

export default VideoPlayer;
