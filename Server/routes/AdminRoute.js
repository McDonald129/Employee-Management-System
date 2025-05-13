import express from 'express';
import con from '../utils/db.js'
const router = express.Router()
import jwt from 'jsonwebtoken'


router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query Error" })
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign({ role: "admin" }, "jwt_secret_key", { expiresIn: '1d' })
        }
    })
})

    export { router as adminRouter }
