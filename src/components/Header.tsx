import Image from "next/image";
import Logo from "../../public/logo.png";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background py-4">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" width={75} height={75} />
        </Link>
        <nav className="hidden lg:flex gap-2 items-center ">
          <Button asChild>
            <Link href={"/"}>Home</Link>
          </Button>
          <Button asChild>
            <Link href={"personagens"}>Personagens</Link>
          </Button>
          <ThemeSwitcher />
        </nav>
        <nav className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={"/"}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"personagens"}>Personagens</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <ThemeSwitcher />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
