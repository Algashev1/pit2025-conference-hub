import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const Carousel = ({ 
  images, 
  autoPlayInterval = 5000, 
  showControls = true, 
  showIndicators = true,
  className = ""
}: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (autoPlayInterval / 50));
      });
    }, 50);

    const slideInterval = setInterval(() => {
      nextImage();
    }, autoPlayInterval);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [currentImageIndex, autoPlayInterval]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`relative bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      <div className="relative aspect-video bg-gradient-to-br from-[#00A7E1] to-[#004876]">
        <img
          src={images[currentImageIndex]}
          alt={`${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {showControls && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1E1933] rounded-full p-2 shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1E1933] rounded-full p-2 shadow-lg transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {showIndicators && (
        <div className="flex justify-center gap-2 py-4 bg-white">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className="relative"
              aria-label={`Go to image ${index + 1}`}
            >
              {index === currentImageIndex ? (
                <div className="relative w-8 h-2 rounded-full bg-gray-300 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#00A7E1] rounded-full transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;