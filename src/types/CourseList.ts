import type { JSX } from "react";

export interface CourseList {
  id: number;
  title: string;
  image: string;
  description: string;
  cta?: JSX.Element | string;
}