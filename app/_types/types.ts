// import { z } from "zod"
import type { Breakpoint, ResponsiveLayout } from "react-grid-layout-next";

export type FilterType = "all" | "about" | "projects" | "media";

export interface ProjectType {
  href: string;
  title: string;
  description: string;
  type: string;
  image: {
    src: string;
    alt?: string;
  };
  size?: "tall" | "wide" | "big";
}

export interface Breakpoints {
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export interface Layouts {
  all: ResponsiveLayout<Breakpoint>;
  about: ResponsiveLayout<Breakpoint>;
  projects: ResponsiveLayout<Breakpoint>;
  media: ResponsiveLayout<Breakpoint>;
}
