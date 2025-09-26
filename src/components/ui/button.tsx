// components/ui/button.tsx
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import clsx from "clsx";
import React, { forwardRef } from "react";

interface ButtonProps extends Omit<MUIButtonProps, "startIcon" | "endIcon"> {
  children: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, sx = {}, className, ...rest },
  ref
) {
  const customSx: SxProps<Theme> = {
    textTransform: "none",
    borderRadius: "0px",
    padding: "0px ",
    boxShadow: "none",
    minWidth: "auto", // ✅ this removes MUI's 64px default

    ...(sx as object),
  };

  return (
    <MUIButton ref={ref} sx={customSx} className={clsx(className)} {...rest}>
      {children}
    </MUIButton>
  );
});

export default Button;
