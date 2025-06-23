import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LegalProp } from "@/types";

export function CardLegal({ contenido }: LegalProp) {
  const { title, content, icon: Icon } = contenido;
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-xl">
          <div className="w-10 h-10 bg-redCustom/10 rounded-lg flex items-center justify-center mr-4">
            <Icon className="w-5 h-5 text-redCustom" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {content.map(({ id, parrafo }) => (
            <li key={id} className="flex items-start">
              <div className="w-2 h-2 bg-redCustom rounded-full mr-3 mt-2 shrink-0" />
              <span className="text-gray-700 leading-relaxed">{parrafo}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
