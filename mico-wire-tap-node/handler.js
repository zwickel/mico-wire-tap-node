"use strict";

module.exports = async (functionInput, callback) => {
    // var kafka = require('kafka-node'),
    //     Producer = kafka.Producer,
    //     client = new kafka.KafkaClient({ kafkaHost: '172.17.0.12:9092' }),
    //     producer = new Producer(client);

    // var cloudEvent = JSON.parse(JSON.stringify(functionInput));
    let result = [];
    // contextCopy["routingslip"] = [['secondary-channel']];
    // let routingslip = [['secondary-channel']];
    // let functionInputCopy = { ...functionInput, routingslip };
    // result.push(context);
    // result.push(contextCopy);
    result.push(functionInput);
    result.push(functionInput);
    // result.push(functionInputCopy);

    // producer.on('ready', function () {
    //     producer.send([{ topic: 'wire-tap-channel', messages: [contextCopy] }], function (err, data) { });
    // });

    // return { status: "done" }
    return result;
}
