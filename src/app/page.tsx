import Header from "@/components/Header";
import Main from "@/components/Main";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Separator />
      <Main />
    </div>
  );
}
