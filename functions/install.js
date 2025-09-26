import apps from '../data/apps.json';

export default function handler(req, res) {
    const { i: app } = req.query;
    if (!app) return res.status(400).send("Missing app parameter");

    const userAgent = req.headers['user-agent'] || '';
    let platform;

    if (/windows/i.test(userAgent)) platform = 'windows';
    else if (/mac/i.test(userAgent)) platform = 'mac';
    else return res.status(400).send("Unsupported platform");

    const appData = apps[app.toLowerCase()];
    if (!appData || !appData[platform]) return res.status(404).send("App not found");

    const installerURL = appData[platform][0]; // pick first mirror for MVP
    res.writeHead(302, { Location: installerURL });
    res.end();
}
