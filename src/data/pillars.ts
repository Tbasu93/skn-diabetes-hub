export type Pillar = {
  id: "treatment" | "assessments" | "nutrition" | "camps";
  label: string;
  title: string;
  tagline: string;
  intro: string;
  highlights: string[];
};

export const pillars: Pillar[] = [
  {
    id: "treatment",
    label: "Treatment",
    title: "Specialist Treatment",
    tagline: "Guideline-driven care across the full endocrine spectrum",
    intro:
      "Twenty focused areas of diabetes, thyroid, hormonal, bone and metabolic care — each with its own diagnostic and treatment pathway led by Dr. Supratik Bhattacharya.",
    highlights: [
      "Individualised, evidence-based prescriptions",
      "Complication screening at every review",
      "Insulin initiation, titration and CGM interpretation",
      "Chamber and teleconsultation follow-up",
    ],
  },
  {
    id: "assessments",
    label: "Free Health Assessments",
    title: "Essential Health Assessments — Free of Cost",
    tagline: "Eleven in-house assessments offered complimentary",
    intro:
      "Essential tests that guide treatment are carried out inside the chamber at no charge, as advised by the consulting physician — so no patient delays a test because of cost.",
    highlights: [
      "No charge for any of the eleven assessments",
      "Performed in-house during your visit",
      "Results explained by the doctor in the same session",
      "Repeated at review visits when clinically needed",
    ],
  },
  {
    id: "nutrition",
    label: "Nutrition Counselling",
    title: "Expert Nutritional Counselling",
    tagline: "Diet plans built around Bengali kitchens and real routines",
    intro:
      "Every patient receives structured nutritional counselling — portion planning, protein and fibre targets and practical substitutions that fit family meals, work schedules and budget.",
    highlights: [
      "One-to-one counselling for every patient",
      "Plans based on InBody body composition data",
      "Diabetes, thyroid, PCOS and weight-specific menus",
      "Family and caregiver involvement encouraged",
    ],
  },
  {
    id: "camps",
    label: "Camps & Awareness",
    title: "Free Health Camps & Awareness Drives",
    tagline: "Quarterly camps and World Diabetes Day units — free for all",
    intro:
      "Health camps are organised at SKN by partner companies once every quarter, where patients' health is examined absolutely free of cost. On World Diabetes Day, special health units deliver awareness and consciousness with free tests for anyone who visits the clinic.",
    highlights: [
      "Quarterly camps hosted at the chamber by partner companies",
      "Completely free examination for everyone attending",
      "World Diabetes Day units open to the general public",
      "Awareness talks, printed guidance and early detection",
    ],
  },
];
