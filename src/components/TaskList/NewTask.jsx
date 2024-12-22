const NewTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] bg-yellow-400 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa
        illo atque odio nemo qui?
      </p>
      <div className="mt-4">
        <button className="font-semibold rounded">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
