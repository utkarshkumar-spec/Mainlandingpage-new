import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ravi",
    rating: 5,
    text: "Designed for ed-tech businesses that need full branding control, scalable infrastructure, and modern learning workflows.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi" // Placeholder avatar
  },
  {
    id: 2,
    name: "Ravi",
    rating: 5,
    text: "Designed for ed-tech businesses that need full branding control, scalable infrastructure, and modern learning workflows.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi"
  },
  {
    id: 3,
    name: "Ravi",
    rating: 5,
    text: "Designed for ed-tech businesses that need full branding control, scalable infrastructure, and modern learning workflows.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi"
  }
];

const ReviewsSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1132px] mx-auto flex flex-col items-center" style={{ gap: '93px' }}>
        
        {/* Header Section */}
        <div className="text-center max-w-[700px]">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reviews</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Designed for ed-tech businesses that need full branding control, 
            scalable infrastructure, and modern learning workflows.
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Rating Summary */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-blue-600 p-2 rounded-full">
                <Star className="text-white fill-white" size={24} />
              </div>
              <span className="text-5xl font-bold">4.5</span>
            </div>
            <p className="text-gray-500 mb-8 text-lg">from 550 ratings</p>

            {/* Progress Bars */}
            <div className="space-y-4 w-full max-w-[400px]">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4">
                  <span className="text-lg font-medium w-4">{star}</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${star === 5 ? 'bg-blue-600 w-full' : 'bg-transparent'}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Individual Reviews */}
          <div className="space-y-10">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full bg-gray-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500">Rated {review.rating} star</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}

            {/* View All Button */}
            <div className="pt-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                View all reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;