import Link from "next/link";
import characters from "../data/characters.json";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Main() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mt-6">
      {characters.map((character) => (
        <Link href={`/character/${encodeURIComponent(character.nome)}`}>
          <Card key={character.id} className="min-h-[350px] flex flex-col">
            <CardHeader>
              <CardTitle>{character.nome}</CardTitle>
              <CardDescription>{character.descrição}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 flex-1">
              <span className="">Aparições:</span>
              <div className="flex flex-col gap-2">
                {character.aparições.map((aparição, index) => (
                  <Badge key={index}>{aparição}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
