import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CardProtectionProp } from "@/types";

export function CardProtectionNotice({ contenido }: CardProtectionProp) {
  const { content, title } = contenido;

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-gray-700">
        {content.map(({ id, parrafo }) => (
          <p key={id}>{parrafo}</p>
        ))}
      </CardContent>
    </Card>
  );
}
