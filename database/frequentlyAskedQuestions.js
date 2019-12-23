var myQuestionsAndAnswers = [
    {
        "question": `I am interested. How do I start?`,
        "answer": `Please email Mr. Steve at <a href="mailto:engkwalk@nus.edu.sg?Subject=iCode4NUS Enquiry">engkwalk@nus.edu.sg</a> ` 
        + "indicating your NUSNET ID. We will register you for a SDP account so you can develop and deploy your product there."
    },    
    {
        "question": "I am currently hosting my project on this platform. How do I port my stuff over to SDP?",
        "answer": `Please email Mr. Steve at <a href="mailto:engkwalk@nus.edu.sg?Subject=iCode4NUS Enquiry">engkwalk@nus.edu.sg</a> ` 
        + "indicating your NUSNET ID. " + "Please indicate as much details about your project as possible so that we can help you migrate your product to SDP."
    },
    {
        "question": "I need customisations or other requests for my product to deploy to SDP.",
        "answer": `Please email Mr. Steve at <a href="mailto:engkwalk@nus.edu.sg?Subject=iCode4NUS Enquiry">engkwalk@nus.edu.sg</a> ` + ", \n" 
        + "indicating your NUSNET ID. " + "Please indicate as much details about your project as possible so that we can assist you."
    },   
    {
        "question": "I am a non-Computing students. Can I join?",
        "answer": `Yes sure! Students from all NUS faculties are welcomed to use this platform. `
    },
    {
        "question": "How do I create an account for SDP?",
        "answer": `Please email Mr. Steve at <a href="mailto:engkwalk@nus.edu.sg?Subject=iCode4NUS Enquiry">engkwalk@nus.edu.sg</a> ` + ", \n" 
        + "indicating your NUSNET ID. We will register you for a SDP account so you can develop and deploy your product there."
    },
    {
        "question": "Do I own the code for the projects deployed to the Student Development Platform?",
        "answer": "Yes. You own the code. However, NUS has the right to publish the applications campus-wide."
    },
    {
        "question": "What are the rights to my application? ",
        "answer": "Students own the code. However, NUS has the right to publish the applications campus-wide."
    },
    {
        "question": "Do I need to comply with any requirements or restrictions? Is there any kind of content that will not be allowed?",
        "answer": "The applications should be relevant to the NUS community. Additionally, your applications must not include \n" 
        + "any of the following content: Infringing Content, Nudity or sexual content, Illegal Content, Harmful or dangerous content, Hateful content, etc."
    },
    {
        "question": "My product is not that relevant to the NUS community. Can I still join SDP?",
        "answer":`Please email Mr. Steve at <a href="mailto:engkwalk@nus.edu.sg?Subject=iCode4NUS Enquiry">engkwalk@nus.edu.sg</a> ` + ", \n" 
        + "indicating your NUSNET ID. We will assess your project to see if it fulfills the criteria."
    },
    {
        "question": "Do I need to make sure that my code doesn't have security vulnerabilities?",
        "answer": "Yes. Your code will be scanned for vulnerabilities and we will make the necessary changes to ensure the security of \n" 
        + "your project as well as the whole platform."
    },
    {
        "question": "Will I be given administrative or root access for my self-service EC2 instance?",
        "answer": "Yes. You will be given root privilege to install the necessary tools for your product to aid you in the development and deployment process."
    },
    {
        "question": "Do I need to pay for hosting/storage on SDP?",
        "answer": "No. ALL of the cost is on us."
    },
    {
        "question": "What technologies are currently available?",
        "answer": "Amazon EC2 (Amazon Elastic Compute Cloud) is currently available at the moment. "
        + "There will be more features and services provided by SDP in the next few months. Stay tune."
    },
    {
        "question": "How much storage is available for my product?",
        "answer": "You will be given as much storage as needed to scale your project, as long as the storage is relevant to the application. " 
        + "You can freely develop your product on the platform, storage and hosting fees are on us!"
    },
    {
        "question": "Non-NUS students contributed to my project. Can I deploy my project on SDP? Do non-NUS students have access to the platform?",
        "answer": "Your project should have substantial contribution from NUS students. If you are unsure, please email Mr. Steve at " 
        + `<a href="mailto:engkwalk@nus.edu.sg?Subject=iCode4NUS Enquiry">engkwalk@nus.edu.sg</a> for further assistance. \n`
        + " Your project will possibly be able to deploy on SDP. " 
        + "However, non-NUS students won't be given access to our SDP. NUS students can share their accounts with non-NUS contributors for them to access the platform."
    },
    {
        "question": "What licenses are we gonna use for the platform?",
        "answer": "SDP uses (a variation of) MIT License. If your open-source project hasn't adopted a license, we shall use SDP's license. "
        + "If your project is currently using MIT License, great! There should be not much of licensing issues when integrating to SDP. "
        + "If your project is using stricter licenses e.g. Apache or GNU, please email Mr. Steve at " 
        + `<a href="mailto:engkwalk@nus.edu.sg?Subject=iCode4NUS Enquiry">engkwalk@nus.edu.sg</a>` + " for further assistance. \n" 
    },
    {
        "question": "How secure is your platform?",
        "answer": "Our platform is very secure. Every project on board will be scanned for vulnerabilities and we will make the necessary changes "
        + "to ensure the security of each product and the platform in general."
    },
    {
        "question": "I want to give feedback/comments on SDP.",
        "answer": "Please do so here :"
    },
]

showFAQSection(myQuestionsAndAnswers);
