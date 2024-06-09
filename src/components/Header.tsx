import Image from "next/image";
import Logo from "../../public/logo.png";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background py-4">
      <div className="container flex justify-between items-center">
        <Image src={Logo} alt="logo" width={75} height={75} />
        <div className="flex flex-col font-bold font-mono justify-center items-center text-2xl">
          <span>Universo Anthares</span>
          <span>No Homeroverso</span>
        </div>
        <Button>Grupo do Telegram</Button>
      </div>
    </header>
  );
}
