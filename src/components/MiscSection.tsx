import { Music, Plane, PenTool, Camera, TreePine, Rocket, BookOpen, Globe } from 'lucide-react';

const MiscSection = () => {
  const hobbies = [
    { icon: Music, label: 'Music' },
    { icon: Plane, label: 'Travel' },
    { icon: PenTool, label: 'Writing' },
    { icon: Camera, label: 'Photography' },
    { icon: TreePine, label: 'Exploring Nature' },
  ];

  const bucketList = [
    { icon: Rocket, text: 'Build a humanoid robot from scratch' },
    { icon: BookOpen, text: 'Publish a novel' },
    { icon: Globe, text: 'Travel around the World' },
  ];

  return (
    <section id="misc" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="accent-line mb-4" />
            <h2 className="section-heading">Miscellaneous</h2>
          </div>

          {/* Hobbies */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Hobbies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {hobbies.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="card-elevated text-center group hover:bg-secondary/5 transition-colors cursor-default"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-3 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                  <p className="font-body text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bucket List */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              My Bucket List
            </h3>
            <div className="space-y-4">
              {bucketList.map(({ icon: Icon, text }, index) => (
                <div
                  key={text}
                  className="card-elevated flex items-center gap-4 hover:border-secondary/50 border border-transparent transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-secondary">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-secondary" />
                    <p className="font-body text-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiscSection;
