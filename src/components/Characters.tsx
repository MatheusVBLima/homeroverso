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

export function Characters() {
  return (
    <div className=" container mt-6 py-4 space-y-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold">Lista de personagens</h1>
        <p className="text-lg font-semibold">
          Clique em cada card para obter mais detalhes sobre o personagem
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <Link
            href={`/personagem/${encodeURIComponent(character.nome)}`}
            key={character.id}
          >
            <Card className="min-h-[350px] flex flex-col">
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
    </div>
  );
}
