import {
  CoursePlayer,
  VideoList,
  CourseProgress,
  CourseInfo,
  CommentSection
} from "../components/";
import { courseData } from "../constants/constants.js";
import { useState, useEffect } from "react";

export default function CourseDetalis() {
  const [videos, setVideos] = useState(() => {
    const saved = localStorage.getItem("videos");
    return saved ? JSON.parse(saved) : courseData.videos.map((v) => ({
      ...v, watched: false
    }));
  });
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);



  const handleWatched = (id) => {
    setVideos((prev) => (
      prev.map((v) => (
        v.id === id ? { ...v, watched: true } : v
      ))
    ));

  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between mt-4 px-10 gap-8">
      <div className="flex-1 ">
        <CoursePlayer video={currentVideo} onWatched={handleWatched} />
        <CourseInfo course={courseData} />
        <div className="mt-16">
          <h2 className="text-[34px]  font-bold">Comments</h2>
          <CommentSection />
        </div>
      </div>

      <aside className="w-full md:w-[37%] p-5">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Topics for This Course
        </h3>
        <CourseProgress videos={videos} />
        <VideoList
          videos={videos}
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
          title="Week 1-4"
          desc="Welcome to your new course content"
        />
      </aside>
    </div>
  )
}













