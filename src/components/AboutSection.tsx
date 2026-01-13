const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="accent-line mb-4" />
            <h2 className="section-heading">About Me</h2>
          </div>
          
          <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm <span className="text-foreground font-medium">Mukilan</span>, a Master's graduate from the{' '}
              <span className="text-foreground font-medium">University of Dayton</span>, where I conducted research in 
              Multi-Robot Visibility-Based Pursuit–Evasion. I received my Bachelor's degree in Computer Science and 
              Engineering from <span className="text-foreground font-medium">SSN College of Engineering, Chennai</span>.
            </p>
            
            <p>
              I am broadly interested in robotics, with previous work focusing on path planning, multi-robot systems, 
              and related areas in robotic perception and control. I am always excited to explore new and challenging 
              problems in robotics and intelligent systems.
            </p>
            
            <p>
              I have been fortunate to work with an amazing set of researchers and mentors. I am very grateful to have 
              been advised by <span className="text-foreground font-medium">Dr. Nick Stiffler</span> and to have had 
              the opportunity to collaborate with many great people during my research journey.
            </p>
          </div>

          {/* Research Interests */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Multi-robot Systems',
                'Pursuit-Evasion',
                'Motion Planning',
                'Visibility-Based Algorithms',
                'AI for Robotic Decision-making',
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-muted text-foreground font-body text-sm font-medium rounded-full border border-border hover:border-secondary hover:bg-secondary/10 transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
