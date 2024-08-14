"use client";

import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useEffect } from "react";

interface CombatantProps {
  type: string;
}

export default function Combatant({ type }: CombatantProps) {
  console.log(type);

  function handleAttack() {
    console.log(` ${type} is Attacking`);
  }
  function handleDefend() {
    console.log(` ${type} is defending`);
  }
  function handleHeal() {
    console.log(` ${type} is healing`);
  }
  return (
    <div className="flex flex-col items-center justify-center w-1/2 space-y-6 h-full p-4 bg-gray-200">
      <p>{type}</p>
      <Progress value={100} />
      {type == "player" ? (
        <div className="flex flex-row justify-evenly w-full">
          <Button onClick={handleAttack}>Attack</Button>
          <Button variant={"ghost"} onClick={handleDefend}>
            Defend
          </Button>
          <Button variant={"secondary"} onClick={handleHeal}>
            Heal
          </Button>
        </div>
      ) : null}
    </div>
  );
}
