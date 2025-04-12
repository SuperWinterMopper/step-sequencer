'use client';

import { Slider } from "@/components/ui/slider";
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import waveTable from "@/app/slider/wavetable"

type SliderProps = React.ComponentProps<typeof Slider>

export default function MySlider({ className, ...props }: SliderProps) {
  const [attack, setAttack] = useState(.5);
  const [release, setRelease] = useState(.5);

  const audioCtx = new AudioContext();

  const wave = new PeriodicWave(audioCtx, {
      real: waveTable.real,
      imag: waveTable.imag,
  });

  const playSweep = (time: number) => {
    console.assert(time >= 0, "entered negative time into playSweep");

    const osc = new OscillatorNode(audioCtx,  {
      frequency: 196,
      type: "custom",
      periodicWave: wave
    });
    osc.connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + 1);
  };

  return (
    <div className="w-full bg-pink-200">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Attack</CardTitle>
          <CardDescription>{attack}</CardDescription>
        </CardHeader>
        <CardContent>
          <Slider
            defaultValue={[attack]}
            min={0}
            max={1}
            step={.1}
            onValueChange={(value) => {
              setAttack(value[0]);
              console.log("attack changed, should be changed to", value[0]);
            }}
            {...props}
            />
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Attack</CardTitle>
          <CardDescription>{attack}</CardDescription>
        </CardHeader>
        <CardContent>
          <Slider 
            defaultValue={[release]}
            min={0}
            max={1}
            step={.1}
            onValueChange={(value) => {
              setRelease(value[0]);
              console.log("release changed, release should be changed to", value[0]);
            }}
            {...props}
          />  
        </CardContent>
      </Card>
    </div>
  );
};
