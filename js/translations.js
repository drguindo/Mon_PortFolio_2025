const translations = {
    fr: {
        // Navigation
        "nav-about": "Moi",
        "nav-skills": "Compétences",
        "nav-experience": "Expérience",
        "nav-education": "Education",
        "nav-research": "Recherche",
        "nav-portfolio": "Portfolio",
        "nav-recommendations": "Recommandations",
        "nav-contact": "Contact",
        
        // Section About
        "about-title": "Dr GUINDO Aly Abdoulaye",
        "about-subtitle": "Doctorant en Informatique Médicale",
        "about-description": "Spécialiste en E-Santé & Télémédecine et Chirurgie Maxillo-Facial & Stomatologie",
        "about-mobile": "Mobile",
        "about-download": "Télécharger CV",
        
        // Section Skills
        "skills-title": "Compétences",
        "skills-project": "Gestion de Projets & Analyse",
        "skills-data": "Analyse de Données",
        "skills-web": "Développement Web",
        "skills-medical": "Compétences Médicales & IA",
        "skills-soft": "Compétences Transversales",
        
        // Section Experience
        "experience-title": "Expérience Professionnelle",
        "experience-research": "Recherche & Développement",
        "experience-medical": "Expérience Médico-Chirurgicale",
        "experience-consulting": "Consulting & Formation",
        
        // Section Education
        "education-title": "Formation Académique",
        "education-doctorate": "Doctorat & Recherche",
        "education-specialized": "Formations Spécialisées",
        "education-medical": "Formations Médicales",
        "education-complementary": "Formations Complémentaires",
        
        // Section Research
        "research-title": "Recherche",
        
        // Section Portfolio
        "portfolio-title": "Réseaux Sociaux & Contact",
        
        // Section Awards
        "awards-title": "Prix et Distinctions Honorifiques",
        
        // Section Societies
        "societies-title": "Sociétés Savantes",
        
        // Section References
        "references-title": "Personnes de Référence",
        
        // Section Recommendations
        "recommendations-title": "Recommandations",
        
        // Section Contact
        "contact-title": "Contact",
        "contact-firstname": "Prénom",
        "contact-name": "Nom",
        "contact-email": "Email",
        "contact-phone": "Téléphone",
        "contact-subject": "Sujet",
        "contact-message": "Message",
        "contact-required": "Ces informations sont requises.",
        "contact-send": "Envoyer",
        
        // Footer
        "footer-copyright": "© MEDI-BAOBAB.ML",

        // Section About - Contenu détaillé
        "about-name": "Dr GUINDO Aly Abdoulaye",
        "about-position": "Doctorant en Informatique Médicale",
        "about-specialty": "Spécialiste en E-Santé & Télémédecine et Chirurgie Maxillo-Facial & Stomatologie",
        "about-phone": "Mobile",
        "about-email": "Email",
        "about-download-cv": "Télécharger CV",

        // Section Skills - Détails
        "skills-analysis": "Analyse & Modélisation (MERISE/UML)",
        "skills-project-management": "Gestion de Projets (Cascade/Agile)",
        "skills-scrum": "Scrum & Équipes Agile",
        "skills-excel": "Excel & Power BI",
        "skills-python": "Python & R",
        "skills-spss": "SPSS & Stata",
        "skills-frontend": "Front-end (HTML/CSS/JS)",
        "skills-backend": "Back-end (Python/PHP)",
        "skills-database": "Base de données (MySQL)",
        "skills-telemedicine": "Télémédecine & Téléxpertise",
        "skills-ai": "Prompt Engineering & IA",
        "skills-gdpr": "Conformité RGPD/HIPAA",
        "skills-communication": "Communication Interpersonnelle Non Violente",

        // Section Experience - Détails
        "experience-phd": "Thèse de Doctorat en Informatique Médicale",
        "experience-phd-desc": "Impact de la santé numérique sur la sécurité des patients et l'économie en zones de crise au Mali",
        "experience-phd-desc2": "Développement et intégration des dossiers médicaux structurés dans une plateforme interconnectée dans la région de Mopti",
        "experience-app": "Application de Numérisation des Dossiers Patients",
        "experience-app-desc": "Conception et mise en place d'une application pour la numérisation des dossiers en chirurgie maxillo-faciale",
        "experience-app-desc2": "Mémoire Master 2 en e-santé télémédecine",
        "experience-surgeon": "Chirurgien Maxillo-Facial & Stomatologue",
        "experience-surgeon-desc": "Prise en charge des blessés de guerre maxillo-faciaux",
        "experience-surgeon-desc2": "Gestion des pathologies traumatologiques, tumorales, infectieuses et malformatives",
        "experience-surgeon-desc3": "Interventions en contexte de crise sécuritaire",
        "experience-cicr": "Médecin Référent CICR-Mali",
        "experience-cicr-desc": "Référent pour la prise en charge des blessés de guerre maxillo-faciaux",
        "experience-cicr-desc2": "Facilitateur pour la formation des agents de santé (Mali et Niger)",
        "experience-who": "Consultant National OMS-Mali",
        "experience-who-desc": "Appui à l'organisation et évaluation des campagnes de vaccination",
        "experience-who-desc2": "Suivi des JNV contre la poliomyélite et la méningite",
        "experience-supervisor": "Superviseur Thèses de Médecine",
        "experience-supervisor-desc": "Accompagnement des étudiants en thèse",
        "experience-supervisor-desc2": "Supervision de la collecte et analyse des données patients",

        // Section Education - Détails
        "education-phd": "Doctorat en Informatique Médicale",
        "education-phd-school": "École Doctorale des Sciences et Technologies du Mali (EDSTM)",
        "education-phd-field": "Domaine : Sciences de la santé",
        "education-phd-subfield": "Sous-domaine : Santé publique",
        "education-phd-option": "Option : Informatique médicale",
        "education-master": "Master 2 en E-Santé et Télémédecine",
        "education-master-school": "Université Virtuelle du Burkina Faso",
        "education-master-specialization": "Spécialisation en santé numérique",
        "education-master-desc": "Gestion des systèmes d'information de santé",
        "education-diu": "DIU Antibiologie Antibiothérapie",
        "education-diu-school": "Institut Supérieur des Sciences de la Santé de Bobo Dioulasso",
        "education-diu-specialization": "Spécialisation en antibiologie en Afrique sub-saharienne",
        "education-ces": "Certificat d'Études Spécialisées",
        "education-ces-school": "UFR des Sciences Médicales d'Abidjan",
        "education-ces-specialty": "Spécialité : Stomatologie et Chirurgie Maxillo-Faciale",
        "education-md": "Doctorat en Médecine Générale",
        "education-md-school": "Faculté de Médecine de Pharmacie et d'Odonto-Stomatologie de Bamako",
        "education-md-desc": "Formation complète en médecine générale",
        "education-research": "Formation en Rédaction de Projet de Recherche",
        "education-research-school": "Institut International des Sciences et Technologies (IISTech) du Burkina Faso",
        "education-research-desc": "Rédaction de projets de recherche en santé",
        "education-research-desc2": "Recherche d'opportunités de financement",

        // Section Research - Détails
        "research-thesis": "Thèse en Informatique Médicale",
        "research-thesis-title": "SIH régional modulaire, offline-first et mobile-first pour la continuité des soins en zone de crise (projet MediBaobab)",
        "research-point1": "Aide à la décision d'orientation par moteur de règles (human-in-the-loop) — et non une IA prédictive",
        "research-point2": "Structuration de la référence / contre-référence inter-établissements en zone de crise",
        "research-point3": "Visualisation des indicateurs de santé via tableaux de bord",
        "research-point4": "Conformité aux principes de sécurité et de protection des données de santé (RGPD/HIPAA)",
        "research-point5": "Interopérabilité fondée sur le standard HL7 FHIR R4",

        // Section Awards - Détails
        "award-title": "Médaille du Mérite National",
        "award-subtitle": "Effigie Lion Debout",
        "award-desc": "Distinction honorifique pour la participation à la gestion des blessés du village d'Ogossagou (Bankass-Mali) du 23 Mars 2019.",

        // Section Societies - Détails
        "society1": "Société Africaine Francophone de Stomatologie, Chirurgie maxillofaciale et Chirurgie orale",
        "society1-desc": "Membre actif de la société savante",
        "society2": "SOCHIMA (Société malienne de Chirurgie)",
        "society2-desc": "Membre actif de la société savante",
        "society3": "Association Malienne de Stomatologie et Chirurgie Maxillo-Faciale (AMA-SCMF)",
        "society3-desc": "Membre actif de la société savante",

        // Section References - Détails
        "ref1-name": "Prof. Cheick Oumar BAGAYOKO",
        "ref1-title": "MD, PhD (Medical Informatics)",
        "ref1-role1": "Directeur Centre d'Innovation et de Santé Digitale, Digi-Santé-Mali, USTTB",
        "ref1-role2": "Directeur Centre d'Expertise et de Recherche en Télémédecine et E-santé CERTES",
        "ref1-contact": "Contact",
        "ref2-name": "Prof. Seydou BARRO",
        "ref2-title": "Enseignant-Chercheur en Informatique Médicale",
        "ref2-role1": "Directeur de l'Assurance Qualité (DAQ)",
        "ref2-role2": "Coordonnateur du Master d'Informatique Médicale et SIS",
        "ref2-role3": "Université Nazi BONI de Bobo Dioulasso",
        "ref2-role4": "Coordonnateur Technique RAFT-Burkina",

        // Section Recommendations - Détails
        "rec1": "Le Dr GUINDO a été un mentor remarquable dans l'accompagnement de nos mémoires de Master 2. Son expertise en télémédecine et e-santé, ainsi que son soutien constant dans nos projets personnels ont été essentiels pour notre réussite académique et professionnelle.",
        "rec1-author": "Collègues du Master 2 en Télémédecine et E-Santé",
        "rec1-org": "Université Virtuelle du Burkina Faso",
        "rec2": "Son accompagnement dans l'analyse et la visualisation des données médicales a révolutionné notre prise de décision à l'hôpital. Sa maîtrise des outils d'IA appliqués à la santé est remarquable.",
        "rec2-author": "Équipe Médicale",
        "rec2-org": "Hôpital Sominé Dolo de Mopti",
        "rec3": "Expert précieux en informatique médicale, il a su nous guider dans l'implémentation de solutions numériques adaptées à notre contexte. Son approche pédagogique rend accessible les concepts les plus complexes.",
        "rec3-author": "Collègues Médecins",
        "rec3-org": "Région de Mopti",
        "rec4": "Son accompagnement dans la préparation de nos thèses de doctorat en médecine a été précieux. Il nous a guidés dans la collecte, l'analyse et la visualisation des données, tout en nous initiant à l'utilisation de l'IA pour optimiser nos recherches.",
        "rec4-author": "Étudiants en Médecine",
        "rec4-org": "École de Médecine et de Pharmacie"
    },
    en: {
        // Navigation
        "nav-about": "About Me",
        "nav-skills": "Skills",
        "nav-experience": "Experience",
        "nav-education": "Education",
        "nav-research": "Research",
        "nav-portfolio": "Portfolio",
        "nav-recommendations": "Recommendations",
        "nav-contact": "Contact",
        
        // Section About
        "about-title": "Dr GUINDO Aly Abdoulaye",
        "about-subtitle": "PhD Student in Medical Informatics",
        "about-description": "Specialist in E-Health & Telemedicine and Maxillofacial Surgery & Stomatology",
        "about-mobile": "Mobile",
        "about-download": "Download CV",
        
        // Section Skills
        "skills-title": "Skills",
        "skills-project": "Project Management & Analysis",
        "skills-data": "Data Analysis",
        "skills-web": "Web Development",
        "skills-medical": "Medical Skills & AI",
        "skills-soft": "Soft Skills",
        
        // Section Experience
        "experience-title": "Professional Experience",
        "experience-research": "Research & Development",
        "experience-medical": "Medical-Surgical Experience",
        "experience-consulting": "Consulting & Training",
        
        // Section Education
        "education-title": "Academic Education",
        "education-doctorate": "Doctorate & Research",
        "education-specialized": "Specialized Training",
        "education-medical": "Medical Training",
        "education-complementary": "Complementary Training",
        
        // Section Research
        "research-title": "Research",
        
        // Section Portfolio
        "portfolio-title": "Social Networks & Contact",
        
        // Section Awards
        "awards-title": "Awards and Honors",
        
        // Section Societies
        "societies-title": "Learned Societies",
        
        // Section References
        "references-title": "References",
        
        // Section Recommendations
        "recommendations-title": "Recommendations",
        
        // Section Contact
        "contact-title": "Contact",
        "contact-firstname": "First Name",
        "contact-name": "Last Name",
        "contact-email": "Email",
        "contact-phone": "Phone",
        "contact-subject": "Subject",
        "contact-message": "Message",
        "contact-required": "These fields are required.",
        "contact-send": "Send",
        
        // Footer
        "footer-copyright": "© MEDI-BAOBAB.ML",

        // Section About - Detailed content
        "about-name": "Dr GUINDO Aly Abdoulaye",
        "about-position": "PhD Student in Medical Informatics",
        "about-specialty": "Specialist in E-Health & Telemedicine and Maxillofacial Surgery & Stomatology",
        "about-phone": "Mobile",
        "about-email": "Email",
        "about-download-cv": "Download CV",

        // Section Skills - Details
        "skills-analysis": "Analysis & Modeling (MERISE/UML)",
        "skills-project-management": "Project Management (Waterfall/Agile)",
        "skills-scrum": "Scrum & Agile Teams",
        "skills-excel": "Excel & Power BI",
        "skills-python": "Python & R",
        "skills-spss": "SPSS & Stata",
        "skills-frontend": "Front-end (HTML/CSS/JS)",
        "skills-backend": "Back-end (Python/PHP)",
        "skills-database": "Database (MySQL)",
        "skills-telemedicine": "Telemedicine & Tele-expertise",
        "skills-ai": "Prompt Engineering & AI",
        "skills-gdpr": "GDPR/HIPAA Compliance",
        "skills-communication": "Non-Violent Interpersonal Communication",

        // Section Experience - Details
        "experience-phd": "PhD Thesis in Medical Informatics",
        "experience-phd-desc": "Impact of digital health on patient safety and economy in crisis areas in Mali",
        "experience-phd-desc2": "Development and integration of structured medical records in an interconnected platform in the Mopti region",
        "experience-app": "Patient Records Digitization Application",
        "experience-app-desc": "Design and implementation of an application for digitizing records in maxillofacial surgery",
        "experience-app-desc2": "Master's thesis in e-health telemedicine",
        "experience-surgeon": "Maxillofacial Surgeon & Stomatologist",
        "experience-surgeon-desc": "Management of maxillofacial war injuries",
        "experience-surgeon-desc2": "Management of traumatic, tumoral, infectious and malformative pathologies",
        "experience-surgeon-desc3": "Interventions in security crisis context",
        "experience-cicr": "ICRC-Mali Medical Referent",
        "experience-cicr-desc": "Referent for the management of maxillofacial war injuries",
        "experience-cicr-desc2": "Facilitator for health worker training (Mali and Niger)",
        "experience-who": "WHO-Mali National Consultant",
        "experience-who-desc": "Support for the organization and evaluation of vaccination campaigns",
        "experience-who-desc2": "Monitoring of NIDs against poliomyelitis and meningitis",
        "experience-supervisor": "Medical Thesis Supervisor",
        "experience-supervisor-desc": "Support for thesis students",
        "experience-supervisor-desc2": "Supervision of patient data collection and analysis",

        // Section Education - Details
        "education-phd": "PhD in Medical Informatics",
        "education-phd-school": "School of Science and Technology of Mali (EDSTM)",
        "education-phd-field": "Field: Health Sciences",
        "education-phd-subfield": "Subfield: Public Health",
        "education-phd-option": "Option: Medical Informatics",
        "education-master": "Master's in E-Health and Telemedicine",
        "education-master-school": "Virtual University of Burkina Faso",
        "education-master-specialization": "Specialization in digital health",
        "education-master-desc": "Health information systems management",
        "education-diu": "DIU Antibiology Antibiotherapy",
        "education-diu-school": "Higher Institute of Health Sciences of Bobo Dioulasso",
        "education-diu-specialization": "Specialization in antibiology in sub-Saharan Africa",
        "education-ces": "Specialized Studies Certificate",
        "education-ces-school": "Medical Sciences UFR of Abidjan",
        "education-ces-specialty": "Specialty: Stomatology and Maxillofacial Surgery",
        "education-md": "Doctor of Medicine",
        "education-md-school": "Faculty of Medicine, Pharmacy and Odonto-Stomatology of Bamako",
        "education-md-desc": "Complete training in general medicine",
        "education-research": "Research Project Writing Training",
        "education-research-school": "International Institute of Science and Technology (IISTech) of Burkina Faso",
        "education-research-desc": "Health research project writing",
        "education-research-desc2": "Funding opportunities research",

        // Section Research - Details
        "research-thesis": "Thesis in Medical Informatics",
        "research-thesis-title": "Regional, modular, offline-first and mobile-first HIS for continuity of care in a crisis area (MediBaobab project)",
        "research-point1": "Referral-orientation decision support based on a rule engine (human-in-the-loop) — not predictive AI",
        "research-point2": "Structuring inter-facility referral / counter-referral in a crisis area",
        "research-point3": "Health indicator visualization via dashboards",
        "research-point4": "Compliance with health data security and protection principles (GDPR/HIPAA)",
        "research-point5": "Interoperability based on the HL7 FHIR R4 standard",

        // Section Awards - Details
        "award-title": "National Merit Medal",
        "award-subtitle": "Standing Lion Effigy",
        "award-desc": "Honorary distinction for participation in the management of wounded from the village of Ogossagou (Bankass-Mali) on March 23, 2019.",

        // Section Societies - Details
        "society1": "African Francophone Society of Stomatology, Maxillofacial Surgery and Oral Surgery",
        "society1-desc": "Active member of the learned society",
        "society2": "SOCHIMA (Malian Society of Surgery)",
        "society2-desc": "Active member of the learned society",
        "society3": "Malian Association of Stomatology and Maxillofacial Surgery (AMA-SCMF)",
        "society3-desc": "Active member of the learned society",

        // Section References - Details
        "ref1-name": "Prof. Cheick Oumar BAGAYOKO",
        "ref1-title": "MD, PhD (Medical Informatics)",
        "ref1-role1": "Director of Digital Health Innovation Center, Digi-Santé-Mali, USTTB",
        "ref1-role2": "Director of Expertise and Research Center in Telemedicine and E-health CERTES",
        "ref1-contact": "Contact",
        "ref2-name": "Prof. Seydou BARRO",
        "ref2-title": "Teacher-Researcher in Medical Informatics",
        "ref2-role1": "Director of Quality Assurance (DAQ)",
        "ref2-role2": "Coordinator of Medical Informatics and HIS Master's",
        "ref2-role3": "Nazi BONI University of Bobo Dioulasso",
        "ref2-role4": "Technical Coordinator RAFT-Burkina",

        // Section Recommendations - Details
        "rec1": "Dr. GUINDO has been an outstanding mentor in supporting our Master's theses. His expertise in telemedicine and e-health, as well as his constant support in our personal projects, have been essential for our academic and professional success.",
        "rec1-author": "Master's in Telemedicine and E-Health Colleagues",
        "rec1-org": "Virtual University of Burkina Faso",
        "rec2": "His support in the analysis and visualization of medical data has revolutionized our decision-making at the hospital. His mastery of AI tools applied to health is remarkable.",
        "rec2-author": "Medical Team",
        "rec2-org": "Sominé Dolo Hospital of Mopti",
        "rec3": "Valuable expert in medical informatics, he has guided us in implementing digital solutions adapted to our context. His pedagogical approach makes the most complex concepts accessible.",
        "rec3-author": "Medical Colleagues",
        "rec3-org": "Mopti Region",
        "rec4": "His support in preparing our medical PhD theses has been invaluable. He guided us in data collection, analysis and visualization, while introducing us to the use of AI to optimize our research.",
        "rec4-author": "Medical Students",
        "rec4-org": "School of Medicine and Pharmacy"
    }
}; 