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
      "https://images.pexels.com/photos/28232327/pexels-photo-28232327/free-photo-of-angry-bird-look.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sunset View",
    description: "Aesthetically Pleasing",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/17709384/pexels-photo-17709384/free-photo-of-tabby-cat-lying-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Forest Path",
    description: "Nature",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/15306832/pexels-photo-15306832/free-photo-of-close-up-of-a-head-of-a-bird.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Winter Portrait",
    description: "Portrait",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/5667445/pexels-photo-5667445.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Golden Gate",
    description: "Architecture/Landmark",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/11416418/pexels-photo-11416418.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Wildlife",
    description: "Nature/Animals",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/9321458/pexels-photo-9321458.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Vintage Car",
    description: "Aesthetic/Transport",
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
          alt={image.title}
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
              Premium Photography
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our collection of stunning high-quality images for all
              your creative needs
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
