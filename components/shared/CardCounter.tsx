"use client";

import CountUp from "react-countup";

import { parseCounterValue } from "@/utils/GlobalFunctions";

import { CardCounterProp } from "@/types";

export function CardCounter({
  description,
  finalNumber,
  title,
}: CardCounterProp) {
  const { numericValue, symbol } = parseCounterValue(finalNumber);
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg transition-transform hover:scale-110">
      <div className="text-4xl md:text-5xl font-bold text-redCustom mb-2">
        {typeof finalNumber === "number" ? (
          <>
            +
            <CountUp
              start={0}
              end={numericValue}
              duration={3.5}
              enableScrollSpy
            />
          </>
        ) : (
          <CountUp
            start={0}
            end={numericValue}
            duration={3.5}
            suffix={symbol ? `${symbol}` : ""}
            enableScrollSpy
          />
        )}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
