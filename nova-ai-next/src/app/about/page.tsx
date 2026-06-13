import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — 4AT",
  description: "Learn more about 4AT, our team, and how we empower businesses to harness AI's true potential.",
};

export default function About() {
  return <AboutClient />;
}
