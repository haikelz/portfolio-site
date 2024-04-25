import Layout from "@/components/layout";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { photosList } from "@/lib/utils/data";

export default function Photos() {
  useTitle("Photos - Haikel");

  return (
    <Layout>
      <Heading as="h1">Photos</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 mt-6 gap-4">
        {photosList.map((item) => (
          <LightboxImage
            key={item.id}
            src={`/images/photos/${item.id}.png`}
            alt={item.name}
            className="drop-shadow-md cursor-pointer"
          />
        ))}
      </div>
    </Layout>
  );
}
