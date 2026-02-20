import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary mb-2">Merkado Iloilo</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Showcasing the newly redeveloped public markets of Iloilo City — commercial hubs and cultural landmarks for generations to come.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Markets</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/terminal-market" className="text-muted-foreground hover:text-primary transition-colors">Terminal Market (Super)</Link></li>
            <li><Link to="/central-market" className="text-muted-foreground hover:text-primary transition-colors">Central Market (Tienda Mayor)</Link></li>
            <li><Link to="/jaro-big-market" className="text-muted-foreground hover:text-primary transition-colors">Jaro Big Market</Link></li>
            <li><Link to="/la-paz-public-market" className="text-muted-foreground hover:text-primary transition-colors">La Paz Public Market</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-foreground">About</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A project highlighting the modernization, vendor diversity, and historical significance of Iloilo City's public markets.
          </p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © 2025 Merkado Iloilo. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
