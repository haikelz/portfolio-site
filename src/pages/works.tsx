import Layout from "@/components/layout";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { worksList } from "@/lib/utils/data";
import { Link } from "react-router-dom";

export default function Works() {
  useTitle("Works - Haikel");

  return (
    <Layout>
      <Heading as="h1">Works</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 mt-6 gap-4">
        {worksList.map((item) => (
          <div
            key={item.id}
            className="drop-shadow-md bg-white dark:bg-neutral-900"
          >
            <LightboxImage
              src={item.thumbnail}
              alt={item.name}
              loading="lazy"
              className="h-[170px] w-full"
            />
            <Link to={item.github} rel="noopener noreferrer" target="_blank">
              <div className="px-4 pt-2 pb-4">
                <Heading as="h3">{item.name}</Heading>
                <Paragraph className="mt-2 text-sm">
                  {item.description}
                </Paragraph>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
