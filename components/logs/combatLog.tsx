import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CombatLogProps {
  combatLog: {
    name: string;
    action: string;
    damage?: number;
    heal?: number;
  }[];
}

export default function CombatLog({ combatLog }: CombatLogProps) {
  return (
    <>
      <Card className=" w-full h-full">
        <CardHeader className="h-fit">
          <CardTitle>Combat Log</CardTitle>
        </CardHeader>
        <CardContent className="h-full overflow-y-scroll pb-24 ">
          {combatLog.map((log, index) => {
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
