import { CatalogoServiciosData } from "@/data";
import { ServiceSlugView } from "./components/ServiceSlugView";

export async function generateStaticParams() {
  return CatalogoServiciosData.map((item) => {
    return { serviceSlug: item.slug };
  });
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const resolvedParams = await params;
  const { serviceSlug } = resolvedParams;

  return (
    <>
      <ServiceSlugView serviceSlug={serviceSlug} />
    </>
  );
}
