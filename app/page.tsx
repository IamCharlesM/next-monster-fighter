"use client";
import Combatant from "@/components/combatant/combatant";
import { log } from "console";
import { useState } from "react";

export default function Home() {
  const [userHealth, setUserHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);

  function handleAttack() {
    setMonsterHealth(monsterHealth - 10);
    setUserHealth(userHealth - 10);
  }

  function handleDefend() {
    setUserHealth(userHealth - 5);
  }

  function handleHeal() {
    if (userHealth <= 90) {
      setUserHealth(userHealth + 10);
    } else if (userHealth + 10 > 100 && userHealth != 100) {
      const healAmount = 100 - userHealth;
      console.log(healAmount);
      setUserHealth(userHealth + healAmount);
    } else {
      console.log("Health is full");
    }
  }

  return (
    <main className="flex h-[calc(100vh-128px)] flex-row items-center justify-between p-24">
      <Combatant
        type="player"
        attack={handleAttack}
        defend={handleDefend}
        heal={handleHeal}
        health={userHealth}
      />
      <Combatant
        type="monster"
        attack={handleAttack}
        defend={handleDefend}
        heal={handleHeal}
        health={monsterHealth}
      />
    </main>
  );
}
