import db from '../models/index'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()

        return res.render('homepage.ejs', {
            data: JSON.stringify(data) // chuyen chuoi json thanh string
        }); //render tu trang homepage.ejs
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

// 1 object bao gio cung phai co key va IDBCursorWithValue
// object: {
//     key: '',
//     value:''
// }

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}