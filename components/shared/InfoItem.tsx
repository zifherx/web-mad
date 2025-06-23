import { InfoItemProp } from "@/types";

export function InfoItem({ icon: Icon, text, value }: InfoItemProp) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-orangeCustom mt-1" />
      <div>
        <h3 className="font-medium">{text}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
