"use client";

import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface CombatantProps {
  type: string;
  attack?: () => void;
  defend?: () => void;
  heal?: () => void;
  health?: number;
}

export default function Combatant({
  type,
  attack,
  defend,
  heal,
  health,
}: CombatantProps) {
  const handleAttack = attack;
  const handleDefend = defend;
  const handleHeal = heal;

  return (
    <div className="flex flex-col items-center justify-center w-1/2 space-y-6 p-4 bg-gray-200 min-h-fit">
      <p>{type}</p>
      <div className="flex flex-col w-full">
        <Progress value={health} />
        <p>{health}/100 </p>
      </div>

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
      ) : (
        <div className="flex flex-row justify-evenly w-full invisible">
          <Button onClick={handleAttack}>Attack</Button>
          <Button variant={"ghost"} onClick={handleDefend}>
            Defend
          </Button>
          <Button variant={"secondary"} onClick={handleHeal}>
            Heal
          </Button>
        </div>
      )}
    </div>
  );
}
