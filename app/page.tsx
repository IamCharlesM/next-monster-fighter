"use client";
import Combatant from "@/components/combatant/combatant";
import { useState } from "react";

export default function Home() {
  const [userHealth, setUserHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);

  function determineDamage() {
    const damage = Math.floor(Math.random() * 10) + 1;
    console.log(`this is the damage amount: ${damage}`);
    return damage;
  }

  function determineHeal() {
    const heal = Math.floor(Math.random() * 20) + 1;
    console.log(`this is the heal amount: ${heal}`);

    return heal;
  }

  function handleAttack() {
    setMonsterHealth(monsterHealth - determineDamage());
    setUserHealth(userHealth - determineDamage());
  }

  function handleDefend() {
    setUserHealth(userHealth - 5);
  }

  async function handleHeal() {
    const healAmount = determineHeal();
    let updatedHealth;
    let healToMax;
    if (userHealth <= 90) {
      console.log(`this is the user health: ${userHealth}`);
      updatedHealth = userHealth + determineHeal() - determineDamage();
      setUserHealth(updatedHealth);
    } else if (userHealth + healAmount > 100 && userHealth != 100) {
      healToMax = 100 - userHealth;
      setUserHealth(userHealth + healToMax);
    } else {
      alert("Health is full");
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
      <Combatant type="monster" health={monsterHealth} />
    </main>
  );
}
