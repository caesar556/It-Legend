import { Timer, LibraryBig, Earth, Bug } from 'lucide-react';

export default function CourseInfo({ course }) {
  return (
    <section className="mb-6 mt-14" >
      <h2 className=" text-[25px] lg:text-[34px] mb-3 font-bold">Course Matrials</h2>
      <div className="bg-white flex justify-center md:justify-between p-5 rounded-lg shadow-lg">
        <div className="flex flex-col w-full md:w-[40%] gap-3  text-sm text-gray-600">
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center" >
              <Timer size={20} /> Duration:
            </span>
            <span>{course.duration}</span>
          </p>
          <div className="border-b border-gray-300" />
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center">
              <LibraryBig size={20} /> Lessons:
            </span>
            <span>{course.lessons} </span>
          </p>
          <div className="border-b border-gray-300" />
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center">
              <Bug size={20} /> Enrolled:
            </span>
            <span>{course.enrolled} language </span>
          </p>
          <div className="border-b border-gray-300" />
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center">
              <Earth size={20} /> Language:
            </span>
            <span>{course.language} </span>
          </p>
        </div>

        <div className="hidden md:flex flex-col w-[40%] gap-3  text-sm text-gray-600">
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center" >
              <Timer size={20} /> Duration:
            </span>
            <span>{course.duration}</span>
          </p>
          <div className="border-b border-gray-300" />
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center">
              <LibraryBig size={20} /> Lessons:
            </span>
            <span>{course.lessons} </span>
          </p>
          <div className="border-b border-gray-300" />
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center">
              <Bug size={20} /> Enrolled:
            </span>
            <span>{course.enrolled} language </span>
          </p>
          <div className="border-b border-gray-300" />
          <p className="flex justify-between items-center" >
            <span className="flex gap-2 items-center">
              <Earth size={20} /> Language:
            </span>
            <span>{course.language} </span>
          </p>
        </div>

      </div>
    </section>
  );
};

