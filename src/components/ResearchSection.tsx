import { FileText, Bot, Target } from 'lucide-react';

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="accent-line mb-4" />
            <h2 className="section-heading">Research</h2>
          </div>

          {/* Main Research */}
          <div className="card-elevated mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-xl">
                <Bot className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                  Multi-Robot Visibility-Based Pursuit Evasion with Probabilistic Evader Models
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Master's Thesis Research
                </p>
              </div>
            </div>
            
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                My research explores Multi-Robot coordination and Pursuit–Evasion problems in complex environments. 
                I developed an algorithm that enables a team of robots to efficiently locate and capture multiple 
                moving targets in a 2D space.
              </p>
              <p>
                The method uses probabilistic modeling to predict target movements and generate coordinated strategies 
                that balance exploitation, exploration and efficiency. This work contributes to improving how autonomous 
                robots plan, collaborate, and adapt in various environments.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { icon: Target, label: 'Multi-target Tracking' },
                { icon: Bot, label: 'Coordinated Strategies' },
                { icon: FileText, label: 'Probabilistic Modeling' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg"
                >
                  <Icon className="w-5 h-5 text-secondary" />
                  <span className="font-body text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Publications
            </h3>
            <div className="card-elevated border-l-4 border-secondary">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-secondary" />
                <p className="font-body text-muted-foreground italic">
                  In progress – to be published soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
