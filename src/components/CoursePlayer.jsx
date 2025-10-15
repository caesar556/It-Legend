import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

export default function CoursePlayer({ video, onWatched }) {
  const [progress, setProgress] = useState(0);
  const [hasMarkedWatched, setHasMarkedWatched] = useState(false);

  const handleProgress = (state) => {
    const currentProgress = state.played;
    setProgress(currentProgress);

    if (currentProgress >= 0.8 && !hasMarkedWatched) {
      onWatched(video.id);
      setHasMarkedWatched(true);
    }
  };

  useEffect(() => {
    setProgress(0);
    setHasMarkedWatched(false);
  }, [video.id]);

  return (
    <section>
      <h2 className="mb-3 text-[36px] font-bold">{video.title}</h2>
      <div className="flex flex-col items-center">
        <ReactPlayer
          url={video.url}
          controls
          width="100%"
          height="400px"
          onProgress={handleProgress}
        />


        <div className="p-4 text-sm text-gray-600">
          <p>Progress: {(progress * 100).toFixed(0)}%</p>
          {progress >= 0.8 && (
            <p className="text-green-600 font-semibold">Marked as watched</p>
          )}
        </div>
      </div>
    </section>
  );
}
