
export default function handler(req,res) {
    res.setPreviewData({user:'ekta'})
    res.redirect(req.query.redirect)
}
