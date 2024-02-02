export const SKILLS  = [
    {
        title: "Frontend",
        icon: "browser.png",
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3", percentage: "75%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "React.js", percentage: "70%" },
        ],
    },
    {
        title: "Backend",
        icon: "gear.png",
        skills: [
            { skill: "Node.js", percentage: "70%" },
            { skill: "Express.js", percentage: "65%" },
        ],
    },
    {
        title: "Tools",
        icon: "tools.png",
        skills: [
            { skill: "Git & GitHub", percentage: "75%" },
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "MongoDB", percentage: "70%" },
            { skill: "Responsive Design", percentage: "70%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: "chat.png",
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to Detail", percentage: "75%" },
        ],
    }
];

export const PROJECTS = [
    {
        title: "InsightEcho Blog App",
        tech: "MERN Stack, Jwt, bcrypt",
        description: [
            "The InsightEcho Blog Page project is a web application designed to showcase blog posts in a clean and organized manner.",
            "Built with React on the frontend, Node.js and Express on the backend, and MongoDB as the database, this project provides a seamless user experience for reading and interacting with blog content.",
            "Key features include: User Authentication, Features post selection, List of Authors, Editing posts, Password hashing and many more",
            "The Frontend of this project has been deployed with Vercel for a smooth user experience, and backend powered by Render for reliable performance. "
        ],
        live: "https://insight-echo-client.vercel.app/",
        code: "https://github.com/Sahil-Kumar7/InsightEcho-Client.git"
    },
    {
        title: "Certificate Generator Mailing System",
        tech: "MERN Stack, api2pdf, nodemailer",
        description: [
            "Developed a Node.js/Express server that generates and sends customized certificates via email.",
            "Efficiently distributed custom certificates to specified emails from uploaded Excel files, streamlining the process with automated precision.",
            "Utilized xlsx for Excel-to-JSON conversion and leveraged api2pdf for custom certificate generation from JSON data.",
            "Implemented Nodemailer to send certificates to email recipients listed in the Excel file."
        ],
        live: "https://tree-certificate-generator.vercel.app/",
        code: "https://github.com/Sahil-Kumar7/Certificate-Generator.git"
    },
    {
        title: "Book Management System",
        tech: "MERN Stack, notistack, axios",
        description: [
            "Developed a full-stack book management system utilizing React.js for the frontend and Express.js with MongoDB for the backend.",
            "Implemented features for creating, editing, and deleting book entries, providing a seamless CRUD (Create, Read, Update, Delete) experience for users.",
            "Utilized Axios for handling HTTP requests between the frontend and backend, ensuring smooth data transfer and interaction.",
            "Enhanced user experience with loading spinners and Notistack notifications to provide feedback on successful operations or errors encountered during book management tasks."
        ],
        live: "",
        code: "https://github.com/Sahil-Kumar7/BookStore.git"
    }
]