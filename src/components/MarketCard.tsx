import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MarketCardProps {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
}

const MarketCard = ({ name, subtitle, description, image, slug }: MarketCardProps) => (
  <Link
    to={`/${slug}`}
    className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="relative h-52 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {name}
      </h3>
      {subtitle && (
        <span className="text-sm text-primary font-medium">{subtitle}</span>
      )}
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
        Explore <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

export default MarketCard;
