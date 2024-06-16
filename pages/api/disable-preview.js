
export default function handler(req, res) {
    res.clearPreviewData();
   res.end('preview mode disable');
}
// http://localhost:3000/api/disable-preview
// http://localhost:3000/api/preview?redirect=/newss
// newss
