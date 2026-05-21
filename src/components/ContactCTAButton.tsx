"use client";

import { useState } from "react";
import { CTAButton, type CTAButtonProps } from "@/components/ui/cta-button";
import { ContactDialog } from "./ContactDialog";

type Props = Omit<Extract<CTAButtonProps, { href?: undefined }>, "onClick"> & {
  subject: string;
};

export function ContactCTAButton({ subject, children, ...props }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CTAButton {...props} onClick={() => setOpen(true)}>
        {children}
      </CTAButton>
      <ContactDialog
        open={open}
        onClose={() => setOpen(false)}
        subject={subject}
      />
    </>
  );
}
