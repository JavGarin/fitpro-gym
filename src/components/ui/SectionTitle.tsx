import { cn } from "../../lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-4xl md:text-5xl font-bold mb-4", className)}>
      {children}
    </h2>
  );
};