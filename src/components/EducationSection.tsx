import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: 'University of Dayton',
      location: 'Dayton, Ohio',
      description: 'Research focus on Multi-Robot Visibility-Based Pursuit–Evasion',
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      institution: 'SSN College of Engineering',
      location: 'Chennai, India',
      description: 'Foundation in computer science fundamentals and engineering principles',
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="accent-line mb-4" />
            <h2 className="section-heading">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="relative pl-8 pb-8 last:pb-0 border-l-2 border-border last:border-transparent"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-secondary-foreground" />
                </div>

                <div className="card-elevated ml-4">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="font-body text-secondary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {edu.location}
                  </p>
                  <p className="font-body text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
