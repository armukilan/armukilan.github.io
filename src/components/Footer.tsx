const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Let's Connect
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8">
            Feel free to reach out for collaborations, research discussions, or just a friendly chat.
          </p>
          
          {/* Placeholder for future social links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/60 hover:border-secondary hover:text-secondary transition-colors cursor-pointer">
              <span className="text-xs font-body">Li</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/60 hover:border-secondary hover:text-secondary transition-colors cursor-pointer">
              <span className="text-xs font-body">Gh</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/60 hover:border-secondary hover:text-secondary transition-colors cursor-pointer">
              <span className="text-xs font-body">@</span>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10">
            <p className="font-body text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Mukilan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
