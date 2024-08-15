import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CombatLogProps {
  name: string;
  action: string;
  damage?: number;
  heal?: number;
}

export default function CombatLog({
  name,
  action,
  damage,
  heal,
}: CombatLogProps) {
  const data = [
    {
      name: "Player",
      action: "Attack",
      damage: 10,
    },
    {
      name: "Monster",
      action: "Attack",
      damage: 5,
    },
    {
      name: "Player",
      action: "Defend",
      damage: 5,
    },
    {
      name: "Player",
      action: "Heal",
      heal: 10,
    },
    {
      name: "Player",
      action: "Attack",
      damage: 10,
    },
    {
      name: "Monster",
      action: "Attack",
      damage: 5,
    },
    {
      name: "Player",
      action: "Defend",
      damage: 5,
    },
    {
      name: "Player",
      action: "Heal",
      heal: 10,
    },
    {
      name: "Player",
      action: "Attack",
      damage: 10,
    },
    {
      name: "Monster",
      action: "Attack",
      damage: 5,
    },
    {
      name: "Player",
      action: "Defend",
      damage: 5,
    },
    {
      name: "Player",
      action: "Heal",
      heal: 10,
    },
    {
      name: "Player",
      action: "Attack",
      damage: 10,
    },
    {
      name: "Monster",
      action: "Attack",
      damage: 5,
    },
    {
      name: "Player",
      action: "Defend",
      damage: 5,
    },
    {
      name: "Player",
      action: "Heal",
      heal: 10,
    },
    {
      name: "Player",
      action: "Attack",
      damage: 10,
    },
    {
      name: "Monster",
      action: "Attack",
      damage: 5,
    },
    {
      name: "Player",
      action: "Defend",
      damage: 5,
    },
    {
      name: "Player",
      action: "Heal",
      heal: 10,
    },
    {
      name: "Player",
      action: "Attack",
      damage: 10,
    },
    {
      name: "Monster",
      action: "Attack",
      damage: 5,
    },
    {
      name: "Player",
      action: "Defend",
      damage: 5,
    },
    {
      name: "Player",
      action: "Heal",
      heal: 10,
    },
  ];
  return (
    <>
      <Card className=" w-full h-full">
        <CardHeader className="h-fit">
          <CardTitle>Combat Log</CardTitle>
        </CardHeader>
        <CardContent className="h-full overflow-y-scroll pb-24 ">
          {data.map((log, index) => {
            return (
              <div
                key={index}
                className={cn(
                  `flex flex-row justify-between w-full p-4  ${
                    log.name == "Player" ? "bg-gray-200" : "bg-gray-300"
                  }`
                )}
              >
                <CardDescription>
                  {log.name} {log.action}
                </CardDescription>
                <CardDescription>
                  {log.damage ? `Damage: ${log.damage}` : `Heal: ${log.heal}`}
                </CardDescription>
              </div>
            );
          })}

          <CardDescription>End of Combat Log</CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
