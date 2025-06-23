import { Metadata } from "next";
import { ServiciosView } from "./components/ServiciosView";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <ServiciosView />
    </>
  );
}
