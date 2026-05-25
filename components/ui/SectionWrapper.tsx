import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  withBorder?: boolean;
};

export default function SectionWrapper({
  children,
  withBorder = false,
}: SectionWrapperProps) {
  return (
    <section
      className={`max-w-6xl mx-auto px-6 py-28 ${
        withBorder ? "border-t border-zinc-900" : ""
      }`}
    >
      {children}
    </section>
  );
}