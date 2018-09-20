require("./sessionHandle.js");

module.exports.dash=function(req,res){
    
    if (req.session.page_views) {
        res.send("Dashboard page views "+req.session.page_views);
    }
    else
    return res.send('Dashboard');

}