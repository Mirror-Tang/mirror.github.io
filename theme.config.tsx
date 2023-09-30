import { DocsThemeConfig } from "nextra-theme-docs";
import NavLogo from "./components/NavLogo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: NavLogo,
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath === "/" ? "Salus - Securing the Future of Web3" : "%s - Salus",
    };
  },
  project: {
    link: "https://github.com/latticexyz/mud",
  },
  docsRepositoryBase: "https://github.com/latticexyz/mud/tree/main/docs",
  head: (
    <>
      <meta property="title" content="Salus documentation" />
    </>
  ),
  footer: {
    text: "MIT 2023 © Salus",
  },
  primaryHue: 28,
};

export default config;
