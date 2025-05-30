import dynamic from "next/dynamic";

const PremiumProcess = dynamic(() => import("./PremiumProcess"), {
  ssr: false,
  loading: () => <div className="min-h-[600px] w-full" />,
});

export default PremiumProcess;
