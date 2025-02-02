import Path from "@/app/components/icons/Path";
import Slider from "@/app/components/slider/Slider";
import Title from "@/app/components/Title";

export default function Carousel() {
  return (
    <div className="mt-[104px] relative overflow-clip">
      <div className="container">
        <Title
          subtitle="TECHNOLOGY BUILT FOR YOU"
          title="The future of finance"
        />
        <div className="lg:py-6">
          <Slider />
        </div>
      </div>
      <Path className="lg:-mt-24 md:-mt-14 -mt-24" />
    </div>
  );
}
