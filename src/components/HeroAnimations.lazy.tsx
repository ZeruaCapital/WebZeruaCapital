import dynamic from "next/dynamic";

const HeroAnimations = dynamic(
  () => import("./HeroAnimations").then((mod) => mod.HeroAnimations),
  {
    ssr: false,
    loading: () => <div className="animate-pulse" />,
  },
);

export default HeroAnimations;
