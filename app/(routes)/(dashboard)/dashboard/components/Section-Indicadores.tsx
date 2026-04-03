"use client";

import { CardIndicatorStat } from "@/components/shared/Card-Indicator-Stat";
import { IndicatorDashboardList } from "@/data";

export function SectionIndicadores() {
  return (
    <section className="bg-card grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-6">
      {IndicatorDashboardList.map((item, index) => (
        <div key={index}>
          <CardIndicatorStat item={item} />
        </div>
      ))}
    </section>
  );
}
