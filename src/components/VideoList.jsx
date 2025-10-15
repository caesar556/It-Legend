import { FileChartColumn, LockKeyhole, Check } from 'lucide-react';


export default function VideoList({ videos, currentVideo, setCurrentVideo, title, desc }) {
  return (
    <div className="bg-gray-50 mb-4 mt-16 py-8 px-2 lg:px-4 rounded-md shadow-md  ">
      <h3 className="text-[24px] mb-4 capitalize" >{title}</h3>
      <p className="text-gray-500 mb-6 text-md" >
      {desc}
      <div className="border-b border-b-gray-300 mt-2" />
      </p>
      
      <ul className="space-y-2 ">
        {videos.map((v) => (
          <>
            <li
              key={v.id}
              onClick={() => setCurrentVideo(v)}
              className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition ${currentVideo.id === v.id ? "bg-purple-200" : "hover:bg-gray-100"
                }`}
            >
              <span className="flex items-center gap-2 text-[13px]  lg:text-[16px] font-medium">
                <FileChartColumn size={18}/>
                {v.title}
              </span>

              {v.watched ? (
                <span className="text-green-600 text-xs font-semibold">
                  <Check size={18} />
                </span>
              ) : (
                <span className="text-gray-400 text-xs text-left">
                  <LockKeyhole size={18}/>
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