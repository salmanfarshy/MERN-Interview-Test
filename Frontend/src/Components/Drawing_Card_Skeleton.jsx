import { Skeleton } from "./ui/skeleton";

function Drawing_Card_Skeleton() {
  return (
    <div className="max-w-[310px] w-fit border bg-gray-100/90 py-4 px-6 rounded-lg block hover:shadow-xl shadow-white transition-shadow delay-75 ease-out relative">
      <div className="absolute top-2 right-3 text-xs font-medium bg-amber-500 px-2 py-[3px] rounded-md text-gray-100 select-none">
        Drawing
      </div>

      <Skeleton className="text-xl text-cyan-800 font-bold leading-[1.2] mt-1 break-words w-[calc(100%-40%)] h-6"></Skeleton>

      <canvas
        width={250}
        height={200}
        className="border-slate-500 border rounded-lg bg-white my-3"
      ></canvas>

      <div className="text-base">
        <p className="mb-1">
          <strong className="text-cyan-700">Created at:</strong>{" "}
          <Skeleton className="text-sm font-medium text-gray-900 w-[calc(100%-40%)] h-4 inline-block"></Skeleton>
        </p>
        <p>
          <strong className="text-cyan-700">Updated at:</strong>{" "}
          <Skeleton className="text-sm font-medium text-gray-900 w-[calc(100%-40%)] h-4 inline-block"></Skeleton>
        </p>
      </div>
    </div>
  );
}

export default Drawing_Card_Skeleton;
