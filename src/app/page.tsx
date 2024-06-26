import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { A } from "@/components/typography/a";
import H1 from "@/components/typography/h1";

export default function Page() {
  return (
    <article>
      <H1>Home</H1>
      <A href="/about">About</A>
    </article>
  );
}
