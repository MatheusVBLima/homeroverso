import Link from "next/link";
import characters from "@/data/characters.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CharacterPage({
  params,
}: {
  params: { slug: string };
}) {
  const decodedSlug = decodeURIComponent(params.slug);
  const encodedSlug = params.slug;

  const character = characters.find(
    (character) => character.nome === decodedSlug
  );
  const historiaEntries = Object.entries(character?.história || {});

  return (
    <div className="container mt-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/character/${encodedSlug}`}>
              {decodedSlug}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col mt-8">
        <h1 className="text-center text-4xl font-bold">{decodedSlug}</h1>
        <ul className="space-y-4 mt-4 text-justify">
          {historiaEntries.map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {String(value)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
