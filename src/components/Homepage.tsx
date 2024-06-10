import Image from "next/image";
import React from "react";
import hero from "../../public/hero.png";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="container space-y-8 mt-10 py-4">
      <div className="flex flex-col font-bold font-mono justify-center text-center items-center text-4xl">
        <span>Universo Anthares</span>
        <span>No Homeroverso</span>
      </div>
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="flex flex-col text-justify gap-8 text-lg">
          <p>
            Bem-vindo ao nosso site! Nosso objetivo é mapear os personagens mais
            importantes da literatura grega, trazendo para você uma imersão
            completa nas histórias e mitos que moldaram a cultura ocidental.
            Aqui, você encontrará informações detalhadas sobre heróis, deuses, e
            figuras lendárias que habitam as páginas da mitologia e dos
            clássicos gregos.
          </p>
          <p>
            Estamos comprometidos em auxiliar o grupo Universo Anthares em sua
            missão de promover o conhecimento e a apreciação da literatura
            antiga. Juntos, vamos explorar as nuances dessas narrativas
            atemporais, entender suas influências e celebrar o legado que
            deixaram para o mundo moderno.
          </p>
          <p>
            Explore. Aprenda. Conecte-se. Navegue pelo nosso site e mergulhe no
            fascinante universo dos personagens da literatura grega.
          </p>
          <div className="mt-6">
            <p className="font-bold">
              Conheça o nosso canal no youtube e também venha fazer parte do
              nosso grupo no telegram!
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Button asChild>
                <Link
                  href={"https://www.youtube.com/@UniversoAnthares"}
                  target="_blank"
                >
                  Youtube
                </Link>
              </Button>
              <Button asChild>
                <Link href={"https://t.me/universoanthares00"} target="_blank">
                  Telegram
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={hero}
            alt="Imagem mitologia grega"
            width={600}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
