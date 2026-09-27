import { AboutHeader } from "@/components/about/Header";
import { HowIWork } from "@/components/about/HowIWork";
import { Stack } from "@/components/about/Stack";
import { BackgroundAndStatement } from "@/components/about/Timeline";

export function About() {
  return (
    <div>
      <AboutHeader />
      <HowIWork />
      <Stack />
      <BackgroundAndStatement />
    </div>
  );
}
