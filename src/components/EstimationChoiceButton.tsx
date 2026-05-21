"use client";

import { useState } from "react";
import { CTAButton, type CTAButtonProps } from "@/components/ui/cta-button";
import { EstimationChoiceDialog } from "./EstimationChoiceDialog";

type Props = Omit<Extract<CTAButtonProps, { href?: undefined }>, "onClick">;

export function EstimationChoiceButton({ children, ...props }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CTAButton {...props} onClick={() => setOpen(true)}>
        {children}
      </CTAButton>
      <EstimationChoiceDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
