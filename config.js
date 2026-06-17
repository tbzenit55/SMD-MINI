const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    // =============================
    // DATABASE
    // =============================
    DATABASE_URL:
        process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        "",

    // =============================
    // BOT CORE SETTINGS
    // =============================
    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "918967859826",
    
    PREFIX: process.env.PREFIX || ".",

    // =============================
    // GLOBAL BRANDING
    // =============================
    BOT_NAME:
        process.env.BOT_NAME ||
        "ZENIT-X-MINI",

    OWNER_NAME:
        process.env.OWNER_NAME ||
        "TB-ZENIT",

    CAPTION:
        process.env.CAPTION ||
        "LOYAL FOR TEAM BLANK",

    STATUS_MSG:
        process.env.STATUS_MSG ||
        "Hello From ZENIT-X-MINI",

    NEWSLETTER_JID:
        process.env.NEWSLETTER_JID ||
        "120363175375282051@newsletter",

    MENU_IMG:
        process.env.MENU_IMG ||
        "https://i.postimg.cc/52GjGDgz/8b97d722-c3da-4938-8dae-c9d7a0938968.png",

    // =============================
    // SITE URL FOR PAIR CMD
    // =============================
    SITE_URL:
        process.env.SITE_URL ||
        "https://zenit-sc-mini.onrender.com",

    PORT:
        process.env.PORT ||
        "21604"
};
