import React from "react";
import Image from "next/image";

// Define types for our image cards
interface ImageCardProps {
  image: ImageCardType;
  index: number;
}

interface ImageCardType {
  id: number;
  image: string;
  title: string;
  description: string;
  category?: string;
}

// Enhanced image data with placeholder URLs
const imageData: ImageCardType[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3736451/pexels-photo-3736451.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fridge Cooling Issue",
    description:
      "We fix cooling problems, gas leaks, and compressor issues in all fridge models.",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/4472073/pexels-photo-4472073.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fridge Not Turning On",
    description:
      "Door seal issues, wiring faults, or thermostat repair — we've got you covered.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Washing Machine Repair",
    description:
      "From drum not spinning to water leakage – we repair all models efficiently.",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/3999778/pexels-photo-3999778.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Washing Machine Noise Issue",
    description:
      "Strange noise? Vibration? We fix motor, bearings, and balance problems.",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/6249723/pexels-photo-6249723.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Microwave Heating Problem",
    description:
      "No heating or uneven heating? We fix magnetron, capacitor, and other issues.",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/6617392/pexels-photo-6617392.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Microwave Door or Panel Repair",
    description:
      "We repair broken doors, buttons, panels, and provide genuine replacement parts.",
  },
];

// ImageCard component with fixed square layout
const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="relative overflow-hidden rounded-xl cursor-pointer group bg-white border border-orange-100 transition-all duration-300">
      {/* Square image container */}
      <div className="w-full aspect-square overflow-hidden relative">
        <Image
          src={image.image}
          alt={`${image.title} - Expert appliance repair service`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
        <div className="text-white">
          <h3 className="font-bold text-lg mb-1">{image.title}</h3>
          <p className="text-sm text-gray-200 mb-2">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

// Main Gallery Component
const ImageGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Affordable Fridge, Washing Machine & Microwave Repair Services at
              Your Doorstep
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Fast and reliable appliance repair including refrigerator
              compressor repair, washing machine motor noise fix, and microwave
              door replacement. Book your technician online now!
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {imageData.map((image, index) => (
              <ImageCard key={image.id} image={image} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
