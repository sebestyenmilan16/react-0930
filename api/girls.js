/*
    REST API endpoint
    /api/girls
*/
import mysql from 'mysql2'

export const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

export default async function handler(req, res) {
    console.log("Some called /api/girls/ endpoint :) ")

    switch (req.method) {
        case "GET" :   
            const data = [
                    {id : 1, name: "Gipsz Jakabné"},
                    {id : 2, name: "Oláh Dzsesszika"}
            ]
            return res.status(200).json({result: data})    
            
        default :
            return res.status(405).json({error: "Method Not Allowed"})
            
        }


    
}