import { Card, CardContent } from "../ui/card";
import { StartModalProp } from "@/types";

export function StatsPopUp({ title, value, icon: Icon }: StartModalProp) {
  return (
    <Card className="text-center border-gray-200">
      <CardContent className="p-2">
        <div className="flex items-center justify-center mb-2">
          <Icon className="w-5 h-5 text-redCustom" />
        </div>
        <div className="text-xl font-bold text-redCustom">{value}</div>
        <div className="text-xs text-gray-600">{title}</div>
      </CardContent>
    </Card>
  );
}
