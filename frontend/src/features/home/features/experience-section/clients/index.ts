import { StaticImageData } from "next/image";

import logoAdiraFinance from "@/assets/client-collections/adira-finance.webp";
import logoAgraTata from "@/assets/client-collections/agra-tata.webp";
import logoAirPutih from "@/assets/client-collections/air-putih.webp";
import logoAloka from "@/assets/client-collections/aloka.webp";
import logoAmway from "@/assets/client-collections/amway.webp";
import logoArmadaAutoTara from "@/assets/client-collections/armada-auto-tara.webp";
import logoAstraAgroLestari from "@/assets/client-collections/astra-agro-lestari.webp";
import logoAstraDaihatsu from "@/assets/client-collections/astra-daihatsu.webp";
import logoAstraInternasional from "@/assets/client-collections/astra-internasional.webp";
import logoAstraPeugeot from "@/assets/client-collections/astra-peugeot.webp";
import logoAstraPoltek from "@/assets/client-collections/astra-poltek.webp";
import logoAstraWorld from "@/assets/client-collections/astra-world.webp";
import logoAteAdyawinsa from "@/assets/client-collections/ate-adyawinsa.webp";
import logoAuto2000 from "@/assets/client-collections/auto2000.webp";
import logoBcaFinance2 from "@/assets/client-collections/bca-finance-2.webp";
import logoBpkPenabur from "@/assets/client-collections/bpk-penabur.webp";
import logoChampGroup from "@/assets/client-collections/champ-group.webp";
import logoCharitasHospital from "@/assets/client-collections/charitas-hospital.webp";
import logoChemindo from "@/assets/client-collections/chemindo.webp";
import logoDaihatsu from "@/assets/client-collections/daihatsu.webp";
import logoDanone from "@/assets/client-collections/danone.webp";
import logoDbc2 from "@/assets/client-collections/dbc2.webp";
import logoDianTaksi from "@/assets/client-collections/dian-taksi.webp";
import logoDwiPerkasa from "@/assets/client-collections/dwi-perkasa.webp";
import logoExpressGroup from "@/assets/client-collections/express-group.webp";
import logoGayaMotor from "@/assets/client-collections/gaya-motor.webp";
import logoGlobalKalimantan from "@/assets/client-collections/global-kalimantan.webp";
import logoGondola from "@/assets/client-collections/gondola.webp";
import logoGranito from "@/assets/client-collections/granito.webp";
import logoHonda from "@/assets/client-collections/honda.webp";
import logoInternusaTriKencana from "@/assets/client-collections/internusa-tri-kencana.webp";
import logoIntertamaTrikencana from "@/assets/client-collections/intertama-trikencana.webp";
import logoIsuzu from "@/assets/client-collections/isuzu.webp";
import logoJavara from "@/assets/client-collections/javara.webp";
import logoJiwasraya from "@/assets/client-collections/jiwasraya.webp";
import logoJujurJayaSakti from "@/assets/client-collections/jujur-jaya-sakti.webp";
import logoKansaiPaint from "@/assets/client-collections/kansai-paint.webp";
import logoKawanLama from "@/assets/client-collections/kawan-lama.webp";
import logoLautanWarnaSari2 from "@/assets/client-collections/lautan-warna-sari-2.webp";
import logoLimawiraWisesa from "@/assets/client-collections/limawira-wisesa.webp";
import logoMapan from "@/assets/client-collections/mapan.webp";
import logoMensa from "@/assets/client-collections/mensa.webp";
import logoMetindoEra from "@/assets/client-collections/metindo-era.webp";
import logoMetindo from "@/assets/client-collections/metindo.webp";
import logoMri from "@/assets/client-collections/mri.webp";
import logoMustikaCopy from "@/assets/client-collections/mustika-copy.webp";
import logoNoahArkindo from "@/assets/client-collections/noah-arkindo.webp";
import logoPackindo from "@/assets/client-collections/packindo.webp";
import logoPertamedika from "@/assets/client-collections/pertamedika.webp";
import logoPertaminas from "@/assets/client-collections/pertaminas.webp";
import logoPeruri2 from "@/assets/client-collections/peruri-2.webp";
import logoPeugeot from "@/assets/client-collections/peugeot.webp";
import logoPlanetSurfCopy from "@/assets/client-collections/planet-surf-copy.webp";
import logoPuninar from "@/assets/client-collections/puninar.webp";
import logoRoyalBoard2 from "@/assets/client-collections/royal-board-2.webp";
import logoRucika from "@/assets/client-collections/rucika.webp";
import logoRukunPt from "@/assets/client-collections/rukun-pt.webp";
import logoShowa from "@/assets/client-collections/showa.webp";
import logoSigma from "@/assets/client-collections/sigma.webp";
import logoSinarmas from "@/assets/client-collections/sinarmas.webp";
import logoSkyliftIndonesia from "@/assets/client-collections/skylift-indonesia.webp";
import logoSummareconAgung from "@/assets/client-collections/summarecon-agung.webp";
import logoTimezone from "@/assets/client-collections/timezone.webp";
import logoTitisSampurna from "@/assets/client-collections/titis-sampurna.webp";
import logoTransmedia from "@/assets/client-collections/transmedia.webp";
import logoTriputra from "@/assets/client-collections/triputra.webp";
import logoTunasGroup from "@/assets/client-collections/tunas-group.webp";
import logoTunastoyota from "@/assets/client-collections/tunastoyota.webp";
import logoUdTrucks from "@/assets/client-collections/ud-trucks.webp";
import logoUi from "@/assets/client-collections/ui.webp";
import logoUobBuana from "@/assets/client-collections/uob-buana.webp";
import logoVerenaMultiFinance from "@/assets/client-collections/verena-multi-finance.webp";
import logoVokselElectric from "@/assets/client-collections/voksel-electric.webp";

export interface Client {
  name: string;
  logo: StaticImageData;
}

export const CLIENTS: Client[] = [
  { name: "Adira Finance", logo: logoAdiraFinance },
  { name: "Agra Tata", logo: logoAgraTata },
  { name: "Air Putih", logo: logoAirPutih },
  { name: "Aloka", logo: logoAloka },
  { name: "Amway", logo: logoAmway },
  { name: "Armada Auto Tara", logo: logoArmadaAutoTara },
  { name: "Astra Agro Lestari", logo: logoAstraAgroLestari },
  { name: "Astra Daihatsu", logo: logoAstraDaihatsu },
  { name: "Astra Internasional", logo: logoAstraInternasional },
  { name: "Astra Peugeot", logo: logoAstraPeugeot },
  { name: "Astra Poltek", logo: logoAstraPoltek },
  { name: "Astra World", logo: logoAstraWorld },
  { name: "Ate Adyawinsa", logo: logoAteAdyawinsa },
  { name: "Auto2000", logo: logoAuto2000 },
  { name: "Bca Finance 2", logo: logoBcaFinance2 },
  { name: "Bpk Penabur", logo: logoBpkPenabur },
  { name: "Champ Group", logo: logoChampGroup },
  { name: "Charitas Hospital", logo: logoCharitasHospital },
  { name: "Chemindo", logo: logoChemindo },
  { name: "Daihatsu", logo: logoDaihatsu },
  { name: "Danone", logo: logoDanone },
  { name: "Dbc2", logo: logoDbc2 },
  { name: "Dian Taksi", logo: logoDianTaksi },
  { name: "Dwi Perkasa", logo: logoDwiPerkasa },
  { name: "Express Group", logo: logoExpressGroup },
  { name: "Gaya Motor", logo: logoGayaMotor },
  { name: "Global Kalimantan", logo: logoGlobalKalimantan },
  { name: "Gondola", logo: logoGondola },
  { name: "Granito", logo: logoGranito },
  { name: "Honda", logo: logoHonda },
  { name: "Internusa Tri Kencana", logo: logoInternusaTriKencana },
  { name: "Intertama Trikencana", logo: logoIntertamaTrikencana },
  { name: "Isuzu", logo: logoIsuzu },
  { name: "Javara", logo: logoJavara },
  { name: "Jiwasraya", logo: logoJiwasraya },
  { name: "Jujur Jaya Sakti", logo: logoJujurJayaSakti },
  { name: "Kansai Paint", logo: logoKansaiPaint },
  { name: "Kawan Lama", logo: logoKawanLama },
  { name: "Lautan Warna Sari 2", logo: logoLautanWarnaSari2 },
  { name: "Limawira Wisesa", logo: logoLimawiraWisesa },
  { name: "Mapan", logo: logoMapan },
  { name: "Mensa", logo: logoMensa },
  { name: "Metindo Era", logo: logoMetindoEra },
  { name: "Metindo", logo: logoMetindo },
  { name: "Mri", logo: logoMri },
  { name: "Mustika Copy", logo: logoMustikaCopy },
  { name: "Noah Arkindo", logo: logoNoahArkindo },
  { name: "Packindo", logo: logoPackindo },
  { name: "Pertamedika", logo: logoPertamedika },
  { name: "Pertaminas", logo: logoPertaminas },
  { name: "Peruri 2", logo: logoPeruri2 },
  { name: "Peugeot", logo: logoPeugeot },
  { name: "Planet Surf Copy", logo: logoPlanetSurfCopy },
  { name: "Puninar", logo: logoPuninar },
  { name: "Royal Board 2", logo: logoRoyalBoard2 },
  { name: "Rucika", logo: logoRucika },
  { name: "Rukun Pt", logo: logoRukunPt },
  { name: "Showa", logo: logoShowa },
  { name: "Sigma", logo: logoSigma },
  { name: "Sinarmas", logo: logoSinarmas },
  { name: "Skylift Indonesia", logo: logoSkyliftIndonesia },
  { name: "Summarecon Agung", logo: logoSummareconAgung },
  { name: "Timezone", logo: logoTimezone },
  { name: "Titis Sampurna", logo: logoTitisSampurna },
  { name: "Transmedia", logo: logoTransmedia },
  { name: "Triputra", logo: logoTriputra },
  { name: "Tunas Group", logo: logoTunasGroup },
  { name: "Tunastoyota", logo: logoTunastoyota },
  { name: "Ud Trucks", logo: logoUdTrucks },
  { name: "Ui", logo: logoUi },
  { name: "Uob Buana", logo: logoUobBuana },
  { name: "Verena Multi Finance", logo: logoVerenaMultiFinance },
  { name: "Voksel Electric", logo: logoVokselElectric },
];
