import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Baby,
  Bandage,
  Brain,
  ClipboardList,
  Droplets,
  HeartPulse,
  Home,
  Plane,
  ShieldCheck,
  Snowflake,
  Stethoscope,
  Syringe,
  ThermometerSun,
  UserRound,
  Users,
  Wind,
} from "lucide-react";

export type ServiceItem = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "general",
    number: "01",
    title: "General & Family Medicine",
    description:
      "Continuity of care for individuals and families, from childhood immunisations to complex chronic disease management.",
    services: [
      {
        name: "Family & General Consultations",
        description:
          "Comprehensive consultations for acute illness, preventive care, and ongoing health concerns for all ages.",
        icon: Users,
      },
      {
        name: "Chronic Disease Management",
        description:
          "Structured care plans, team care arrangements, and regular reviews for diabetes, asthma, heart disease, and more.",
        icon: Activity,
      },
      {
        name: "Preventive Health & Health Assessments",
        description:
          "45–49 and 75+ health assessments, cardiovascular risk assessment, and lifestyle counselling.",
        icon: ShieldCheck,
      },
      {
        name: "Paediatric & Adolescent Care",
        description:
          "Growth and development checks, childhood illness, behavioural concerns, and adolescent health.",
        icon: Baby,
      },
      {
        name: "Mental Health Care",
        description:
          "GP mental health treatment plans, counselling referrals, medication reviews, and supportive follow-up.",
        icon: Brain,
      },
      {
        name: "Aged Care & Elderly Health",
        description:
          "Falls risk, cognition, medication management, and coordination with families and carers.",
        icon: Home,
      },
      {
        name: "Men’s Health",
        description:
          "Prostate concerns, cardiovascular risk, sexual health, and preventive screening tailored to men.",
        icon: UserRound,
      },
      {
        name: "Home Visits",
        description:
          "Where clinically appropriate, home visits support patients who cannot attend the practice.",
        icon: Home,
      },
    ],
  },
  {
    id: "womens-mens",
    number: "02",
    title: "Women’s & Men’s Health",
    description:
      "Respectful, confidential care spanning reproductive health, screening, contraception, and sexual health.",
    services: [
      {
        name: "Women’s Health & Cervical Screening",
        description:
          "Cervical screening tests, breast examination advice, menstrual disorders, and menopause support.",
        icon: HeartPulse,
      },
      {
        name: "Contraception (Implanon & IUD)",
        description:
          "Insertion and removal of long-acting reversible contraception by experienced clinicians.",
        icon: ShieldCheck,
      },
      {
        name: "Pregnancy & Postnatal Care",
        description:
          "Shared antenatal care with your obstetrician, postnatal checks, and feeding support.",
        icon: Baby,
      },
      {
        name: "Sexual Health",
        description:
          "STI screening, treatment, and confidential advice for patients of all backgrounds.",
        icon: Stethoscope,
      },
    ],
  },
  {
    id: "diagnostics",
    number: "03",
    title: "Diagnostics & Procedures",
    description:
      "On-site investigations and minor procedures to keep your care convenient and coordinated.",
    services: [
      {
        name: "On-site Pathology Collection",
        description:
          "Blood and specimen collection within the practice to save you an extra trip on the day of your visit.",
        icon: Droplets,
      },
      {
        name: "Skin Checks & Dermatoscopy",
        description:
          "Full-body skin surveillance and lesion monitoring with dedicated appointment times where required.",
        icon: ThermometerSun,
      },
      {
        name: "Minor Surgery & Skin Lesion Removal",
        description:
          "Excision of selected skin lesions with appropriate histopathology follow-up.",
        icon: Bandage,
      },
      {
        name: "Cryotherapy",
        description:
          "Treatment of suitable sun damage and benign lesions using cryotherapy techniques.",
        icon: Snowflake,
      },
      {
        name: "Wound Care & Dressings",
        description:
          "Complex wound reviews, dressings, and coordination with community nursing when needed.",
        icon: ClipboardList,
      },
      {
        name: "Electrocardiography (ECG)",
        description:
          "Resting ECG recording and onward referral or cardiology liaison as clinically indicated.",
        icon: Activity,
      },
      {
        name: "Spirometry & Pulmonary Function",
        description:
          "Lung function testing to support asthma and COPD diagnosis and management.",
        icon: Wind,
      },
      {
        name: "Ambulatory Blood Pressure & Holter Monitoring",
        description:
          "24-hour blood pressure and cardiac rhythm monitoring arranged through the practice.",
        icon: HeartPulse,
      },
      {
        name: "INR Monitoring & Anticoagulation",
        description:
          "Point-of-care INR testing and warfarin dose adjustment in partnership with your GP.",
        icon: Activity,
      },
    ],
  },
  {
    id: "travel",
    number: "04",
    title: "Travel & Immunisation",
    description:
      "Destination-specific advice, vaccines, and documentation for work and leisure travel.",
    services: [
      {
        name: "Travel Health Consultations",
        description:
          "Personalised travel plans including malaria prophylaxis, altitude advice, and vaccine schedules.",
        icon: Plane,
      },
      {
        name: "Yellow Fever Vaccination",
        description:
          "Accredited yellow fever vaccination centre services where clinically appropriate.",
        icon: Syringe,
      },
      {
        name: "Routine Immunisations",
        description:
          "Childhood schedule catch-ups, influenza, pneumococcal, shingles, and other funded vaccines.",
        icon: Syringe,
      },
    ],
  },
];
