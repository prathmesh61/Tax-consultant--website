import { Tservices } from "@/lib/types";
import {
  BarChart2,
  Calculator,
  FileCode2,
  FileText,
  LockKeyhole,
  Send,
} from "lucide-react";
export const services: Tservices[] = [
  {
    name: "Insurance Tax",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: FileText,
  },
  {
    name: "Financial Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Calculator,
  },
  {
    name: "Strategic Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Send,
  },
  {
    name: "Audit & Assurancy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: BarChart2,
  },
  {
    name: "Finance Secure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: LockKeyhole,
  },
  {
    name: "Project Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: FileCode2,
  },
];
