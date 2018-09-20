require("./sessionHandle.js");
module.exports.logout=function(req,res){
    if(req.session.page_views)
    {
    req.session.destroy();
    return res.send("Logged out");
    }
    else
    {
        return res.send("No active session");
    }
    
    
}