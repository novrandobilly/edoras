import Image from "next/image";
import { cn } from "@/lib/utils";

export interface IntiDinamisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white";
  priority?: boolean;
}

const SIZES: Record<NonNullable<IntiDinamisLogoProps["size"]>, { height: number; width: number; className: string }> = {
  sm: { height: 26, width: 102, className: "h-6 w-auto" },
  md: { height: 36, width: 141, className: "h-9 w-auto" },
  lg: { height: 48, width: 188, className: "h-12 w-auto" },
  xl: { height: 60, width: 235, className: "h-15 w-auto" },
};

export function IntiDinamisLogo({
  className,
  size = "md",
  variant = "default",
  priority = false,
}: IntiDinamisLogoProps) {
  const currentSize = SIZES[size];

  return (
    <div
      className={cn(
        "inline-flex items-center select-none",
        variant === "white" && "brightness-0 invert",
        className
      )}
    >
      <Image
        src="/logo-intidinamis.svg"
        alt="Inti Dinamis Logo"
        width={currentSize.width}
        height={currentSize.height}
        priority={priority}
        className={cn("object-contain", currentSize.className)}
      />
    </div>
  );
}

export default IntiDinamisLogo;
