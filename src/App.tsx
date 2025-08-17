import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowClockwise } from '@phosphor-icons/react';
import LaunchPage from './components/LaunchPage';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  emoji: string;
  techStack: string[];
  link: string;
  previewUrl?: string; // Optional separate preview URL
  hasInteractivePreview?: boolean; // Flag for iframe-compatible sites
}

const projects: Project[] = [
  // COMPREHENSIVE Projects (4 cards)
  {
    id: 'ai-knowledge-distribution',
    title: 'AI Knowledge Distribution',
    description: 'Knowledge manifold visualization from 10 years of context and data analysis',
    category: 'comprehensive',
    emoji: '📊',
    techStack: ['Data Viz', 'Analytics'],
    link: 'https://rory.software/app1/',
    hasInteractivePreview: true
  },
  {
    id: 'application-ecosystem',
    title: 'Application Ecosystem',
    description: 'Main professional website with navigation through complete project ecosystem',
    category: 'comprehensive',
    emoji: '🌐',
    techStack: ['Hub', 'Navigation'],
    link: 'https://www.rodericklrenwick.com/',
    hasInteractivePreview: true
  },
  {
    id: 'readme',
    title: 'README',
    description: 'GitHub profile README with comprehensive overview and project links',
    category: 'comprehensive',
    emoji: '📖',
    techStack: ['Documentation', 'Overview'],
    link: 'https://github.com/RLR-GitHub/RLR-GitHub',
    hasInteractivePreview: true
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Comprehensive documentation of Computer Vision and Machine Learning applications',
    category: 'comprehensive',
    emoji: '🚀',
    techStack: ['CV & ML', 'Portfolio'],
    link: 'https://rlr-github.github.io/',
    hasInteractivePreview: true
  },
  // INTERACTIVE Projects (4 cards)
  {
    id: 'ai-manifesto',
    title: 'AI Manifesto',
    description: 'Interactive tribute to classic cyberpunk and AI themes, inspired by the movie "Wargames"',
    category: 'interactive',
    emoji: '🎮',
    techStack: ['Creative', 'Interactive'],
    link: 'https://rory.computer/',
    hasInteractivePreview: true
  },
  {
    id: 'hacker-terminal-resume',
    title: 'Hacker Terminal Resume',
    description: 'Cyberpunk-themed interactive terminal interface for computer enthusiasts',
    category: 'interactive',
    emoji: '💻',
    techStack: ['Interactive UI', 'CLI'],
    link: 'https://rory.engineer/__A1__HACKER_TERMINAL_RESUME.html',
    hasInteractivePreview: true
  },
  {
    id: 'energy-visualization',
    title: 'Energy Visualization',
    description: '3D visualization representing fusion of hardware and software - Essence of a Builder',
    category: 'interactive',
    emoji: '🔮',
    techStack: ['Three.js', 'WebGL'],
    link: 'https://rory.engineer/__A1__abstract_energy_visualization.html',
    hasInteractivePreview: true
  },
  {
    id: 'skills-nebula',
    title: 'Skills Nebula',
    description: 'Technical nebula graph visualization across multifaceted domains using D3.js',
    category: 'interactive',
    emoji: '🌌',
    techStack: ['D3.js', 'Visualization'],
    link: 'https://rory.engineer/__A1__skills_nebula.html',
    hasInteractivePreview: true
  },
  // PROFESSIONAL Projects (2 cards)
  {
    id: 'core-resume',
    title: 'Core Resume (TL;DR)',
    description: 'Comprehensive professional summary and qualifications documentation',
    category: 'professional',
    emoji: '📄',
    techStack: ['Resume', 'CV'],
    link: 'https://rlr-github.github.io/2025resume.html',
    hasInteractivePreview: true
  },
  {
    id: 'featured-projects',
    title: 'Featured Projects',
    description: 'Latest curated collection of significant projects and technical implementations',
    category: 'professional',
    emoji: '📌',
    techStack: ['Current', 'Featured'],
    link: 'https://rlr-github.github.io/2025portfolio.html',
    hasInteractivePreview: true
  },
  // FOUNDATION Projects (2 cards)
  {
    id: 'who-am-i-rory',
    title: 'Who Am I? Rory.',
    description: 'Original undergraduate webpage showcasing early project developments and engineering journey',
    category: 'foundation',
    emoji: '🎓',
    techStack: ['Origin Story', 'Legacy'],
    link: 'https://www.r0ry.com/',
    hasInteractivePreview: true
  },
  {
    id: 'neural-network-theory',
    title: 'Neural Network Theory',
    description: 'High-level mathematics for CV and ML implementations from various courses',
    category: 'foundation',
    emoji: '📚',
    techStack: ['Theory', 'Mathematics'],
    link: 'https://www.r0ry.com/html/class_notes.html',
    hasInteractivePreview: true
  },
  // HARDWARE Projects (4 cards)
  {
    id: 'mlp-hw-vhdl',
    title: 'MLP HW Simulation via VHDL',
    description: 'Multi-Layer Perceptron for 2D circle classification in hardware',
    category: 'hardware',
    emoji: '🔧',
    techStack: ['VHDL', 'FPGA'],
    link: 'https://www.r0ry.com/html/vhdl_mlp.html',
    hasInteractivePreview: true
  },
  {
    id: 'smart-cat-door',
    title: 'UNet + CNN for Smart Cat Door',
    description: 'UNet segmentation and CNN classification for unique cat detection and door actuation',
    category: 'hardware',
    emoji: '🐱',
    techStack: ['Deep Learning', 'IoT'],
    link: 'https://www.r0ry.com/html/smart_cat_door.html',
    hasInteractivePreview: true
  },
  {
    id: 'smart-parking',
    title: 'CNN for Smart Parking System',
    description: 'CNN-based parking vacancy detection system with full-stack implementation',
    category: 'hardware',
    emoji: '🚗',
    techStack: ['CNN', 'Full-Stack'],
    link: 'https://www.r0ry.com/html/park_smart.html',
    hasInteractivePreview: true
  },
  {
    id: 'vlsi-alu',
    title: 'VLSI 2-bit ALU Design',
    description: '2-bit ALU and digital logic implementations at transistor level',
    category: 'hardware',
    emoji: '📐',
    techStack: ['VLSI', 'CMOS'],
    link: 'https://www.r0ry.com/html/vlsi_design.html',
    hasInteractivePreview: true
  },
  // SOFTWARE Projects (4 cards)
  {
    id: 'wgan-gp-cat',
    title: 'WGAN-GP Deepfake Cat',
    description: 'Gradient Penalty Wasserstein-GAN for generating synthetic images of personal cat',
    category: 'software',
    emoji: '🎨',
    techStack: ['Generative AI', 'Python'],
    link: 'https://www.r0ry.com/html/remy_gans.html',
    hasInteractivePreview: true
  },
  {
    id: 'mlp-sw-python',
    title: 'MLP SW Implementation via Python',
    description: 'Multi-Layer Perceptron software implementation for pattern recognition',
    category: 'software',
    emoji: '🧠',
    techStack: ['Python', 'Neural Networks'],
    link: 'https://github.com/RLR-GitHub/ECE370/blob/main/README.md',
    hasInteractivePreview: true
  },
  {
    id: 'pca-tsne',
    title: 'PCA + T-SNE Dimensionality Reduction',
    description: 'Face Recognition via C++ and neural networks manifold via MatLab',
    category: 'software',
    emoji: '📉',
    techStack: ['C++', 'MatLab'],
    link: 'https://www.r0ry.com/html/more_computer_vision_projects.html',
    hasInteractivePreview: true
  },
  {
    id: 'cv-excursions',
    title: 'Computer Vision Excursions',
    description: 'SLAM, image stitching, segmentation, and PCA implementations',
    category: 'software',
    emoji: '🔬',
    techStack: ['Classical CV', 'Algorithms'],
    link: 'https://www.r0ry.com/html/more_computer_vision_projects.html',
    hasInteractivePreview: true
  },
  // GITHUB Projects (4 cards)
  {
    id: 'github-wgan-gp',
    title: 'WGAN-GP Deepfake Cat',
    description: 'Wasserstein GAN with Gradient Penalty for synthetic cat image generation',
    category: 'github',
    emoji: '🤖',
    techStack: ['Python', 'PyTorch'],
    link: 'https://github.com/RLR-GitHub/RemyWGAN-GP',
    hasInteractivePreview: true
  },
  {
    id: 'github-vhdl-mlp',
    title: 'VHDL MLP and Computer HW Design',
    description: 'Hardware implementations including MLP, computer architecture, and VLSI designs',
    category: 'github',
    emoji: '💻',
    techStack: ['VHDL', 'Hardware'],
    link: 'https://github.com/RLR-GitHub/MultilayerPerceptron',
    hasInteractivePreview: true
  },
  {
    id: 'github-vlsi',
    title: 'VLSI - Computer Architecture',
    description: '2-bit Arithmetic Logic Unit designed at transistor level using CMOS technology',
    category: 'github',
    emoji: '⚡',
    techStack: ['VLSI', 'CMOS'],
    link: 'https://github.com/RLR-GitHub/ECE375/blob/main/ALU_TwoBit.PNG',
    hasInteractivePreview: false // Image file, not iframe-compatible
  },
  {
    id: 'github-advanced-methods',
    title: 'Advanced Computer Methods',
    description: 'Python MLP, C++ PCA and Face Recognition implementations',
    category: 'github',
    emoji: '👁️',
    techStack: ['Python', 'C++'],
    link: 'https://github.com/RLR-GitHub/ECE270',
    hasInteractivePreview: true
  }
];

const categories = [
  { id: 'all', name: 'All Projects', count: 26 },
  { id: 'comprehensive', name: 'Comprehensive', count: 4 },
  { id: 'interactive', name: 'Interactive', count: 4 },
  { id: 'professional', name: 'Professional', count: 2 },
  { id: 'foundation', name: 'Foundation', count: 2 },
  { id: 'hardware', name: 'Hardware', count: 4 },
  { id: 'software', name: 'Software', count: 4 },
  { id: 'github', name: 'GitHub', count: 4 }
];

const categoryBadgeStyles = {
  comprehensive: 'bg-gradient-to-r from-purple-500 to-purple-700',
  interactive: 'bg-gradient-to-r from-green-500 to-green-700',
  professional: 'bg-gradient-to-r from-cyan-500 to-cyan-700',
  foundation: 'bg-gradient-to-r from-yellow-500 to-orange-500',
  hardware: 'bg-gradient-to-r from-pink-500 to-pink-700',
  software: 'bg-gradient-to-r from-blue-500 to-blue-700',
  github: 'bg-gradient-to-r from-gray-600 to-gray-800'
};

// Project Preview Component with iframe functionality
function ProjectPreview({ project }: { project: Project }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { rootMargin: '200px' }
    );

    if (previewRef.current) {
      observer.observe(previewRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  // Handle iframe error with timeout
  useEffect(() => {
    if (!isInView || !project.hasInteractivePreview) return;

    const timer = setTimeout(() => {
      if (isLoading && iframeRef.current) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [isLoading, isInView, project.hasInteractivePreview]);

  // Retry loading
  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setRetryCount(prev => prev + 1);
    
    if (iframeRef.current) {
      // Force reload by changing src with timestamp
      const url = new URL(project.link);
      url.searchParams.set('t', Date.now().toString());
      iframeRef.current.src = url.toString();
    }
  };

  // Don't show iframe for non-interactive projects
  if (!project.hasInteractivePreview) {
    return (
      <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
        <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </div>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    );
  }

  return (
    <div ref={previewRef} className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/40 overflow-hidden">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10 z-20">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            <span className="text-xs text-muted-foreground">Loading preview...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-20 text-center p-4">
          <div className="text-white mb-2">
            <span className="text-2xl block mb-1">⚠️</span>
            <span className="text-sm">Preview unavailable</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={handleRetry}
            className="text-xs bg-white/90 hover:bg-white text-black border-0"
          >
            <ArrowClockwise size={12} className="mr-1" />
            Retry
          </Button>
        </div>
      )}

      {/* Iframe Preview */}
      {isInView && (
        <iframe
          ref={iframeRef}
          src={project.link}
          title={project.title}
          className={`w-full h-full transform origin-top-left transition-opacity duration-300 ${
            isLoading || hasError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            width: '1280px',
            height: '1024px',
            transform: 'scale(0.1875)', // Precise scaling for 240px height container
            pointerEvents: 'none'
          }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          onLoad={handleIframeLoad}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}

      {/* Fallback emoji display when no iframe */}
      {!isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
            {project.emoji}
          </div>
        </div>
      )}

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </div>
  );
}

function App() {
  const [showLaunchPage, setShowLaunchPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Show launch page first, then gallery
  if (showLaunchPage) {
    return <LaunchPage onEnterGallery={() => setShowLaunchPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-[50%] left-[40%] w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 space-y-16">
        {/* Header */}
        <header className="text-center">
          <Card className="glass-card p-10 border-border/50">
            <CardContent className="p-0">
              <h1 className="text-5xl font-bold gradient-text mb-4 tracking-tight">
                RODERICK L. RENWICK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-light">
                Computer Vision & Machine Learning Engineer - Live Portfolio Gallery
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                {[
                  { label: 'GitHub', href: 'https://github.com/RLR-GitHub' },
                  { label: 'Portfolio', href: 'https://rlr.dev' },
                  { label: 'Email', href: 'mailto:rrenwick@purdue.edu' },
                  { label: 'Website', href: 'https://www.rodericklrenwick.com' }
                ].map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Category Filter Controls */}
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-3 p-2 glass-card rounded-2xl border-border/50">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  relative transition-all duration-300 rounded-xl px-6 py-2
                  ${activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card glass-hover border-border/50 overflow-hidden group cursor-pointer animate-fade-in-scale"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project Preview with iframe */}
              <div className="relative">
                <ProjectPreview project={project} />
                
                {/* Category Badge */}
                <Badge 
                  className={`absolute top-3 right-3 ${categoryBadgeStyles[project.category as keyof typeof categoryBadgeStyles]} text-white border-0 font-semibold text-xs uppercase tracking-wider z-10`}
                >
                  {project.category}
                </Badge>

                {/* Live Preview Indicator */}
                {project.hasInteractivePreview && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-green-500/80 text-white border-0 text-xs flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      Live
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="text-xs bg-primary/10 border-primary/20 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Link */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-primary-foreground hover:bg-primary p-2 h-auto"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Card key={category.id} className="glass-card glass-hover border-border/50 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {category.count}
                </div>
                <div className="text-sm text-muted-foreground">
                  {category.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;