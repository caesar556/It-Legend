export default function CourseProgress({ videos }) {
  const total = videos.length;
  const watchedCount = videos.filter((v) => v.watched).length;
  const percent = Math.round((watchedCount / total) * 100);

  return (
    <div className="my-12 pr-8">
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-purple-500 h-2 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
        <p className="mt-3 text-gray-400" >{percent}% progress</p>
      </div>
    </div>
  );
};