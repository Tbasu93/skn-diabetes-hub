export type Article = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
  date: string;
  readMins: number;
  featured?: boolean;
  body: string[];
};

type Seed = [title: string, category: string, tags: string, excerpt: string];

const seeds: Seed[] = [
  ["Early Symptoms of Diabetes You Should Never Ignore", "Diabetes", "diabetes,symptoms,screening", "Thirst, tiredness and frequent urination often appear months before diagnosis. Here is what to watch for."],
  ["Understanding HbA1c: What Your Number Really Means", "Diabetes", "hba1c,monitoring,diabetes", "HbA1c reflects your average glucose over three months. Learn how to read it and what target suits you."],
  ["PCOS Explained: Hormones, Cycles and Metabolism", "PCOS", "pcos,women,hormones", "PCOS is metabolic as much as reproductive. Understanding this changes how it should be treated."],
  ["Managing Thyroid Problems the Right Way", "Thyroid", "thyroid,hypothyroidism,treatment", "Correct dosing and review intervals matter more than switching brands."],
  ["How Obesity Affects Your Hormones", "Obesity", "obesity,hormones,metabolism", "Excess fat tissue is hormonally active and drives insulin resistance."],
  ["Insulin Myths That Delay Good Control", "Insulin", "insulin,myths,diabetes", "Insulin is not a last resort or a sign of failure. Here is the evidence."],
  ["Diabetic Neuropathy: Protecting Your Feet", "Complications", "neuropathy,foot care,diabetes", "Nerve damage is preventable and detectable long before ulcers form."],
  ["Fatty Liver and Diabetes: The Hidden Link", "Metabolic", "fatty liver,fibroscan,metabolic", "Fatty liver often accompanies type 2 diabetes and is reversible with weight loss."],
  ["Vitamin D Deficiency in Eastern India", "Nutrition", "vitamin d,bone,nutrition", "Deficiency is remarkably common even in sunny climates. Here is why."],
  ["Prediabetes: Your Window of Opportunity", "Diabetes", "prediabetes,prevention", "Many people with prediabetes can return to normal glucose within a year."],
  ["Choosing a Glucometer and Using It Correctly", "Monitoring", "glucometer,monitoring", "Technique errors cause misleading readings more often than faulty devices."],
  ["What Is Time in Range and Why It Matters", "Monitoring", "cgm,time in range", "Time in range captures glucose quality in a way HbA1c cannot."],
  ["Hypoglycaemia: Recognising and Treating Lows", "Diabetes", "hypoglycaemia,safety", "The rule of 15 and how to prevent repeated lows."],
  ["Diabetes and Ramadan or Fasting Days", "Lifestyle", "fasting,diabetes,safety", "Safe fasting requires medication adjustment and planning."],
  ["Thyroid Problems in Pregnancy", "Thyroid", "thyroid,pregnancy", "Pregnancy-specific TSH targets protect both mother and baby."],
  ["Goitre and Thyroid Nodules: When to Worry", "Thyroid", "nodule,goitre,ultrasound", "Most nodules are benign, but a few need FNAC. Here is how they are triaged."],
  ["Hashimoto's Thyroiditis: A Simple Explanation", "Thyroid", "hashimoto,autoimmune", "The commonest cause of hypothyroidism, explained clearly."],
  ["Graves' Disease and Overactive Thyroid", "Thyroid", "graves,hyperthyroidism", "Treatment options and how remission is achieved."],
  ["Osteoporosis After Menopause", "Bone Health", "osteoporosis,bmd,menopause", "Bone loss accelerates sharply after menopause; BMD testing helps."],
  ["Calcium and Vitamin D: How Much Do You Need?", "Bone Health", "calcium,vitamin d", "Practical dosing advice based on age and risk."],
  ["The Diabetic Diet Myth: Rice Is Not the Enemy", "Nutrition", "diet,rice,bengali", "Portion size and pairing matter more than banning staples."],
  ["Fibre: The Most Underrated Diabetes Tool", "Nutrition", "fibre,diet", "How fibre flattens post-meal glucose spikes."],
  ["Reading Food Labels for Hidden Sugar", "Nutrition", "labels,sugar", "Sugar hides under many names on Indian food packets."],
  ["Walking 30 Minutes: What It Actually Does", "Lifestyle", "exercise,walking", "The measurable metabolic effect of a daily walk."],
  ["Resistance Training for People with Diabetes", "Lifestyle", "exercise,strength", "Muscle is a glucose sink. Building it improves control."],
  ["Sleep, Stress and Blood Sugar", "Lifestyle", "sleep,stress", "Poor sleep raises glucose independent of diet."],
  ["Diabetes and Kidney Health: Understanding UACR", "Complications", "uacr,kidney", "Early albumin leak is reversible if caught in time."],
  ["Diabetic Retinopathy: Why Annual Eye Checks Matter", "Complications", "eyes,retinopathy", "Vision loss from diabetes is largely preventable."],
  ["Erectile Dysfunction and Diabetes", "Complications", "men,sexual health", "A common but treatable complication worth discussing openly."],
  ["Diabetes in the Elderly: Gentler Targets", "Diabetes", "elderly,targets", "Tight control is not always right for older patients."],
  ["Type 1 Diabetes in Children: A Parent's Guide", "Type 1", "children,type 1", "School, sport and sick days with type 1 diabetes."],
  ["Carbohydrate Counting Made Simple", "Type 1", "carb counting,insulin", "A practical starting framework for insulin users."],
  ["Insulin Pens: Technique Mistakes to Avoid", "Insulin", "insulin,technique", "Site rotation, needle length and holding time."],
  ["Lipohypertrophy: The Lump You Should Not Inject Into", "Insulin", "insulin,skin", "Why rotating injection sites protects your control."],
  ["Gestational Diabetes: What Happens After Delivery", "Pregnancy", "gestational,postpartum", "Postpartum testing is essential — and often skipped."],
  ["Planning Pregnancy with Diabetes", "Pregnancy", "pregnancy,planning", "Pre-conception control dramatically improves outcomes."],
  ["PCOS and Fertility: What Works", "PCOS", "pcos,fertility", "Evidence-based steps toward conception with PCOS."],
  ["Hirsutism and Acne: The Hormonal Causes", "PCOS", "hirsutism,acne", "When skin and hair changes signal an endocrine problem."],
  ["Weight Loss Medications: What the Evidence Says", "Obesity", "weight loss,medication", "Modern anti-obesity drugs, their role and their limits."],
  ["InBody Analysis: Beyond the Weighing Scale", "Obesity", "inbody,composition", "Muscle, fat and visceral fat tell a fuller story than weight."],
  ["Metabolic Syndrome: Five Numbers to Know", "Metabolic", "metabolic syndrome,risk", "Waist, glucose, blood pressure, triglycerides and HDL."],
  ["Cholesterol: LDL, HDL and Triglycerides Explained", "Metabolic", "cholesterol,lipids", "Which number actually predicts heart attack risk."],
  ["Cushing's Syndrome: The Great Mimic", "Hormonal", "cushing,adrenal", "Why this condition is so often missed for years."],
  ["Addison's Disease and Steroid Safety", "Hormonal", "addison,steroids", "Sick-day rules that can save a life."],
  ["Prolactinoma: Headaches, Milk and Infertility", "Hormonal", "pituitary,prolactin", "A pituitary tumour that usually responds to tablets alone."],
  ["Short Stature in Children: When to See an Endocrinologist", "Growth", "growth,children", "Growth velocity matters more than a single height reading."],
  ["Delayed Puberty: Causes and Assessment", "Growth", "puberty,children", "When waiting is right and when testing is needed."],
  ["Diabetes Technology: Pumps, Sensors and Apps", "Monitoring", "technology,cgm,pump", "What is available in India and who benefits most."],
  ["Travelling with Diabetes: A Practical Checklist", "Lifestyle", "travel,diabetes", "Medicines, storage, time zones and airport security."],
  ["Foot Care: A Five-Minute Daily Routine", "Complications", "foot care,neuropathy", "The simple daily habit that prevents amputations."],
];

const paragraphs = (title: string, category: string): string[] => [
  `${title} is a topic Dr. Supratik Bhattacharya discusses regularly in clinic, because small misunderstandings here lead to years of avoidable ill-health. This article summarises what patients at SKN Diabetes & Endocrine Centre are told during consultation, in plain language.`,
  `In the ${category.toLowerCase()} field, evidence has moved considerably in the last decade. Recommendations that were standard even five years ago have been replaced by approaches that protect the heart, kidneys and bones alongside the primary condition. Treatment at the centre follows current international guidelines rather than habit.`,
  `The most important practical point is that assessment must be individual. Two people with identical laboratory values may need very different plans depending on age, weight, kidney function, other illnesses, work pattern and family support. This is why a detailed first consultation matters more than any single test.`,
  `Monitoring is the second pillar. Regular review of the relevant markers — HbA1c, thyroid function, lipids, UACR, bone density or body composition as appropriate — turns treatment from guesswork into measurement. Several of these assessments are offered complimentary at the centre, as advised by the consulting physician.`,
  `Finally, lifestyle remains foundational. Realistic dietary change built around your usual meals, thirty minutes of daily walking, adequate sleep and stress control amplify the effect of every medication prescribed. Patients who combine both consistently achieve the best long-term outcomes.`,
  `If this article reflects something you are experiencing, book a consultation by calling +91 9830585954. Clinic hours are Thursday 11:00 AM – 6:00 PM and Friday 11:00 AM – 3:00 PM. Please bring all previous reports with you.`,
];

const slugify = (t: string) =>
  t
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const articles: Article[] = seeds.map(([title, category, tags, excerpt], i) => {
  const d = new Date(2026, 6, 25 - i * 5);
  return {
    slug: slugify(title),
    title,
    category,
    tags: tags.split(","),
    excerpt,
    date: d.toISOString().slice(0, 10),
    readMins: 4 + (i % 5),
    featured: i < 3,
    body: paragraphs(title, category),
  };
});

export const articleCategories = Array.from(new Set(articles.map((a) => a.category)));
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const relatedArticles = (a: Article) =>
  articles.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);