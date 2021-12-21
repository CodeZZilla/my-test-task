const express = require('express')
const router = express.Router()

const {GoogleAuth} = require('google-auth-library');
const {google} = require('googleapis');

router.get('/', async (req, res) => {
    const auth = new GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

    const client = await auth.getClient();

    const spreadsheetId = "1S6YOZLuM8ER8A0vdqteeNqM5ScX7iBO__ih1FQZ8Sok";
    const range = "Data"//name of sheet
    const sheet = google.sheets({version: "v4", auth: client})
    await sheet.spreadsheets.values.get({
        spreadsheetId,
        range
    }, (err, data) => {
        let output = new Map()
        for (let i = 1, len = data.data.values.length; i < len; i++) {
            output.set(data.data.values[i][0], {
                value: data.data.values[i][1],
                param: data.data.values[i][2]
            })
        }
        res.json(Object.fromEntries(output))
    })
})

module.exports = router;