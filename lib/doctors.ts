export type Doctor = {
  name: string;
  qualifications: string;
  imageUrl: string;
  interests: string[];
  bio: string;
};

const base = "https://wfpwa.com.au/wp-content/uploads";

export const doctors: Doctor[] = [
  {
    name: "Dr Nigel Jones",
    qualifications: "BSc, MBChB, DRCOG, FRACGP",
    imageUrl: `${base}/2022/08/doc-02.jpg`,
    interests: ["Elderly Care", "Family Medicine"],
    bio: "Dr Nigel Jones has looked after families around Woodlands for over 25 years and prides himself on the time he spends with every patient to optimize their care needs. Nigel particularly enjoys care of the elderly and had extensive experience in all fields of family medicine.",
  },
  {
    name: "Dr David Jameson",
    qualifications: "MBBS (Lond), FRACGP",
    imageUrl: `${base}/2022/10/doc-09.jpg`,
    interests: ["Skin Cancer", "Contraception", "Family Medicine"],
    bio: "I am a UK trained GP who came to Australia in 1993 for an outback adventure working with the Royal Flying Doctor Service in Kalgoorlie. A 1 year contract soon became 12 years in Kalgoorlie. The RFDS was followed with working for Bega Garnbarringu (AMS) and then a private GP/obstetric practice. I Joined the Woodlands Family Practice in 2007. I enjoy a family focused approach to my practice. I offer all GP services and have procedural skills which include, the fitting of contraceptive devices, such as Implanon and intrauterine devices (IUD’s) , skin cancer surveillance and removal of lesions. When not in the office I have played oboe for the WA doctor orchestra, love a bicycle ride and enjoying the beautiful West Australian outdoors.",
  },
  {
    name: "Dr Elizabeth Elderfield",
    qualifications: "MBBS (Hons), FRACGP, DCH",
    imageUrl: `${base}/2022/08/doc-04.jpg`,
    interests: ["Family Medicine"],
    bio: "Liz is a local UWA graduate (2000), with longstanding connections with Woodlands, and Woodlands Family Practice. Liz’s special interest is in Family Medicine.",
  },
  {
    name: "Dr Sheryl Powell",
    qualifications: "MBBS, FRACGP",
    imageUrl: `${base}/2022/08/doc-07.jpg`,
    interests: ["Family Medicine"],
    bio: "Dr Sheryl Powell has 30 years of experience as a general Practitioner in W.A. Sheryl enjoys all aspects of family medicine.",
  },
  {
    name: "Dr Thirza Feutrill",
    qualifications: "MBBS, FRACGP",
    imageUrl: `${base}/2022/08/doc-08.jpg`,
    interests: ["Women's Health"],
    bio: "I am a UWA graduate who has worked in general practice since completing my residency at SCGH in the late 90’s. I consider myself to be a well-rounded GP with a broad range of knowledge, however I do have a special interest in women’s health (from teens to menopause & beyond). I love the continuity of general practice and getting to know the whole family. Outside of work I am a mother of 3 who enjoys food, exercise and spending time with friends and family.",
  },
  {
    name: "Dr Leon Chu",
    qualifications: "MBBS (Hons), FRACGP, DCH",
    imageUrl: `${base}/2022/10/doc-11.jpg`,
    interests: ["Skin Checks", "Paediatrics", "Travel Medicine"],
    bio: "I am a local UWA medical graduate, I completed my hospital training at Sir Charles Gairdner Hospital. I hold a Skin Cancer College of Australasia Certificate of Dermatoscopy and a Diploma of Child Health. I enjoy providing care for all aspects of general medicine, paediatrics, preventative medicine, men’s and women’s health. I offer skin checks*, skin lesion excisions*, travel medicine consultations (including yellow fever vaccination)* and implanon insertions*. *Please note, comprehensive skin checks will only be performed as a separate dedicated appointment. Out-of-pocket fees apply for skin checks, procedures & travel medicine consultations, charges can vary as it based on the complexity & time of the consult. I also work part time with Silverchain Hospice doing community palliative care. In my free time, I like to keep fit and spend time with my family. Please enquire to reception for further assistance with practice fees.",
  },
  {
    name: "Dr Joseph Derwort",
    qualifications: "MBBS, FRACGP",
    imageUrl: `${base}/2022/11/dr-joseph-derwort.jpg`,
    interests: ["Family Medicine", "Aged Care", "Chronic Disease"],
    bio: "Joe grew up locally, studied medicine locally and lives locally. He has worked at Woodlands family practice since 2019 and received his fellowship in general practice in 2020. He enjoys all aspects of general practice including family medicine, aged care and chronic disease management. He also works with Silverchain’s palliative care service.",
  },
  {
    name: "Dr John Hanrahan",
    qualifications: "MBBS, FRACGP",
    imageUrl: `${base}/2022/10/doc-10.jpg`,
    interests: ["Family Medicine"],
    bio: "John was born and raised in Perth, and completed his Bachelor of Medicine and Surgery at the University of Western Australia in 2009. He trained at multiple tertiary hospitals in Western Australia before deciding that he valued the ongoing therapeutic relationships found in General Practice, and was awarded Fellowship of the Royal Australia College of General Practitioners in 2018. He enjoys all aspects of family medicine. When at home he tries to keep up with his wife and young daughter, and might find time to play the guitar or read a good book",
  },
  {
    name: "Dr Pia Jelinek",
    qualifications: "MBBS, BSc, CWH, FRACGP",
    imageUrl: `${base}/2022/08/doc-01.jpg`,
    interests: ["Women's Health", "Sports Medicine"],
    bio: "I was born and raised in WA. My undergraduate degree was a Bachelor of Science, completed at The University of Western Australia. I then went on to study a Bachelor of Medicine/Bachelor of Surgery at The University of Notre Dame Fremantle. Since graduating in 2016, I have worked in a variety of specialty areas across a number of hospitals in WA before specialising in general practice. I received the prize for the highest mark in WA for my final clinical examinations. I obtained a Certificate of Women's Health in 2020 and am competent in Mirena and Implanon insertion and removal. My GP extended skills training was in paediatrics. In addition, I have a special interest in preventive health, sports medicine and workers’ compensation. Outside of work, I enjoy being at the beach, keeping fit, watching the Eagles and spending time with friends and family.",
  },
  {
    name: "Dr Karen Wong",
    qualifications: "MBBS, BBioMedSc, FRACGP",
    imageUrl: `${base}/2025/08/Dr-Karen-Wong_web.jpg`,
    interests: ["Women's Health", "Skin Checks"],
    bio: "Dr Karen Wong graduated from the University of Notre Dame in Fremantle and has since gained a wealth of experience working in various hospitals across North Metropolitan Perth. Throughout her career she has had the opportunity to work in a diverse range of specialties, including oncology, paediatrics, geriatrics and general medicine, providing her with a comprehensive understanding of different aspects of healthcare. Dr Wong enjoys the wide variety of General Practice and being able to not only follow but advocate for patients along their health journey. Her broad clinical experience allows her to take a well-rounded approach to patient care, understanding the complexities that can arise across various age groups and medical conditions. In particular, Dr Wong has a keen interest in Implanon and IUD insertions, simple skin excisions and women’s health. Outside of her professional life, Dr Wong is a dedicated mother to her young family, which keeps her both busy and motivated. She also enjoys cooking, spending time with her family.",
  },
  {
    name: "Dr Byron Jameson",
    qualifications: "RACGP, MBBS",
    imageUrl: `${base}/2025/08/Dr-Byron-Jameson_web.jpg`,
    interests: ["Paediatrics", "Minor Procedures"],
    bio: "Dr Byron is a local graduate of the University of Western Australia (UWA), completing his studies in 2016. He brings a broad range of experience to general practice, gained from working in hospitals across Australia. Dr Byron has a special interest in paediatrics and minor procedures, which was developed during his time in the emergency department at Perth Children’s Hospital and the ICU at Royal Darwin Hospital. He is passionate about providing comprehensive and varied medical care to families in his community.",
  },
];
