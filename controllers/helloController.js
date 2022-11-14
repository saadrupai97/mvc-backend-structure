exports.helloGet=(req,res)=>{
    res.status(200).json({status:"Success", data:"hello get"});
}

exports.helloPost=(req,res)=>{
    res.status(201).json({status:"Success", data:"hello post"});
}


