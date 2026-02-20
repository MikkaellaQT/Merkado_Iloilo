import { Vendor } from "@/data/markets";

interface VendorTableProps {
  vendors: Vendor[];
}

const VendorTable = ({ vendors }: VendorTableProps) => (
  <div className="overflow-x-auto rounded-lg border border-border">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-muted">
          <th className="text-left px-4 py-3 font-semibold text-foreground">Vendor</th>
          <th className="text-left px-4 py-3 font-semibold text-foreground">Category</th>
          <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Description</th>
        </tr>
      </thead>
      <tbody>
        {vendors.map((v) => (
          <tr key={v.id} className="border-t border-border hover:bg-muted/50 transition-colors">
            <td className="px-4 py-3 font-medium text-foreground">{v.name}</td>
            <td className="px-4 py-3">
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {v.category}
              </span>
            </td>
            <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{v.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default VendorTable;
