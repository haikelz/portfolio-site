import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { photosList, worksList } from "@/lib/utils/data";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useTitle("Haikel");

  return (
    <Layout>
      <div className="space-y-6 pattern">
        <div className="flex justify-center items-center space-x-3 w-fit">
          <LightboxImage
            src="https://avatars.githubusercontent.com/u/77146709?v=4"
            alt="Github Profile Picture"
            className="rounded-full w-11 cursor-pointer h-11"
          />
          <Heading as="h1">こんにちは !</Heading>
        </div>
        <Paragraph>
          I am a <b>Software Engineer(Frontend)</b> with 2+ years of experience
          crafting responsive, interactive, maintainable, and accessible
          Websites. Interested in Frontend world, User Interfaces/Experiences,
          and DevOps/Infrastructure. I am a detail-oriented person, and quickly
          adapt to new environments.
          <br />
          <b>
            <i>Keep it simple</i>
          </b>
          , is one of my principles while crafting something.
        </Paragraph>
        <Paragraph>
          Apart from coding, I do <b>Photography</b> with my camera. Mostly I
          took street photos, nature, historic place, and cosplayer at an event.
          I love this hobby because it gives me many perspective about life, and
          of course, It's fun.
        </Paragraph>
        <Paragraph>
          Most of my side projects are open source. Some of them even used by
          many people.
        </Paragraph>
      </div>
      <div className="my-6 space-y-6">
        <Heading as="h1">Skills</Heading>
        <div className="space-y-1">
          <Paragraph>
            <b>Programming Languages: </b>Javascript, Typescript.
          </Paragraph>
          <Paragraph>
            <b>Frontend:</b> React JS, Next JS, Vue JS, Nuxt JS, SCSS, Tailwind
            CSS, Uno CSS.
          </Paragraph>
          <Paragraph>
            <b>Backend:</b> Express JS, Nest JS, Hono JS.
          </Paragraph>
          <Paragraph>
            <b>Tools:</b> Visual Studio Code, Figma, Postman, Neovim, Linux.
          </Paragraph>
          <Paragraph>
            <b>Others:</b> Docker, Github Actions, GraphQL, tRPC, Firebase,
            Supabase, Prisma, Drizzle.
          </Paragraph>
        </div>
      </div>
      <div className="mb-6">
        <div className="space-y-6">
          <Heading as="h1">Featured Works</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 mt-6 gap-4">
            {worksList.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="drop-shadow-md bg-white dark:bg-neutral-900"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  loading="lazy"
                  className="h-[170px] w-full"
                />
                <Link
                  to={item.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
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
          <Button
            type="button"
            aria-label="see other works"
            onClick={() => navigate("/works")}
            className="font-bold"
          >
            See other works
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <div className="space-y-6">
          <Heading as="h1">Featured Photos</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 mt-6 gap-4">
            {photosList.slice(0, 4).map((item) => (
              <LightboxImage
                key={item.id}
                src={`/images/photos/${item.id}.png`}
                alt={item.name}
                className="drop-shadow-md cursor-pointer"
              />
            ))}
          </div>
          <Button
            type="button"
            aria-label="see other photos"
            onClick={() => navigate("/photos")}
            className="font-bold"
          >
            See other photos
          </Button>
        </div>
      </div>
    </Layout>
  );
}
