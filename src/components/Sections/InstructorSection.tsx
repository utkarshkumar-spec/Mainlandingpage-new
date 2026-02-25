import React from 'react';
import { Award, Star } from 'lucide-react';

const InstructorSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 space-y-16">
      
      {/* 1. Career Certificate Banner - Dimensions: 1132px x 100px */}
      <div 
        className="w-full max-w-[1132px] min-h-[100px] flex items-center px-8 text-white relative overflow-hidden"
        style={{ 
          backgroundColor: '#0066FF', 
          borderRadius: '24px',
          border: '1px solid rgba(0,0,0,0.05)' // 5% black border as per Figma
        }}
      >
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Award size={28} className="text-white" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold leading-tight">Earn a career certificate</h3>
            <p className="text-sm opacity-90">
              Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in your performance review.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Instructor Card - Dimensions: 1044px x 499px */}
      <div 
        className="w-full max-w-[1044px] lg:h-[499px] border border-gray-100 rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch"
        style={{ gap: '0px' }} // Internal gap handled by padding/grid
      >
        {/* Left Side: Image Content */}
        <div className="w-full lg:w-1/2 relative bg-[#0000FF] min-h-[350px] lg:min-h-full flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
               <path d="M-50 100L450 450M450 -50L-50 300" stroke="#FF4D00" strokeWidth="80" />
            </svg>
          </div>
          {/* Replace src with your actual image path */}
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" 
            alt="Instructor"
            className="relative z-10 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Instructor Info - Using the 48px gap from properties */}
        <div className="w-full lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center bg-white">
          <div className="flex flex-col" style={{ gap: '48px' }}>
            
            {/* Header Text */}
            <div>
              <h2 className="text-[40px] font-bold text-gray-900 leading-tight mb-2">Meet your Instructor</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-[400px]">
                Designed for ed-tech businesses that need full branding control, scalable infrastructure, and modern learning workflows.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">Instructor Name</span>
                <p className="text-2xl font-bold text-gray-900">Ritwik Raj</p>
              </div>

              <div>
                <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">Experience</span>
                <p className="text-2xl font-semibold text-gray-900">4 years 5 months</p>
              </div>

              <div>
                <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">Rating</span>
                <div className="flex items-center gap-2">
                  <Star className="text-orange-400 fill-orange-400" size={20} />
                  <p className="text-2xl font-semibold text-gray-900">4 stars</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;