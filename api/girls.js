/*
    REST API endpoint
    /api/girls
*/
import mysql from 'mysql2'

export function getCreatedConnection() {
    return {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    }
    
}

//export const getCreatedConnection = (connectionOptions) => mysql.createConnection(connectionOptions)
//const conn = getCreatedConnection(connectionOptions)

export default async function handler(req, res) {
    let conn = null; 
    console.log("Some called /api/girls/ endpoint :) Method: ", req.method) 

    switch (req.method) {
        case "GET" :  
            conn = getCreatedConnection()
            const sql = `SELECT id, first_name, last_name, birth_at, `
            + `children, weight, waist, cup, url FROM girls ORDER BY id LIMIT 100`
            conn.query(sql, (error, result, fields)=>{
                //conn.destroy()
                console.log("GET /api/girls result: ", result)
                console.warn("GET /api/girls error: ", error)
                return res.status(error ? 500 : 200).json({error, result})
                
            })
            conn.destroy()
            return res.status(200).json({result})    
            
        default :
            conn.destroy()
            return res.status(405).json({error: "Method Not Allowed"})
            
        }


    
}