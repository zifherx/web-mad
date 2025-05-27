import { CardCounter } from "@/components/shared/CardCounter";
import { Title } from "@/components/shared/Title";

import { CounterItemsData } from "@/data";

export function CounterSection() {
  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Nuestros Resultados Hablan"
          description="Más de una década transformando negocios con estrategias de impacto y resultados medibles"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CounterItemsData.map(({ description, finalNumber, id, title }) => (
            <CardCounter
              key={id}
              id={id}
              title={title}
              description={description}
              finalNumber={finalNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
