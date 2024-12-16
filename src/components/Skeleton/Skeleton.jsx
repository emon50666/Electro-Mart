const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto my-4"></div>
      <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto my-4"></div>
      <div className="h-6 bg-gray-300 rounded w-5/6 mx-auto my-4"></div>
    </div>
  );
};

export default Skeleton;
