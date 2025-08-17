import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from '@phosphor-icons/react';

interface ProfileImage {
  src: string;
  alt: string;
}

const LaunchPage: React.FC<{ onEnterGallery: () => void }> = ({ onEnterGallery }) => {
  const [profileImageIndex, setProfileImageIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [animationType, setAnimationType] = useState('bounce');
  const [showImage, setShowImage] = useState(false);
  
  const profileImages: ProfileImage[] = [
    { src: '/images/R0RY__Subject.png', alt: 'R0RY Subject' },
    { src: '/images/r_black.jpg', alt: 'R Black' },
    { src: '/images/REMY_MAD.jpg', alt: 'Remy Mad' },
    { src: '/images/meanimated.jpg', alt: 'Me Animated' },
    { src: '/images/R0RY__Subject.png', alt: 'R0RY Subject Final' }
  ];

  // Initial animation on mount with delay
  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
      setIsSpinning(true);
      setTimeout(() => {
        setIsSpinning(false);
      }, 600);
    }, 1500);
  }, []);

  const handleImageToggle = () => {
    const nextIndex = (profileImageIndex + 1) % profileImages.length;
    
    // Check if we're about to show the final image before entering gallery
    if (nextIndex === 4) {
      setAnimationType('bounce');
      setIsSpinning(true);
      setTimeout(() => {
        setProfileImageIndex(nextIndex);
        setIsSpinning(false);
        // After showing the final image, transition to gallery
        setTimeout(() => {
          onEnterGallery();
        }, 1500);
      }, 300);
      return;
    }
    
    // Set animation type based on the current index
    if (profileImageIndex === 3 && nextIndex === 0) {
      setAnimationType('bounce');
    } else {
      setAnimationType('coin-flip');
    }
    
    setIsSpinning(true);
    setTimeout(() => {
      setProfileImageIndex(nextIndex);
      setIsSpinning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-[50%] left-[40%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/images/meanimated.jpg" 
                alt="Rory" 
                className="w-12 h-12 rounded-full animate-spin-slow-ccw"
              />
              <span className="text-cyan-400 font-bold text-xl">Rory</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="https://www.r0ry.com/html/remy_gans.html" className="hover:text-cyan-400 transition">CatGAN</a>
              <a href="https://www.r0ry.com/html/smart_cat_door.html" className="hover:text-cyan-400 transition">CatNet</a>
              <a href="https://www.r0ry.com/html/vhdl_mlp.html" className="hover:text-cyan-400 transition">MLP</a>
              <a href="https://www.r0ry.com/html/park_smart.html" className="hover:text-cyan-400 transition">ParkSmart</a>
              <a href="https://www.r0ry.com/html/more_computer_vision_projects.html" className="hover:text-cyan-400 transition">CV</a>
              <a href="https://www.r0ry.com/html/vlsi_design.html" className="hover:text-cyan-400 transition">VLSI</a>
              <a href="https://www.r0ry.com/html/class_notes.html" className="hover:text-cyan-400 transition">Notes</a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-red-400 font-bold text-xl">Remy</span>
              <img 
                src="/images/REMY_MAD.jpg" 
                alt="Remy" 
                className="w-12 h-12 rounded-full animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <div className="mb-12">
            {showImage && (
              <div 
                className={`inline-block relative cursor-pointer ${isSpinning ? 'animate-' + animationType : ''} ${(profileImageIndex === 0 || profileImageIndex === 4) ? 'rainbow-glow' : ''}`}
                onClick={handleImageToggle}
              >
                <img 
                  src={profileImages[profileImageIndex].src}
                  alt={profileImages[profileImageIndex].alt}
                  className={`w-64 h-64 object-cover ${(profileImageIndex === 0 || profileImageIndex === 4) ? '' : 'rounded-full'} ${(profileImageIndex === 0 || profileImageIndex === 4) ? 'border-0' : 'border-4 border-cyan-400'} shadow-2xl`}
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 opacity-0 hover:opacity-100 transition whitespace-nowrap">
                  {profileImageIndex === 4 ? 'Click to enter gallery...' : 
                   profileImageIndex === 3 ? 'Click for finale' : 'Click to toggle'}
                </div>
              </div>
            )}
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            RLR
          </h1>
          <p className="text-2xl mb-4 text-gray-300">Computer Engineer & AI Researcher</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Exploring the intersection of hardware and software through 
            innovative projects in machine learning, VLSI design, and computer vision.
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition cursor-pointer group">
              <a href="https://www.r0ry.com" className="block p-6">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Foundation</h3>
                <p className="text-gray-400">Undergraduate projects and early engineering journey</p>
                <ArrowRight className="mt-3 text-cyan-400 group-hover:translate-x-2 transition" />
              </a>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition cursor-pointer group">
              <a href="https://rlr-github.github.io" className="block p-6">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Portfolio</h3>
                <p className="text-gray-400">Computer Vision and Machine Learning applications</p>
                <ArrowRight className="mt-3 text-purple-400 group-hover:translate-x-2 transition" />
              </a>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition cursor-pointer group">
              <div className="p-6" onClick={onEnterGallery}>
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">Live Gallery</h3>
                <p className="text-gray-400">Interactive portfolio with 26+ live projects</p>
                <ArrowRight className="mt-3 text-green-400 group-hover:translate-x-2 transition" />
              </div>
            </Card>
          </div>

          {/* Enter Gallery Button */}
          <Button
            size="lg"
            onClick={onEnterGallery}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Enter Live Portfolio Gallery
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes coin-flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes bounce {
          0% { transform: rotateX(0deg) scale(1); }
          25% { transform: rotateX(180deg) scale(1.1); }
          50% { transform: rotateX(360deg) scale(1.2); }
          75% { transform: rotateX(540deg) scale(1.1); }
          100% { transform: rotateX(720deg) scale(1); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-slow-ccw {
          animation: spin-slow-ccw 4s linear infinite;
        }
        
        .animate-coin-flip {
          animation: coin-flip 0.6s ease-in-out;
        }
        
        .animate-bounce {
          animation: bounce 0.6s ease-in-out;
        }
        
        .rainbow-glow::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(45deg, 
            #ff0000, #ff7300, #fffb00, #48ff00, 
            #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
          background-size: 400%;
          border-radius: inherit;
          z-index: -1;
          animation: rainbow-glow 3s linear infinite;
        }
        
        @keyframes rainbow-glow {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}</style>
    </div>
  );
};

export default LaunchPage;
