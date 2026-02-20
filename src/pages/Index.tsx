import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import { markets, searchVendors } from "@/data/markets";
import HeroBanner from "@/components/HeroBanner";
import MarketCard from "@/components/MarketCard";
import VendorTable from "@/components/VendorTable";
import heroImage from "@/assets/hero-market.jpg";
import terminalImg from "@/assets/terminal-market.jpg";
import centralImg from "@/assets/central-market.jpg";
import jaroImg from "@/assets/jaro-market.jpg";
import lapazImg from "@/assets/lapaz-market.jpg";

const marketImages: Record<string, string> = {
  terminal: terminalImg,
  central: centralImg,
  jaro: jaroImg,
  lapaz: lapazImg,
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = searchQuery.length > 1 ? searchVendors(searchQuery) : [];

  return (
    <div>
      <HeroBanner
        image={heroImage}
        title="Merkado Iloilo"
        subtitle="Redeveloped. Revitalized. Reimagined."
        description="Discover Iloilo City's newly modernized public markets — vibrant commercial hubs and enduring cultural landmarks."
      />

      {/* Search Section */}
      <section className="py-12 section-pattern">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search vendors, stalls, or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            {searchResults.length > 0 && (
              <div className="mt-4">
                <VendorTable vendors={searchResults} />
              </div>
            )}
            {searchQuery.length > 1 && searchResults.length === 0 && (
              <p className="mt-4 text-center text-muted-foreground text-sm">No vendors found for "{searchQuery}"</p>
            )}
          </div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
            Our Public Markets
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Explore the four redeveloped markets that form the backbone of Iloilo City's commercial and cultural life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((m) => (
              <MarketCard
                key={m.id}
                name={m.name}
                subtitle={m.subtitle}
                description={m.description}
                image={marketImages[m.id]}
                slug={m.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            A New Era for Iloilo's Markets
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Iloilo City has invested in the comprehensive redevelopment of its public markets, transforming them into modern, safe, and accessible facilities. These markets are more than places of commerce — they are living cultural landmarks that reflect the warmth, resilience, and creativity of the Ilonggo people. From the legendary La Paz Batchoy to handwoven textiles, each market tells a unique story.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
