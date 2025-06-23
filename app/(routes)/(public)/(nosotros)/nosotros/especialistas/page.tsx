import { Metadata } from "next";
import { EspecialistasView } from "./components/EspecialistasView";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Especialistas",
  },
};

export default function EspecialistasPage() {
  return (
    <>
      <EspecialistasView />
    </>
  );
}
