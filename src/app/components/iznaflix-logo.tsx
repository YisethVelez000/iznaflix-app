import { cn } from "@/lib/utils"

interface IznaflixLogoProps {
  className?: string
}

export function IznaflixLogo({ className }: IznaflixLogoProps) {
  return (
    <div className={cn("netflix-logo transition-all duration-1500", className)}>
      <span className="netflix-text text-[15rem] sm:text-[10rem] md:text-[5rem] lg:text-[10rem] xl:text-[15rem] 2xl:text-[20rem] font-bold text-red-600">
      <strong>IZNAFLIX</strong>
      </span>
    </div>
  )
}
