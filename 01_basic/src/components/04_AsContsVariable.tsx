import React from "react";

const VARIANTS = ["primary", "secondary", "ghost"] as const;

type Variant = (typeof VARIANTS)[number];

type BadgeProps = {
  label?: string;
  variant?: Variant;
};

function Badge({ label, variant = "primary" }: BadgeProps) {
  const styles: Record<Variant, React.CSSProperties> = {
    primary:{ color: "red"},
    secondary: {color: "yellow"},
    ghost: { color: "black" },
  };

  return <div style={styles[variant]}>{label}</div>;
}

export default Badge;
