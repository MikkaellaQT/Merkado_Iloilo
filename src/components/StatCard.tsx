interface StatCardProps {
  label: string;
  value: string;
}

const StatCard = ({ label, value }: StatCardProps) => (
  <div className="text-center p-6 rounded-lg bg-card border border-border">
    <div className="font-display text-3xl font-bold text-primary">{value}</div>
    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
  </div>
);

export default StatCard;
