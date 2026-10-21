import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appLink, whatsappDemoLink } from "./links";

export function CtaButtons({
  demoLabel = "Pedir una demo",
  className,
}: {
  demoLabel?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Button asChild size="lg">
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          Ir a la app
          <ArrowRight strokeWidth={1.75} />
        </a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href={whatsappDemoLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle strokeWidth={1.75} />
          {demoLabel}
        </a>
      </Button>
    </div>
  );
}
