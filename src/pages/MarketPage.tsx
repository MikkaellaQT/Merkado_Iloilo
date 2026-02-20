import { useParams, Navigate } from "react-router-dom";
import { getMarketBySlug } from "@/data/markets";
import HeroBanner from "@/components/HeroBanner";
import StatCard from "@/components/StatCard";
import VendorTable from "@/components/VendorTable";
import terminalImg from "@/assets/terminal-market.jpg";
import centralImg from "@/assets/central-market.jpg";
import jaroImg from "@/assets/jaro-market.jpg";
import lapazImg from "@/assets/lapaz-market.jpg";
import { CheckCircle } from "lucide-react";

const marketImages: Record<string, string> = {
  "terminal-market": terminalImg,
  "central-market": centralImg,
  "jaro-big-market": jaroImg,
  "la-paz-public-market": lapazImg,
};

const MarketPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const market = slug ? getMarketBySlug(slug) : undefined;

  if (!market) return <Navigate to="/" replace />;

  const image = marketImages[market.slug] || terminalImg;

  return (
    <div>
      <HeroBanner
        image={image}
        title={market.name}
        subtitle={market.subtitle || undefined}
        description={market.description}
      />

      {/* Stats */}
      <section className="py-12 section-pattern">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {market.stats.map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">History & Heritage</h2>
          <p className="text-muted-foreground leading-relaxed">{market.history}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Redevelopment Highlights</h2>
          <ul className="space-y-3">
            {market.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-0.5 text-secondary shrink-0" />
                <span className="text-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vendors */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Featured Vendors</h2>
          <VendorTable vendors={market.vendors} />
        </div>
      </section>
    </div>
  );
};

export default MarketPage;
