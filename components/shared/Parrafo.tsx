import { cn } from "@/lib/utils";
import { ParrafoProp } from "@/types";

export function Parrafo({ text, align }: ParrafoProp) {
  return (
    <p
      className={cn(
        "text-muted-foreground md:text-lg leading-tight",
        align === "justify" && "text-justify",
        align === "left" && "text-left",
        align === "right" && "text-right",
        align === "center" && "text-center"
      )}
    >
      {text}
    </p>
  );
}
