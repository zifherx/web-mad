import { TitleProp } from "@/types";

export function Title({ description, text }: TitleProp) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
        {text}
      </h2>
      <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
