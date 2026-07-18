
import rehmatImage from './assets/FOUNDERS/H REHMAT ALI REHAT.jpeg';
import saadatImage from './assets/FOUNDERS/H SAADAT ALI RAHAT.jpeg';
import SOPMS from './assets/LOGOS/WhatsApp Image 2026-07-10 at 8.39.06 AM (1).jpeg';
export { saadatImage };
export { rehmatImage };
export { SOPMS };

export const NAV_LINKS = [
 { label: 'Home', href: '/' },
 { label: 'About Us', href: '/founder' },
 { label: 'Blog', href: '/blog' }, // Updated label and path
 { label: 'Courses', href: '/#courses' },
 { label: 'Classes', href: '/#schedule' },
 { label: 'Contact', href: '/#contact' },
]

export const WHATSAPP_LINK = 'http://api.whatsapp.com/send?phone=923395591312'
export const PHONE_LINK = 'tel:+923395591312'

export const TRUST_STATS = [
  { value: 30, suffix: '+', label: 'Years of Combined Founding Practice' },
  { value: 6, suffix: '', label: 'Month SOPMS Training Program' },
  { value: 9, suffix: '', label: 'Step Personalized Diagnostic Method' },
  { value: 3, suffix: '', label: 'Traditions in One Clinic' },
]
export const DETAILS_CONTENT = {
  title: "Treatment Details",
  paragraphs: [
    "This is the first paragraph of your detailed information.",
    "This is the second paragraph where you can explain specific procedures."
  ]
};

export const DIAGNOSTIC_STEPS = [
  {
    title: 'Consultation & History',
    description:
      'A full medical history is taken before anything else — the pulse only confirms what the story suggests.',
  },
  {
    title: 'Pulse Diagnosis · Nabz',
    description:
      'The defining Unani method — reading rhythm, strength and quality at the wrist.',
  },
  {
    title: 'Physical Examination',
    description:
      'A direct examination confirms and localises what the history and pulse indicate.',
  },
  {
    title: 'Symptom Assessment',
    description:
      'Symptoms are weighed against temperament, not treated as isolated complaints.',
  },
  {
    title: 'Dietary & Lifestyle Evaluation',
    description:
      'Daily habits, diet and routine are reviewed for their role in the imbalance.',
  },
  {
    title: 'Ilaj bil Ghiza',
    description:
      'Food-based therapy — treatment begins at the table, before the dispensary.',
  },
  {
    title: 'Ilaj bid Dawa',
    description:
      'Herbal and Unani medicines, prescribed once food and lifestyle changes are set.',
  },
  {
    title: 'Personalised Treatment Plan',
    description: 'Every plan is built for the individual patient, not a standard protocol.',
  },
  {
    title: 'Follow-up & Monitoring',
    description: 'Progress is tracked and the plan adjusted as the patient responds.',
  },
]

export const TREATMENTS = [
  {
    title: 'Herbal Medicine',
    description:
      'Plant-based remedies drawn from a long apothecary tradition, prepared and dosed by hand.',
  },
  {
    title: 'Unani Medicine',
    description:
      'Diagnosis by temperament and pulse, treatment built around balance rather than isolated symptoms.',
  },
  {
    title: 'Ayurvedic Medicine',
    description:
      'Complementary principles of balance and constitution, drawn on where they serve the patient.',
  },
  {
    title: 'Ilaj bil Ghiza',
    description: 'Food as the first medicine — diet prescribed with the same rigour as any remedy.',
  },
  {
    title: 'Ilaj bid Dawa',
    description: 'Herbal drug therapy, prescribed once diet and lifestyle groundwork is in place.',
  },
  {
    title: 'Personalized Treatment',
    description: 'Every plan is built around the individual patient, then followed up over time.',
  },
]

export const EDUCATION_ITEMS = [
  'Simple Organo Pathic Medical Science (SOPMS)',
  'Tibi Refresher Course',
  'Clinical Practice',
  'Herbal Pharmacology',
  'Practical Diagnosis',
]

export const COURSE_SYLLABUS = [
  'Principles of Unani medicine',
  'Simple Organo Pathic Medical Science (SOPMS)',
  'Diagnosis, including pulse reading',
  'Herbal medicines & preparation',
  'Treatment by food — Ilaj bil Ghiza',
  'Supervised clinical practice',
]

export const FOUNDER_TIMELINE = [
  {
    period: 'Schooling',
    place: 'Rehmania High School, Faisalabad',
  },
  {
    period: 'Higher Education',
    place: 'GC University Faisalabad',
  },
  {
    period: '1988 – 1992',
    place: 'Al Sehat Unani Medical College',
  },
  {
    period: 'Since 1992',
    place: 'Founder, Rahat Shifa Khana',
  },
]


// src/content.ts
export const FOUNDERS_LEGACY = [
 {
  slug: "rehmat-ali",

  name: "Hakeem Rehmat Ali Rahat ",

  urduName: "حکیم رحمت علی راحت",

  tagline: "Founder of Qanoon-e-Arba & Medical Researcher",

  title: "Architect of the Four-Fold Medical Law",

  image: rehmatImage,

  birth: {
    year: 1933,
    place: "Kalanaur, Batala Tehsil, Gurdaspur District, British India"
  },

  death: {
    date: "26 August 2004"
  },

  father: "Hakeem Mian Allah Ditta",

  profession: [
    "Unani Physician",
    "Medical Researcher",
    "Author",
    "Teacher"
  ],

  intro:
    "Hakeem Rehmat Ali Rahat  (1933–2004) was one of the most influential researchers in modern Unani medicine and the founder of Qanoon-e-Arba Tibb-e-Mufrad Aza (The Four-Fold Law of Simple Organ Medicine). Through decades of clinical research, he refined and expanded the Theory of Mufrad Aza, introducing a scientifically organized four-fold system that aligned traditional Unani principles with anatomy, physiology, pathology, and pharmacology.",

  earlyLife:
    "Born in 1933 in Kalanaur, Gurdaspur, British India, Hakeem Rehmat Ali Rahat  completed his primary education in Jarman Singh Primary School. Following the partition of the Indian subcontinent, his family migrated to Narowal, Pakistan, where he completed his matriculation before moving to Sheikhupura with his father.",

  education: [
    "Primary Education – Jarman Singhan Primary School",
    "Matriculation – Government Elementary School, Narowal",
    "Qualified Dispenser (1953)",
    "Traditional Unani Medicine under Hakeem Mian Allah Ditta",
    "Eight years of advanced training under Hakeem Inqilab Sabir Multani"
  ],

  career:
    "After qualifying as a dispenser in 1953, he worked with Dr. Syed Abbas Aulad Hussain while continuing his studies in Unani medicine. His passion for medical science led him to study Allopathy, Homeopathy, and modern medicine alongside classical Unani literature.",

  mentor: {
    name: "Hakeem Inqilab Sabir Multani",
    since: 1956,
    duration: "Approximately eight years",
    description:
      "He became one of the closest students of Hakeem Inqilab Sabir Multani, travelling weekly to Lahore for nearly eight years to study the Theory of Mufrad Aza."
  },

  researchJourney:
    "During his studies, Hakeem Rehmat Ali identified several contradictions within the existing Theory of Mufrad Aza. Rather than accepting them, he systematically researched these issues and continued his investigations even after the passing of his teacher.",

  majorQuestions: [
    "Simple organs should be four instead of three.",
    "Blood consists of four humors rather than three.",
    "The relationship between temperament, humors and simple organs required revision.",
    "Drug actions should be classified into four categories.",
    "The circulatory explanation in the existing theory required correction.",
    "Functional activities of organs should be divided into four instead of three."
  ],

  majorContribution: {
    title: "Qanoon-e-Arba Tibb-e-Mufrad Aza",
    year: 1976,
    description:
      "Around 1976, after extensive research, Hakeem Rehmat Ali introduced Qanoon-e-Arba (The Four-Fold Law), resolving major theoretical inconsistencies in the existing Theory of Mufrad Aza. The new framework harmonized Simple Organ Medicine with the fundamental principles of classical Unani medicine."
  },

  philosophy:
    "He believed medicine should be based upon observation, scientific investigation, logical consistency, and harmony between anatomy, physiology, pathology, pharmacology, and the traditional principles of Unani medicine.",

  achievements: [
    "Founder of Qanoon-e-Arba Tibb-e-Mufrad Aza",
    "Resolved theoretical contradictions in the Theory of Mufrad Aza",
    "Established a four-fold medical framework",
    "Dedicated over sixteen years to research alongside Hakeem Inqilab Sabir Multani",
    "Mentored hundreds of physicians across Pakistan",
    "Played a leading role in Tehreek-e-Tajdeed-e-Tibb"
  ],

  books: [
    {
      title: "Tashreeh Nazriya Mufrad Aza",
      description:
        "His first book explaining the Theory of Mufrad Aza, for which Hakeem Inqilab Sabir Multani personally wrote the preface."
    },
    {
      title: "Miqyas-ul-Tibb",
      description:
        "A comprehensive response to objections raised against Qanoon-e-Arba."
    },
    {
      title: "Kulliyat-e-Ilm-ul-Abdan",
      description:
        "A detailed work presenting anatomy and physiology through temperament, humors and simple organs."
    },
    {
      title: "Kya Burhapa Qabil-e-Ilaj Hai?",
      description:
        "Edited and published the writings of Hakeem Inqilab Sabir Multani in 1985."
    }
  ],

  students: [
    "Hakeem Maqbool Ahmad Cheema",
    "Hakeem Ata-ul-Haq Subhani",
    "Hakeem Shabbir Ahmad",
    "Hakeem Muhammad Shafiq",
    "Hakeem Faiz Muhammad Faiz",
    "Hakeem Muhammad Ashraf"
  ],

  supporters: [
    "Hakeem Noor Muhammad Herwi",
    "Dr. Muhammad Siddiq",
    "Rahbar Kaleemi",
    "Hakeem Ahmad Saeed Yousafi",
    "Hakeem Abdul Salam Yousafi",
    "Hakeem Muhammad Mushtaq",
    "Hakeem Abdul Ghani",
    "Professor Ata-ul-Haq Subhani"
  ],

  publications:
    "Under his supervision, medical journals including 'Simple Organopathy' and 'Qaumi Tibb Pakistan' regularly published research promoting Qanoon-e-Arba and modern Unani medical thought.",

  legacy:
    "After the passing of Hakeem Inqilab Sabir Multani, he continued teaching from Faisalabad, where physicians from across Pakistan attended regular educational sessions. His students continue to practice and promote Qanoon-e-Arba throughout the country.",

  deathSummary:
    "Hakeem Rehmat Ali Rahat  passed away on 26 August 2004 after dedicating his entire life to the revival, advancement, and scientific development of Unani medicine.",

  quote:
    "He devoted his life to transforming traditional medicine into a coherent scientific system through research, education, and clinical practice."
},
 {
  "slug": "saadat-ali",
  "name": "Hakeem Saadat Ali Rahat",
  "urduName": "حکیم سعادت علی راحت",
  "tagline": "Researcher of Rahat Simple Organopathic Medical Science",
  "title": "Successor of Qanoon-e-Arba & Traditional Medical Researcher",
image: saadatImage,
  "birth": {
    "year": 1965,
    "place": "Faisalabad, Pakistan"
  },
  "father": "Hakeem Rehmat Ali Rahat",
  "profession": [
    "Unani Physician",
    "Medical Researcher",
    "Medical Author",
    "Editor"
  ],
  "intro": "Hakeem Saadat Ali Rahat is a renowned Pakistani Unani physician, researcher, and the son of the distinguished medical scholar Hakeem Rehmat Ali Rahat. Following his father's footsteps, he has dedicated his career to advancing Qanoon-e-Arba and developing Rahat Simple Organopathic Medical Science (SOPMS).",
  "earlyLife": "Born in Faisalabad in 1965, Hakeem Saadat Ali Rahat grew up in a family deeply rooted in the tradition of Unani medicine. Being surrounded by generations of physicians inspired him to pursue medical research from an early age.",
  "education": [
    "Associate Engineering – Government College of Technology, Lahore",
    "Fazil-ut-Tibb Wal Jarahat (1992) – Al-Sehat Unani Medical College, Faisalabad"
  ],
  "career": "After completing his medical education in 1992, he joined his father in clinical practice, gaining practical experience while studying the deeper principles of Mufrad Aza and Qanoon-e-Arba directly under his guidance.",
  "mentor": {
    "name": "Hakeem Rehmat Ali Rahat",
    "since": 1992,
    "duration": "Until 2004",
    "description": "He received direct clinical and theoretical training from his father, mastering the principles of Mufrad Aza, Qanoon-e-Arba, and advanced diagnostic methods."
  },
  "editorialWork": "He served as editor of the medical journals 'Simple Organopathy' and 'Qaumi Tibb', both published under the supervision of Hakeem Rehmat Ali Rahat to promote research in traditional medicine.",
  "researchJourney": "Following the passing of Hakeem Rehmat Ali Rahat in 2004, he continued and expanded his father's research, formalizing it into what is now recognized as Rahat Simple Organopathic Medical Science (SOPMS).",
  "philosophy": "According to his research, every disease originates from a state of stimulation (Tehreek). Stimulation occurs only in the heart and muscular system, while the functional states of analysis (Tahleel), sedation (Taskeen), and anesthesia (Takhdeer) represent manifestations of physiological weakness rather than primary stimulation.",
  "majorContribution": {
    "title": "Rahat Simple Organopathic Medical Science (SOPMS)",
    "year": 2004,
    "description": "Modernized Qanoon-e-Arba by establishing that at any given time, only one of the four physiological functions—Tehreek, Tahleel, Taskeen, or Takhdeer—dominates the human body, providing a unified diagnostic framework."
  },
  "achievements": [
    "Continued the research legacy of Hakeem Rehmat Ali Rahat",
    "Developed and formalized Rahat Simple Organopathic Medical Science",
    "Served as editor of Simple Organopathy and Qaumi Tibb journals",
    "Advanced modern diagnostic principles within the Qanoon-e-Arba framework",
    "Simplified disease diagnosis and therapeutic methodology"
  ],
  "books": [
    {
      "title": "Tahqiqat Mahiyat-ul-Amraz wa Ilaj ma'a Hamara Matab",
      "description": "A comprehensive 2017 publication detailing the nature of diseases, their diagnosis, and the four methods of treatment (Ilaaj bil-Amala, Ilaaj bil-Zidd, Ilaaj bil-Jazb, and Ilaaj bil-Rade) according to SOPMS principles."
    }
  ],
  "students": [
    "Dr. Imran Fraz Jatala (UK)",
    "H. Gulam Mustfa (LHR)",
    "Mufti Hanzla Mehmood Siddiqi (MLTN)",
    "Dr. H. Abdul Azeem (MLTN)",
    "H. Freed Ahmed (Karachi)",
    "H. Farooq Azam Sabri (Sargodha)",
    "H. Asim Umair (Jranwala)"
  ],
  "publications": "As an editor of major medical journals, he has authored numerous research articles aimed at the scientific development and modernization of Unani medicine and Qanoon-e-Arba.",
  "legacy": "He continues the scientific mission initiated by Hakeem Rehmat Ali Rahat by mentoring practitioners, conducting clinical research, and refining SOPMS for contemporary clinical application.",
  "quote": "Every disease is the result of a single dominant physiological function, and understanding that function is the key to successful diagnosis and treatment."
}
];