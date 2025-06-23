import { Metadata } from "next";
import { TerminosCondicionesView } from "./components/TerminosCondicionesView";

export const metadata: Metadata = {
  title: {
    default: "Términos y Condiciones",
    template: "",
  },
};

export default function TerminosCondicionesPage() {
  return (
    <>
      <TerminosCondicionesView />
    </>
  );
}
