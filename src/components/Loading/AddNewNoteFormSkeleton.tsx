export const AddNewNoteFormSkeleton = () => (
  <>
    <form
      className="flex flex-col p-6 bg-white rounded-md drop-shadow animate-pulse"
      role="status"
    >
      <div className="w-1/3 h-7 mx-auto bg-gray-200 text-lg font-bold mb-6 rounded-md"></div>
      <div className="w-full h-0.5 bg-gray-200 mb-6"></div>
      <div className="flex flex-wrap -mx-3 gap-1">
        <div className="w-full px-3">
          <div className="h-4 w-32 rounded mb-2 bg-gray-200"></div>
          <div className="h-11 w-full rounded mb-2 bg-gray-200"></div>
        </div>
        <div className="w-full px-3">
          <div className="h-4 w-32 rounded mb-2 bg-gray-200"></div>
          <div className="h-20 w-full rounded mb-2 bg-gray-200"></div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center mt-1">
        <div className="w-full h-8 bg-gray-200 rounded"></div>
      </div>
    </form>
  </>
);
