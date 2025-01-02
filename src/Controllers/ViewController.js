import Enums from "../Config/Enums.js";

const ViewController = {
    home: async (req, res) => {
        const view = {
            title: 'Ana Səhifə',
            body: "Home/Index.ejs",
            js: null
        };
        res.render('Main', view);
    },
    login: async (req, res) => {
        const view = {
            title: 'Ana Səhifə',
            body: "Auth/Login.ejs",
            js: null
        };
        res.render('Main', view);
    },
    register: async (req, res) => {
        const view = {
            title: 'Ana Səhifə',
            body: "Auth/Register.ejs",
            js: null
        };
        res.render('Main', view);
    },
    shopList: async (req, res) => {
        const view = {
            title: 'Shop',
            body: "Shop/List.ejs",
            js: null
        };
        res.render('Main', view);
    },
    aboutUs: async (req, res) => {
        const view = {
            title: 'Haqqımızda',
            body: "AboutUs/Index.ejs",
            js: null
        };
        res.render('Main', view);
    },
    contactUs: async (req, res) => {
        const view = {
            title: 'Bizimlə Əlaqə',
            body: "ContactUs/Index.ejs",
            js: 'ContactUs.js'
        };
        res.render('Main', view);
    },
    addJob: async (req, res) => {
        const view = {
            title: 'Yeni vakansiya',
            body: "Jobs/Add.ejs",
            js: 'NewJob.js'
        };
        res.render('Main', view);
    },
    adminIndex: async (req, res) => {
        const view = {
            title: 'Admin Panel',
            body: "Home/Index.ejs",
            js: "Index.js"
        };
        res.render('Admin/Main', view);
    },

    adminCategoryView: async (req, res) => {
        const view = {
            title: 'Categories - Admin Panel',
            body: "Category/Index.ejs",
            js: "Category.js"
        };
        res.render('Admin/Main', view);
    },


    // education: (req, res) => {
    //     const educationData = Enums.Education;

    //     res.status(200).json(educationData);
    // },
    // experience: (req, res) => {
    //     const experience = Enums.Experience;
    //     res.status(200).json(experience);
    // },
    // sendMail: async (req, res) => {
    //     const response = await sendEmail(req.body.data);
    //     res.status(200).json({ status: response.status, message: response.message });

    // },
    // statistics: async (req, res) => {
    //     const company = await CompanyService.count()
    //     const vacancy = await JobDataService.count()
    //     const visitor = await VisitorService.count()
    //     res.status(200).json({ status: 200, message:"",data:{company,vacancy,visitor} });
    
    // }
};

export default ViewController;
