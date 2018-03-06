function ip(req){
    const regex = RegExp(/(\d.+\d)/, 'g');
    const ip = req.ip;
    const test = ip.match(regex);
    const parsed = test ? test[0] : 'Unable to parse IP.'
    return parsed;
}

function lang(req){
    return req.acceptsLanguages()[0];
}

function userAgent(req){
    const regex = /\((.+?)\)/;
    const parsed = req.headers['user-agent'].match(regex)[1];
    return parsed;
}

module.exports = {
    ip,
    lang,
    userAgent
}