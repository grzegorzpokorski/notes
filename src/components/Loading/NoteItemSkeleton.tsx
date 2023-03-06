export const NoteItemSkaleton = ({ i = 1 }: { i?: number }) => (
  <div
    role="status"
    className="w-full p-6 flex flex-col md:flex-row gap-3 md:gap-6 animate-pulse bg-white rounded-md drop-shadow"
    style={{ animationDelay: `${i * 0.25}s` }}
  >
    <div className="flex flex-col w-full">
      <div className="w-1/3 h-6 bg-gray-200 rounded mb-3"></div>
      <div className="w-full h-6 bg-gray-200 rounded mb-1"></div>
      <div className="w-full h-6 bg-gray-200 rounded mb-1"></div>
    </div>
    <div className="flex flex-row md:flex-col gap-1.5">
      <div className="w-20 h-8 bg-gray-200 rounded"></div>
      <div className="w-20 h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
);
