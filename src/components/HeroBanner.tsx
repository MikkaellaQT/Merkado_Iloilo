interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const HeroBanner = ({ image, title, subtitle, description }: HeroBannerProps) => (
  <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground animate-fade-in-up mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="font-display text-xl md:text-2xl text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-primary-foreground/70 text-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {description}
        </p>
      )}
    </div>
  </section>
);

export default HeroBanner;
