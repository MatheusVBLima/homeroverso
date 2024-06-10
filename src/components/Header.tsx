import Image from "next/image";
import Logo from "../../public/logo.png";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background py-4">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" width={75} height={75} />
        </Link>

        <nav className="flex gap-2 items-center">
          <Button asChild>
            <Link href={"/"}>Home</Link>
          </Button>
          <Button asChild>
            <Link href={"personagens"}>Personagens</Link>
          </Button>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
