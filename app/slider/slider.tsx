'use client';

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils"

type SliderProps = React.ComponentProps<typeof Slider>

export default function MySlider({ className, ...props }: SliderProps) {
  return (
    <div className="flex justify-center items-center bg-pink-200 h-screen">
      <p>slider hereee</p>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%] bg-green-200", className)}
        {...props}
      />
    </div>      
  );
};
