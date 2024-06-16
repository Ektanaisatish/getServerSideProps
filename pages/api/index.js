export default function handler(req,res){
    res.status(200).json({name:"api route"})
}

//params file [[...params.js]] folder in api due to this code /one/two/three output
// export default function handler(req,res){
//    const params=req.query.params
//    console.log(params)
//    res.status(200).json(params)
// }