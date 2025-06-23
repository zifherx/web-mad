import { Metadata } from "next";
import { PoliticaPrivacidadView } from "./components/PoliticaPrivacidadView";

export const metadata: Metadata = {
  title: {
    default: "Política de Privacidad",
    template: "",
  },
};

export default function PoliticasPrivacidadPage() {
  return (
    <>
      <PoliticaPrivacidadView />
    </>
  );
}
