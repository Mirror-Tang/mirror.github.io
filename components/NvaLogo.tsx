import { useTheme } from "nextra-theme-docs";

export default function NavLogo() {
  const { resolvedTheme } = useTheme();
  return (
    <div style={{ display: "grid", gridAutoFlow: "column", alignItems: "center" }}>
      {/* TODO: figure out how to size Logo and use that here instead */}
      <img
        src={resolvedTheme === "light" ? "/logo.png" : "/logo.png"}
        style={{ height: "calc(var(--nextra-navbar-height) - 25px)" }}
        alt="Salus logo"
      />
      <p style={{ fontWeight: "bold", fontSize: "25px", marginTop: "6px", paddingLeft: "4px" }}>Salus</p>
    </div>
  );
}