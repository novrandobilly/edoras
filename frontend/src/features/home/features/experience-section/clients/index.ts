import { StaticImageData } from "next/image";
import logoAstra from "@/assets/clients/astra-international-logo.webp";
import logoAstraAgro from "@/assets/clients/astra-agro-lestari.jpg";
import logoAdira from "@/assets/clients/adira-finance-logo.webp";
import logoBcaFinance from "@/assets/clients/bca-finance-logo.webp";
import logoDanone from "@/assets/clients/danone-logo.webp";
import logoCharitas from "@/assets/clients/charitas-hospital-logo.webp";
import logoVoksel from "@/assets/clients/voksel-logo.webp";
import logoDbc from "@/assets/clients/dbc-logo.webp";

export interface Client {
  name: string;
  logo: StaticImageData | string;
  scaleClass?: string;
}

export const CLIENTS: Client[] = [
  {
    name: "PT Astra International Tbk",
    logo: logoAstra,
  },
  {
    name: "PT Astra Agro Lestari Tbk",
    logo: logoAstraAgro,
    scaleClass: "scale-[1.5]",
  },
  {
    name: "PT Adira Finance Tbk",
    logo: logoAdira,
  },
  {
    name: "PT BCA Finance",
    logo: logoBcaFinance,
    scaleClass: "scale-[3]",
  },
  {
    name: "Danone Indonesia",
    logo: logoDanone,
  },
  {
    name: "Charitas Hospital Group",
    logo: logoCharitas,
  },
  {
    name: "PT Voksel Electric Tbk",
    logo: logoVoksel,
  },
  {
    name: "Djabesmen Co. (DBC)",
    logo: logoDbc,
  },
];
