import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="animate-fade-up font-body text-secondary font-medium tracking-widest uppercase text-sm mb-6">
            Researcher & Engineer
          </p>
          <h1 className="animate-fade-up animation-delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6">
            Mukilan
          </h1>
          <p className="animate-fade-up animation-delay-200 font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Master's graduate specializing in Multi-Robot Visibility-Based Pursuit–Evasion.
            Passionate about robotics, AI, and intelligent systems.
          </p>
          <div className="animate-fade-up animation-delay-300 flex items-center justify-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-body font-medium hover:bg-secondary/90 transition-colors"
            >
              Learn More
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-full font-body font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              View Research
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;
