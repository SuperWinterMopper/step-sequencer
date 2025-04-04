'use client';

import { Slider } from "@/components/ui/slider";
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type SliderProps = React.ComponentProps<typeof Slider>

export default function MySlider({ className, ...props }: SliderProps) {
  const [attack, setAttack] = useState(50);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Attack</CardTitle>
        <CardDescription>{attack}</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          defaultValue={[attack]}
          max={100}
          step={1}
          onValueChange={(value) => {
            setAttack(value[0]);
            console.log(attack);
          }}
          className={cn("w-[60%] bg-green-200", className)}
          {...props}
        />
      </CardContent>
    </Card>
  );
};
