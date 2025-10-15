import { FileChartColumn, LockKeyhole } from 'lucide-react';


export default function VideoList({ videos, currentVideo, setCurrentVideo, title, desc }) {
  return (
    <div className="bg-gray-50 mt-16 py-8 px-3 rounded-md shadow-md  ">
      <h3 className="text-[24px] mb-4 capitalize" >{title}</h3>
      <p className="text-gray-500 mb-4" >{desc}</p>
      <div className="border-b border-b-gray-300" />
      <ul className="space-y-2 ">
        {videos.map((v) => (
          <>
            <li
              key={v.id}
              onClick={() => setCurrentVideo(v)}
              className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition ${currentVideo.id === v.id ? "bg-purple-200" : "hover:bg-gray-100"
                }`}
            >
              <span className="flex items-center gap-2 text-[15px]">
                <FileChartColumn size={20}/>
                {v.title}
              </span>

              {v.watched ? (
                <span className="text-green-600 text-xs font-semibold">Watched </span>
              ) : (
                <span className="text-gray-400 text-xs text-left">
                  <LockKeyhole size={20}/>
                </span>
              )}

            </li>
            <div className="border-b border-b-gray-300" />
          </>
        ))}
      </ul>
    </div>
  );
}