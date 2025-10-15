import {MoveRight} from 'lucide-react';


export default function CommentCard() {
  return (
    <section className="bg-white flex flex-col gap-12 p-6 rounded-lg shadow-sm">
      <div>
        <div className="flex items-start gap-4 ">
          <img
            src="/logo.png"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-gray-800 font-semibold text-lg">Student Name Goes Here</h3>
            <p className="text-gray-400 text-sm mb-2">Oct 10, 2021</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-300 mt-2" />
      </div>


      <div>
        <div className="flex items-start gap-4 ">
          <img
            src="/logo.png"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-gray-800 font-semibold text-lg">Student Name Goes Here</h3>
            <p className="text-gray-400 text-sm mb-2">Oct 10, 2021</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-300 mt-2" />
      </div>


      <div>
        <div className="flex items-start gap-4 ">
          <img
            src="/logo.png"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-gray-800 font-semibold text-lg">Student Name Goes Here</h3>
            <p className="text-gray-400 text-sm mb-2">Oct 10, 2021</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>


      <div className="mt-5">
        <textarea
          placeholder="Write your comment here..."
          className="w-full h-40 resize-none rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-4 text-gray-700 text-sm mb-4 shadow-xl"
        />

        <button
          type="button"
          className="px-6 py-3 flex items-center gap-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition duration-300 shadow-sm"
        >
          Submit Review
          <MoveRight size={18} />
        </button>
      </div>
    </section>
  );
}