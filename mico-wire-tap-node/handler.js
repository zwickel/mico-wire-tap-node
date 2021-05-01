"use strict";

module.exports = async (functionInput, callback) => {
    const cloudEvent = JSON.parse(functionInput)

    let result = [];
    cloudEvent["routingslip"] = [['wire-tap']];
    result.push(JSON.parse(functionInput));
    result.push(cloudEvent);

    return result;
}
