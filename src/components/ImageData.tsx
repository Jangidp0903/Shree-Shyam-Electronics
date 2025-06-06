import React from "react";
import Image, { StaticImageData } from "next/image";
import FridgeCooling from "../../public/FridgeCoolingIssue.png";
import FridgeNotTurning from "../../public/FridgeNotTurning.png";
import WashingRepair from "../../public/WashingMachineRepair.png";
import WashingNoise from "../../public/WashingMachineNoise.png";
import MicrowaveDoor from "../../public/MicrowaveDoor.png";
import MicrowavePanel from "../../public/MicrowaveHeating.png";

interface ImageCardType {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}

interface ImageCardProps {
  image: ImageCardType;
}

const imageData: ImageCardType[] = [
  {
    id: 1,
    image: FridgeCooling,
    title: "Fridge Cooling Issue",
    description:
      "We fix cooling problems, gas leaks, and compressor issues in all fridge models.",
  },
  {
    id: 2,
    image: FridgeNotTurning,
    title: "Fridge Not Turning On",
    description:
      "Door seal issues, wiring faults, or thermostat repair — we've got you covered.",
  },
  {
    id: 3,
    image: WashingRepair,
    title: "Washing Machine Repair",
    description:
      "From drum not spinning to water leakage – we repair all models efficiently.",
  },
  {
    id: 4,
    image: WashingNoise,
    title: "Washing Machine Noise Issue",
    description:
      "Strange noise? Vibration? We fix motor, bearings, and balance problems.",
  },
  {
    id: 5,
    image: MicrowavePanel,
    title: "Microwave Heating Problem",
    description:
      "No heating or uneven heating? We fix magnetron, capacitor, and other issues.",
  },
  {
    id: 6,
    image: MicrowaveDoor,
    title: "Microwave Door or Panel Repair",
    description:
      "We repair broken doors, buttons, panels, and provide genuine replacement parts.",
  },
];

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors">
      <div className="w-full aspect-square relative">
        <Image
          src={image.image}
          alt={image.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {image.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {image.description}
        </p>
      </div>
    </div>
  );
};

const ImageGallery: React.FC = () => {
  return (
    <section className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          Affordable Fridge, Washing Machine & Microwave Repair Services at Your
          Doorstep
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Fast and reliable appliance repair including refrigerator compressor
          repair, washing machine motor noise fix, and microwave door
          replacement. Book your technician online now!
        </p>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {imageData.map((item) => (
            <ImageCard key={item.id} image={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
