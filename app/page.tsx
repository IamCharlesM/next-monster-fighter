"use client";
import Combatant from "@/components/combatant/combatant";
import CombatLog from "@/components/logs/combatLog";
import { useState } from "react";

export default function Home() {
  const [userHealth, setUserHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const combatLog = [];

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
    combatLog.push({
      name: "Player",
      action: "Attack",
      damage: determineDamage(),
    });
    setUserHealth(userHealth - determineDamage());
    combatLog.push({
      name: "Monster",
      action: "Attack",
      damage: determineDamage(),
    });

    console.log(combatLog);
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
      combatLog.push({
        name: "Player",
        action: "Heal",
        heal: healAmount,
      });
    } else if (userHealth + healAmount > 100 && userHealth != 100) {
      healToMax = 100 - userHealth;
      setUserHealth(userHealth + healToMax);
      combatLog.push({
        name: "Player",
        action: "Heal",
        heal: healToMax,
      });
    } else {
      alert("Health is full");
    }
  }

  return (
    <main className="flex h-[calc(100vh-128px)] flex-col  p-24 max-w-7xl space-y-6 mx-auto">
      <div className="flex flex-row items-center justify-between h-fit w-full space-x-8">
        <Combatant
          type="player"
          attack={handleAttack}
          defend={handleDefend}
          heal={handleHeal}
          health={userHealth}
        />
        <Combatant type="monster" health={monsterHealth} />
      </div>
      <div className="flex h-3/4 w-full overflow-clip">
        <CombatLog combatLog={combatLog} />
      </div>
    </main>
  );
}
