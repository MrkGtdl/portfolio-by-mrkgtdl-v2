import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
};

export default function Logo({ href = "/", className = "" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="MrkGtdl Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/icon.png"
        alt="MrkGtdl"
        width={74}
        height={74}
        priority
        className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
