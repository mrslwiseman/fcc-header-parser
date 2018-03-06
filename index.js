const express = require('express');
const app = express();
const path = require('path');
const parse = require('./parsers')

app.get('/api', (req,res) => {
    try {
        const ip = parse.ip(req);
        const language = parse.lang(req);
        const user_agent = parse.userAgent(req);
        res.json({
            ip,
            language,
            user_agent
        })
    } catch(e){
        res.json({
           message: 'Err, Houston, we have a problem.',
           error: e.message
        })
    }
})

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
    
});

module.exports = server;
