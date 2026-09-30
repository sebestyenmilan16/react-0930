/*
    REST API endpoint
*/

export default async function handler(req, res) {
    console.log("Some called /api/girls/ endpoint :) ")

    switch (req.method) {
        case "GET" :   
            const data = [
                    {id : 1, name: "Gipsz Jakabné"},
                    {id : 2, name: "Oláh Dzsesszika"}
            ]
            return res.status(200).json("OK")    
            break;
        default :
            return res.status(405).json({error: "Method Not Allowed"})
            break;
        }

    
}