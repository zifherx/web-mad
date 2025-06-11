import { Metadata } from "next";
import { ContactoView } from "./components/ContactoView";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <ContactoView />
    </>
  );
}
