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
    }
};

export default ViewController;
