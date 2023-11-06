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
    name: "Insurance",
    desc: "As a part of safe financial planning we consider insurance as a smart and needful choice.Health Insurance,Business Insurance,Term Insurance,Accidental Insurance",
    icon: FileText,
  },
  {
    name: "PAN",
    desc: "Application of New PAN or Correction In Existing PAN",
    icon: Calculator,
  },
  {
    name: "Financial Services",
    desc: "Financial Services - Loans & Credit Cards",
    icon: Send,
  },
  {
    name: "Shop & Establishment Registration",
    desc: "Licence/Intimation for Shop or Establishment for their Business.",
    icon: BarChart2,
  },
  {
    name: "Investment Planning",
    desc: "Invest wisely with future safety & Good Returns.",
    icon: LockKeyhole,
  },
  {
    name: "GST",
    desc: "GST Registration, GST Returns, GST payment",
    icon: FileCode2,
  },
  {
    name: "MEME Udyam Registration",
    desc: "MSME business Registration is also known as UDYOG AADHAR which is generally use for small and medium scale enterprise or new business startup.",
    icon: FileCode2,
  },
  {
    name: "BIS Certifications",
    desc: "Bureau of Indian Standards (BIS) Certifications Registrations",
    icon: FileCode2,
  },
  {
    name: "ISO Certifications",
    desc: "ISO Certifications - With audit or Without audit",
    icon: FileCode2,
  },
  {
    name: "Trade Mark",
    desc: "Trade Mark (Intellectual Property Right) Registration",
    icon: FileCode2,
  },
  {
    name: "Leave & Licence",
    desc: "Leave & Licence, Rent Agreement, Lease Deed",
    icon: FileCode2,
  },
  {
    name: "Professional Tax",
    desc: "PTEC , PTRC Registration, Tax Payment, Returns filling",
    icon: FileCode2,
  },
  {
    name: "Firm Registration",
    desc: "Registration of Partnership Firm",
    icon: FileCode2,
  },
  {
    name: "Company Registration",
    desc: "ROC Filling, Company Registration, LLP Registration",
    icon: FileCode2,
  },
  {
    name: "Income Tax",
    desc: "Preparation of Tax Return & Tax Planning",
    icon: FileCode2,
  },
  {
    name: "Property Registration",
    desc: "Sale or Purchase of Property, Conveyance Deep, Agreement For Sale, Registered Mortgage",
    icon: FileCode2,
  },
];
