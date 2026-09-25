import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        w-full
        py-20
        sm:py-24
        lg:py-32
        ${className}
      `}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
