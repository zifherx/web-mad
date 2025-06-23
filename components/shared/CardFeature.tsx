import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FeatureProp } from "@/types";

export function CardFeature({ feature }: FeatureProp) {
  const { description, title } = feature;

  return (
    <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <CardHeader>
        <CardTitle className="text-xl text-redCustom">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
