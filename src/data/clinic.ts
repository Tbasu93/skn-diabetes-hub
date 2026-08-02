import logo from "@/assets/skn-logo.asset.json";
import doctor from "@/assets/dr-supratik.asset.json";
import clinicPhoto from "@/assets/clinic-front.asset.json";

export const images = {
  logo: logo.url,
  doctor: doctor.url,
  clinic: clinicPhoto.url,
};

export const clinic = {
  name: "SKN Diabetes & Endocrine Centre",
  shortName: "SKN",
  type: "Specialized Diabetes & Endocrinology Centre",
  address: "18, George Road, Naihati, Kolkata, West Bengal 743165",
  landmark: "Landmark: SBI, Naihati",
  phone: "+91 9830585954",
  phoneRaw: "+919830585954",
  whatsapp: "919830585954",
  email: "skndiabetescentre@gmail.com",
  mapQuery: "18 George Road, Naihati, Kolkata, West Bengal 743165",
  mapEmbed:
    "https://www.google.com/maps?q=18+George+Road,+Naihati,+Kolkata,+West+Bengal+743165&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=18+George+Road%2C+Naihati%2C+Kolkata%2C+West+Bengal+743165",
};

export const doctorInfo = {
  name: "Dr. Supratik Bhattacharya",
  role: "Director & Consultant Endocrinologist and Diabetologist",
  qualifications: [
    "MD",
    "MRCP (UK)",
    "FACP (USA)",
    "FRCP (Edinburgh)",
    "FACE (USA)",
    "MS (Endocrinology & Diabetes), London",
    "MRCPE",
  ],
};

export const timings = [
  { day: "Thursday", hours: "11:00 AM – 6:00 PM" },
  { day: "Friday", hours: "11:00 AM – 3:00 PM" },
];

export const timingNote =
  "The clinic remains closed on all other days. Booking is accepted only over phone or by visiting the chamber — no online booking is available through this website or any appointment platform. Teleconsultation service is available.";

export const fees = [
  { label: "Consultation Fee", amount: "₹1000", note: "Per consultation" },
  { label: "Registration Fee", amount: "₹500", note: "Valid for one year" },
];

export const complimentaryTests = [
  { name: "Bone Mineral Density (BMD)", desc: "Screening for osteoporosis and bone strength assessment." },
  { name: "DDC", desc: "Diabetes detection & complication screening at the chamber." },
  { name: "Diet Counselling", desc: "Personalised nutrition planning for metabolic control." },
  { name: "FibroScan", desc: "Non-invasive assessment of fatty liver and liver stiffness." },
  { name: "Fructosamine", desc: "Short-term glycaemic control marker over 2–3 weeks." },
  { name: "Hand Grip Assessment", desc: "Objective measure of muscle strength and frailty risk." },
  { name: "HbA1c", desc: "Three-month average blood glucose — the gold standard marker." },
  { name: "InBody Body Composition", desc: "Fat, muscle and visceral fat analysis for obesity care." },
  { name: "Lipid Profile", desc: "Cholesterol and triglyceride mapping for cardiac risk." },
  { name: "Neuropathy Assessment", desc: "Early detection of diabetic nerve damage in the feet." },
  { name: "UACR", desc: "Urine albumin-creatinine ratio for early kidney protection." },
];

export const testsNote = "Provided as advised by the consulting physician.";

export const stats = [
  { value: 25000, suffix: "+", label: "Patients Cared For" },
  { value: 18, suffix: "+", label: "Years of Clinical Practice" },
  { value: 11, suffix: "", label: "Complimentary Assessments" },
  { value: 7, suffix: "", label: "International Qualifications" },
];

export const mission =
  "Provide evidence-based, compassionate, and personalized endocrine and diabetes care that empowers every patient to achieve better health and long-term well-being.";

export const vision =
  "To become one of Eastern India's most trusted and advanced centres for diabetes, endocrine, thyroid, obesity, and hormonal healthcare through clinical excellence, innovation, and patient-centered treatment.";

export const coreValues = [
  "Integrity",
  "Compassion",
  "Innovation",
  "Excellence",
  "Evidence-Based Medicine",
  "Patient First",
  "Continuous Learning",
];

export const whyChooseUs = [
  {
    title: "Internationally Qualified Consultant",
    desc: "MRCP (UK), FRCP (Edinburgh), FACP and FACE (USA) — global training brought to Naihati.",
  },
  {
    title: "Single-Specialty Focus",
    desc: "Diabetes, thyroid, obesity and hormonal disorders are all we do — and we do them deeply.",
  },
  {
    title: "Complimentary Assessments",
    desc: "Eleven in-house tests offered free, as advised by the consulting physician.",
  },
  {
    title: "Modern Equipment",
    desc: "FibroScan, InBody composition analysis, BMD and neuropathy testing under one roof.",
  },
  {
    title: "Evidence-Based Protocols",
    desc: "Every prescription follows current international endocrine guidelines.",
  },
  {
    title: "Teleconsultation Available",
    desc: "Continuity of care for follow-ups, reports and dose adjustments from home.",
  },
];

export const patientJourney = [
  { step: "01", title: "Call to Book", desc: "Reserve your slot on +91 9830585954 or walk in during clinic hours." },
  { step: "02", title: "Registration", desc: "One-time ₹500 registration, valid for a full year of care." },
  { step: "03", title: "Detailed Consultation", desc: "History, examination and review of all previous reports." },
  { step: "04", title: "Assessments", desc: "Complimentary tests performed as advised by the physician." },
  { step: "05", title: "Personalised Plan", desc: "Medication, diet and lifestyle plan explained in plain language." },
  { step: "06", title: "Follow-Up", desc: "Structured review in chamber or via teleconsultation." },
];

export const tips = [
  "Drink enough water through the day.",
  "Never skip your diabetes medicine.",
  "Walk 30 minutes daily.",
  "Monitor HbA1c regularly.",
  "Avoid sugary drinks.",
  "Eat more fibre.",
  "Control your portion size.",
  "Check your feet daily.",
  "Sleep 7–8 hours every night.",
  "Reduce stress with breathing exercises.",
  "Get your thyroid checked if you feel unusually tired.",
  "Carry a glucose source if you take insulin.",
];

export const testimonials = [
  {
    name: "Anirban Ghosh",
    rating: 5,
    date: "March 2026",
    review:
      "My HbA1c dropped from 10.2 to 6.4 in eight months. Sir explains every medicine and why it is needed. Never felt rushed.",
  },
  {
    name: "Sudipta Roy",
    rating: 5,
    date: "February 2026",
    review:
      "The free InBody and diet counselling changed how I eat. I have lost 11 kg and my thyroid reports are finally normal.",
  },
  {
    name: "Mousumi Das",
    rating: 5,
    date: "January 2026",
    review:
      "I was diagnosed with PCOS elsewhere with no explanation. Here I understood my condition fully and my cycles are regular now.",
  },
  {
    name: "Rajib Sarkar",
    rating: 5,
    date: "December 2025",
    review:
      "Excellent chamber, spotlessly clean, and the neuropathy check picked up a problem in my feet very early.",
  },
  {
    name: "Krishna Banerjee",
    rating: 5,
    date: "November 2025",
    review:
      "Teleconsultation after my visit was very helpful. Insulin doses were adjusted without me travelling again.",
  },
  {
    name: "Tapas Mondal",
    rating: 5,
    date: "October 2025",
    review:
      "An internationally qualified endocrinologist available in Naihati itself. We no longer travel to Kolkata city for reviews.",
  },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Appointments are booked only by calling +91 9830585954 or by visiting the chamber in person during clinic hours. There is no online booking on this website or on any appointment platform.",
  },
  {
    q: "What are the consultation timings?",
    a: "Thursday 11:00 AM – 6:00 PM and Friday 11:00 AM – 3:00 PM. The clinic remains closed on all other days.",
  },
  {
    q: "What are the fees?",
    a: "The consultation fee is ₹1000. A one-time registration fee of ₹500 also applies and remains valid for one year.",
  },
  {
    q: "Which diseases are treated here?",
    a: "All forms of diabetes, thyroid disorders, PCOS, obesity, osteoporosis, pituitary, adrenal, growth and metabolic hormonal disorders.",
  },
  {
    q: "Should I bring my previous reports?",
    a: "Yes. Please bring all previous prescriptions, blood reports and imaging — including old records — so the plan can be tailored accurately.",
  },
  {
    q: "Can I book online?",
    a: "No. Online booking is not available through this website or any third-party platform. Phone or in-person booking only.",
  },
  {
    q: "Is teleconsultation available?",
    a: "Yes, teleconsultation is available and is especially useful for follow-ups, report reviews and dose adjustments.",
  },
  {
    q: "Do you provide thyroid treatment?",
    a: "Yes. Hypothyroidism, hyperthyroidism, thyroiditis, goitre, nodules and thyroid problems in pregnancy are all managed here.",
  },
  {
    q: "Do you provide insulin therapy?",
    a: "Yes. Insulin initiation, pen technique training, dose titration and continuous glucose monitoring (CGM) guidance are provided.",
  },
  {
    q: "Are the complimentary tests really free?",
    a: "Yes. Eleven assessments including HbA1c, FibroScan, BMD, InBody and UACR are offered complimentary, as advised by the consulting physician.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Cash and common digital payment methods such as UPI are accepted at the chamber reception.",
  },
  {
    q: "Do I need to register again next year?",
    a: "Registration is valid for one year from the date of first registration; it is renewed thereafter.",
  },
  {
    q: "Where exactly is the clinic located?",
    a: "18, George Road, Naihati, Kolkata 743165 — the landmark is SBI, Naihati. A Google Maps link is available on the Contact page.",
  },
  {
    q: "How long does a consultation take?",
    a: "A first consultation typically takes longer as a full history, examination and report review are done. Please allow adequate time.",
  },
];