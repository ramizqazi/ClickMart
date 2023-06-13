const emptyItems = [1, 2, 3, 4, 5, 6];

/* =============================================================================
<HomeListEmpty />
============================================================================= */
const HomeListEmpty = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {emptyItems.map(item => (
        <div
          key={item}
          className="group animate-pulse relative bg-white p-2 rounded-lg shadow-md ">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
            <div className="h-full w-full bg-gray-200 object-cover object-center z-0 lg:h-full lg:w-full" />
          </div>
          <div className="mt-4 p-3 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              </h3>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* Export
============================================================================= */
export default HomeListEmpty;
