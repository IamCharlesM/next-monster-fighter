import Combatant from "@/components/combatant/combatant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-128px)] flex-row items-center justify-between p-24">
      <Combatant type="player" />
      <Combatant type="monster" />
    </main>
  );
}
