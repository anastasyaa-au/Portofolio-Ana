const translations = {
            de: {
                nav_about: "Über mich", nav_skills: "Kenntnisse", nav_projects: "Projekte", nav_contact: "Kontakt",
                hero_sub: "Angehende Auszubildende im Bereich IT",
                about_title: "Über mich",
                about_text1: "Ich habe meine Schulausbildung an einer Berufsfachschule (SMK) mit dem Schwerpunkt Multimedia abgeschlossen. Während meines Praktikums am Brawijaya Language Center konnte ich wertvolle Erfahrungen in der Administration sammeln, wie die Organisation von Sprachtests und die Datenverwaltung.",
                about_text2: "Aktuell bereite ich mich intensiv auf die B1-Prüfung vor, um meine berufliche Zukunft in Deutschland erfolgreich zu starten. Ich bin eine lernwillige, disziplinierte Person und freue mich darauf, meine Fähigkeiten in ein professionelles Team einzubringen.",
                skills_title: "Kenntnisse",
                skill_lang_title: "Sprachen",
                skill_lang_list: "<li>Indonesisch: Muttersprache</li><li>Deutsch: B1 (in Vorbereitung)</li><li>Englisch: Grundkenntnisse</li>",
                skill_it_title: "IT & Technik",
                skill_it_list: "<li>HTML, CSS & JavaScript (Basics)</li><li>Microsoft Office</li><li>Adobe Photoshop & CorelDRAW</li>",
                projects_title: "Meine Projekte",
                project1_desc: "Meine Grafikdesign-Arbeiten und mein kreatives Portfolio.",
                btn_code: "Source Code", btn_view: "Portfolio ansehen",
                contact_title: "Kontakt", contact_desc: "Haben Sie Interesse? Ich freue mich auf Ihre Nachricht!",
                contact_btn: "E-Mail Senden"
            },
            en: {
                nav_about: "About Me", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
                hero_sub: "Future Apprentice in IT",
                about_title: "About Me",
                about_text1: "I graduated from a vocational high school (SMK) majoring in Multimedia. During my internship at Brawijaya Language Center, I gained valuable experience in administration, such as organizing language tests and data management.",
                about_text2: "Currently, I am intensively preparing for the B1 German exam to successfully start my professional career in Germany. I am a fast learner, disciplined, and eager to contribute my skills to a professional team.",
                skills_title: "Skills",
                skill_lang_title: "Languages",
                skill_lang_list: "<li>Indonesian: Native</li><li>German: B1 Level (Preparing)</li><li>English: Basic</li>",
                skill_it_title: "IT & Tech",
                skill_it_list: "<li>HTML, CSS & JavaScript (Basics)</li><li>Microsoft Office</li><li>Adobe Photoshop & CorelDRAW</li>",
                projects_title: "My Projects",
                project1_desc: "My graphic design work and creative portfolio.",
                btn_code: "Source Code", btn_view: "View Portfolio",
                contact_title: "Contact", contact_desc: "Are you interested? I look forward to your message!",
                contact_btn: "Send Email"
            }
        };

        function setLanguage(lang) {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    if (key.includes('list')) {
                        element.innerHTML = translations[lang][key];
                    } else {
                        element.innerText = translations[lang][key];
                    }
                }
            });
            document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`btn-${lang}`).classList.add('active');
            document.documentElement.lang = lang;
        }

