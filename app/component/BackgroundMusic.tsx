import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { Volume2, VolumeX } from "lucide-react";

const YOUTUBE_VIDEO_ID = "bYCTqd7c0G8"; // ID video YouTube
interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  // Bạn có thể bổ sung thêm các phương thức khác nếu cần
}

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Bắt đầu với trạng thái đang phát
  const playerRef = useRef<YouTubePlayer | null>(null);

  useEffect(() => {
    // Tải script YouTube Iframe API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Khi API đã sẵn sàng, khởi tạo player
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1, // bật tự động phát
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
        },
        events: {
          onReady: (event: any) => {
            event.target.setVolume(50);
            event.target.playVideo(); // Phát video khi đã sẵn sàng
          },
        },
      });
    };
  }, []);

  const toggleMusic = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div id="youtube-player" className="hidden"></div>
      <Button onClick={toggleMusic} className="p-2 rounded-full shadow-lg">
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </Button>
    </div>
  );
};

export default BackgroundMusic;
