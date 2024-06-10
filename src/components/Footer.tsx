import { Github, Linkedin, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="container flex flex-col gap-4 items-center lg:flex lg:flex-row lg:justify-between py-4">
      <div className="flex flex-col gap-2">
        <span>Desenvlvido por: Matheus Lima</span>
        <span>Contato: matheus.lima@ccc.ufcg.edu.br</span>
      </div>
      <div className="flex gap-2">
        <Button asChild>
          <Link href={"https://github.com/MatheusVBLima"} target="_blank">
            <Github />
          </Link>
        </Button>
        <Button asChild>
          <Link
            href={"https://www.linkedin.com/in/matheusvblima/"}
            target="_blank"
          >
            <Linkedin />
          </Link>
        </Button>
      </div>
    </div>
  );
}
