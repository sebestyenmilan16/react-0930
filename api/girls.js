/*
    REST API endpoint
*/

export default async function handler(req, res) {
    console.log("Some called /api/girls/ endpoint : ) ")
    return res.status(200).json("OK")
}