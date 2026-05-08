import express from 'express';

const router = express.Router();

router.get('/skills', (req, res, next)=>{
    const skills = {
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "coding": [
                        { "title":"HTML",       "value": "98%", "width": "98%"},
                        { "title":"CSS",        "value": "90%", "width": "90%"},
                        { "title":"JavaScript", "value": "80%", "width": "80%"},
                        { "title":"TypeScript", "value": "90%", "width": "90%"},
                        { "title":"React",      "value": "88%", "width": "88%"},
                        { "title":"Node.js",    "value": "75%", "width": "75%"}
                    ],
            "tools": [
                        "Visual Studio Code",
                        "IntelliJ",
                        "Android Studio",
                        "Eclipse",
                        "MySQL Workbench"
                    ],
            "etc":  [ "Git", "Scrum Master", "SVN"]
        }

        res.json({"result": skills});
});


router.get('/about', (req, res, next)=>{
    const about = {
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat odio dicta necessitatibus libero magnam est alias nisi laborum nesciunt!",
            "majors": [
                {"icon": "html", "title": "Front-end", "subjects": "HTML, CSS, JavaScript, TypeScript, React, WebAPIs"},
                {"icon": "mobile", "title": "Mobile", "subjects": "Android Studio, React Native, iOS, Swift, Java, Kotlin"},
                {"icon": "server", "title": "Back-end", "subjects": "Java, JavaScript, Go, Kotlin, Spring, Spring Boot"}
            ],
            "jobs": [
                {   "img":"images/jobs/google.png", 
                    "alt":"google", 
                    "name":"Google as Junior Software Engineer", 
                    "period":"2019 Oct - Until now"
                },
                {   "img":"images/jobs/samsung.png", 
                    "alt":"samsung", 
                    "name":"Samsung as Junior Software Engineer", 
                    "period":"2010 Oct - 2019 Oct"
                }
            ]
        }
    res.json({"result": about});
});


router.get('/home', (req, res, next)=> {
    const home = {
            "img": "images/favicon.ico",
            "alt": "photo",
            "title": "Junior Developer",
            "name": "Judy",
            "description": "A software engineer currently residing in Seoul, South Korea",
            "href": "#",
            "menuName": "contact me"
        }
    res.json({"result": home});
});


export default router;