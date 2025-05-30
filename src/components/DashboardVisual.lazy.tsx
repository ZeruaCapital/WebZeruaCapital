import dynamic from "next/dynamic";

const DashboardVisual = dynamic(() => import("./DashboardVisual"), {
  ssr: false,
  loading: () => (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-8 w-[400px] mx-auto relative overflow-hidden border border-gray-100 min-h-[420px] flex flex-col animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
      <div className="flex-1 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  ),
});

export default DashboardVisual;
