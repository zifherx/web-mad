import { ContactForm } from "./ContactForm";
import { InfoBlock } from "./InfoBlock";

export function ContactFormSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ContactForm />
          <InfoBlock />
        </div>
      </div>
    </section>
  );
}
