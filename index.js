const AWS = require('aws-sdk');
const sm = new AWS.SecretsManager({ region: 'us-east-2' });

const getSecrets = async (SecretId) => {
    return await new Promise((resolve, reject) => {
        sm.getSecretValue({ SecretId }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}


exports.handler = async (event) => {
    var eventResult = JSON.stringify(event);
    return getSecrets(process.env.prod ? "wac-confidential-keys" : "wac-confidential-keys");
};