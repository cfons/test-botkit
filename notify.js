
var request = require("request");
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [1, new schedule.Range(2, 5)];
rule.hour = [9, new schedule.Range(10, 18)];
rule.minute = 0;

var j = schedule.scheduleJob(rule, function(){
  var options = { method: 'POST',
    url: 'https://hooks.slack.com/services/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',
    headers:
     {'Content-Type': 'application/json' },
    body: { text: 'Notify: Beeh! <@U6SGT1VSR>, tu travailles?' },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});
