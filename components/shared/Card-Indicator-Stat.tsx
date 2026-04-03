"use client";

import { Minus, TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { CARD_INDICATOR_STAT_PROP, TYPE_VALUE_STAT_MAPPER } from "@/types";
import { formatValueStat } from "@/utils/GlobalFunctions";

import { COLOR_VARIANTS_DATA } from "@/data";

export function CardIndicatorStat({ item }: CARD_INDICATOR_STAT_PROP) {
  const {
    badge,
    footerDescription,
    footerTitle,
    iconBadge: Icon,
    titleDescription,
    titleValue,
    typeValue,
    trend = "NEUTRAL",
    trendPercentage,
    variant = "DEFAULT",
    accentColor = "red",
    animated = true,
  } = item;

  const colores = COLOR_VARIANTS_DATA[accentColor];
  const TrendIcon =
    trend === "UP" ? TrendingUp : trend === "DOWN" ? TrendingDown : Minus;
  const trendColor =
    trend === "UP"
      ? "text-green-600"
      : trend === "DOWN"
      ? "text-red-600"
      : "trext-gray-500";

  const renderByVariant = () => {
    switch (variant) {
      case "GRADIENT":
        return (
          <Card
            className={`relative overflow-hidden border-0 shadow-lg ${
              animated
                ? "transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                : ""
            }`}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${colores.gradient} opacity-5`}
            />

            <CardHeader className="relative pb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardDescription className="text-sm font-medium text-muted-foreground mb-2">
                    {titleDescription}
                  </CardDescription>
                  <CardTitle
                    className={`text-4xl font-bold tabular-nums ${
                      colores.text
                    } ${animated ? "animate-in fade-in duration-500" : ""}`}
                  >
                    {formatValueStat(
                      TYPE_VALUE_STAT_MAPPER[typeValue],
                      titleValue
                    )}
                  </CardTitle>
                </div>

                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl ${
                    colores.iconBg
                  } flex items-center justify-center ${
                    animated
                      ? "transition-transform hover:scale-110 hover:rotate-6"
                      : ""
                  }`}
                >
                  <Icon className={`w-7 h-7 ${colores.text}`} />
                </div>
              </div>

              {/* Badge with trend */}
              <div className="flex items-center gap-2 mt-4">
                <Badge
                  variant="outline"
                  className={`${colores.badgeBg} ${colores.text} ${colores.border} font-semibold`}
                >
                  {badge}
                </Badge>
                {trendPercentage && (
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}
                  >
                    <TrendIcon className="w-4 h-4" />
                    <span>{Math.abs(trendPercentage)}%</span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardFooter className="relative pt-4 border-t">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    {footerTitle}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {footerDescription}
                </p>
              </div>
            </CardFooter>
          </Card>
        );
      case "MINIMAL":
        return (
          <Card
            className={`border ${colores.border} ${
              animated ? "transition-all duration-300 hover:shadow-md" : ""
            }`}
          >
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className={`${colores.badgeBg} ${colores.text} text-xs`}
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {badge}
                </Badge>
                {trendPercentage && (
                  <div
                    className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}
                  >
                    <TrendIcon className="w-3 h-3" />
                    {Math.abs(trendPercentage)}%
                  </div>
                )}
              </div>

              <div>
                <CardDescription className="text-xs mb-2">
                  {titleDescription}
                </CardDescription>
                <CardTitle
                  className={`text-3xl font-bold tabular-nums ${colores.text}`}
                >
                  {formatValueStat(
                    TYPE_VALUE_STAT_MAPPER[typeValue],
                    titleValue
                  )}
                </CardTitle>
              </div>
            </CardHeader>

            <CardFooter className="pt-0">
              <div className="w-full">
                <p className="text-xs font-medium text-foreground mb-0.5">
                  {footerTitle}
                </p>
                <p className="text-xs text-muted-foreground">
                  {footerDescription}
                </p>
              </div>
            </CardFooter>
          </Card>
        );
      case "VIBRANT":
        return (
          <Card
            className={`relative overflow-hidden ${colores.bg} border-2 ${
              colores.border
            } ${
              animated
                ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                : ""
            }`}
          >
            {/* Animated background effect */}
            {animated && (
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${colores.gradient} opacity-20 blur-3xl`}
              />
            )}

            <CardHeader className="relative pb-3">
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`p-3 rounded-2xl bg-white shadow-sm ${
                    animated ? "transition-transform hover:scale-110" : ""
                  }`}
                >
                  <Icon className={`w-6 h-6 ${colores.text}`} />
                </div>
                {trendPercentage && (
                  <Badge className={`${trendColor} bg-white shadow-sm`}>
                    <TrendIcon className="w-3 h-3 mr-1" />
                    {Math.abs(trendPercentage)}%
                  </Badge>
                )}
              </div>

              <CardDescription className="text-sm font-medium mb-2">
                {titleDescription}
              </CardDescription>
              <CardTitle
                className={`text-4xl font-extrabold tabular-nums ${colores.text}`}
              >
                {formatValueStat(TYPE_VALUE_STAT_MAPPER[typeValue], titleValue)}
              </CardTitle>

              <Badge variant="secondary" className="w-fit mt-3">
                {badge}
              </Badge>
            </CardHeader>

            <CardFooter className="relative pt-3 border-t bg-white/50">
              <div className="w-full">
                <p className="text-sm font-semibold text-foreground mb-1">
                  {footerTitle}
                </p>
                <p className="text-xs text-muted-foreground">
                  {footerDescription}
                </p>
              </div>
            </CardFooter>
          </Card>
        );
      case "DEFAULT":
        return (
          <Card
            className={`${
              animated ? "transition-all duration-300 hover:shadow-lg" : ""
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardDescription className="text-sm font-medium">
                  {titleDescription}
                </CardDescription>
                <div
                  className={`p-2 rounded-lg ${colores.iconBg} ${
                    animated
                      ? "transition-transform hover:scale-110 hover:rotate-12"
                      : ""
                  }`}
                >
                  <Icon className={`w-5 h-5 ${colores.text}`} />
                </div>
              </div>

              <CardTitle
                className={`text-3xl font-bold tabular-nums mt-2 ${colores.text} @[250px]/card:text-4xl`}
              >
                {formatValueStat(TYPE_VALUE_STAT_MAPPER[typeValue], titleValue)}
              </CardTitle>

              <div className="flex items-center gap-2 mt-3">
                <Badge
                  variant="outline"
                  className={`${colores.badgeBg} ${colores.text} ${colores.border}`}
                >
                  {badge}
                </Badge>
                {trendPercentage && (
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}
                  >
                    <TrendIcon className="w-4 h-4" />
                    <span>{Math.abs(trendPercentage)}%</span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardFooter className="flex-col items-start gap-1.5 text-sm pt-3 border-t">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                {footerTitle}
              </div>
              <div className="text-muted-foreground text-xs line-clamp-2">
                {footerDescription}
              </div>
            </CardFooter>
          </Card>
        );
    }
  };

  return renderByVariant();
  // (
  // <Card>
  //   <CardHeader>
  //     <CardDescription>{titleDescription}</CardDescription>
  //     <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
  //       {formatValueStat(TYPE_VALUE_STAT_MAPPER[typeValue], titleValue)}
  //     </CardTitle>
  //     <CardAction>
  //       <Badge variant="outline">
  //         <Icon />
  //         {badge}
  //       </Badge>
  //     </CardAction>
  //   </CardHeader>
  //   <CardFooter className="flex-col items-start gap-1.5 text-sm">
  //     <div className="line-clamp-1 flex gap-2 font-medium">{footerTitle}</div>
  //     <div className="text-muted-foreground">{footerDescription}</div>
  //   </CardFooter>
  // </Card>
  // );
}
