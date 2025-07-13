import ModeToggle from "@/components/ModeToggle";
import prisma from "@/lib/db";

export default async function Home() {
  return (
    <div>
      hello
      <ModeToggle />
    </div>
  );
}
