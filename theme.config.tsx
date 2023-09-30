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
    link: "https://github.com/Mirror-Tang/Mirror-Tang.github.io",
  },
  docsRepositoryBase: "https://github.com/Mirror-Tang/Mirror-Tang.github.io/tree/dev",
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
