import db from '../models/index'
import CRUDSevice from '../services/CRUDSevice';

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

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

// 1 object bao gio cung phai co key va IDBCursorWithValue
// object: {
//     key: '',
//     value:''
// }

let postCRUD = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    return res.send('post crud form server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDSevice.getAllUser();
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')

    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
}