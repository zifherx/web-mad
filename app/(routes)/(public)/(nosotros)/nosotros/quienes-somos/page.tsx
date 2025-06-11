import { Metadata } from "next";
import { NosotrosView } from "./components/NosotrosView";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Quiénes Somos",
  },
};

export default function QuienesSomosPage() {
  return (
    <>
      <NosotrosView />
    </>
  );
}
