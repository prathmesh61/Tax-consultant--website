import { Tservices } from "@/lib/types";
import {
  BackpackIcon,
  Badge,
  BarChart2,
  BookMarked,
  CableCar,
  Calculator,
  CombineIcon,
  Component,
  Factory,
  FileCode2,
  FileText,
  GalleryHorizontal,
  LockKeyhole,
  RabbitIcon,
  Send,
  Table,
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
    icon: GalleryHorizontal,
  },
  {
    name: "BIS Certifications",
    desc: "Bureau of Indian Standards (BIS) Certifications Registrations",
    icon: RabbitIcon,
  },
  {
    name: "ISO Certifications",
    desc: "ISO Certifications - With audit or Without audit",
    icon: Factory,
  },
  {
    name: "Trade Mark",
    desc: "Trade Mark (Intellectual Property Right) Registration",
    icon: CableCar,
  },
  {
    name: "Leave & Licence",
    desc: "Leave & Licence, Rent Agreement, Lease Deed",
    icon: BackpackIcon,
  },
  {
    name: "Professional Tax",
    desc: "PTEC , PTRC Registration, Tax Payment, Returns filling",
    icon: Component,
  },
  {
    name: "Firm Registration",
    desc: "Registration of Partnership Firm",
    icon: CombineIcon,
  },
  {
    name: "Company Registration",
    desc: "ROC Filling, Company Registration, LLP Registration",
    icon: Badge,
  },
  {
    name: "Income Tax",
    desc: "Preparation of Tax Return & Tax Planning",
    icon: Table,
  },
  {
    name: "Property Registration",
    desc: "Sale or Purchase of Property, Conveyance Deep, Agreement For Sale, Registered Mortgage",
    icon: BookMarked,
  },
];
