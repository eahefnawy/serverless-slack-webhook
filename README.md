# 💬 awsm-slack-webhook

In your JAWS project root directory, run: 
 
```
npm install awsm-slack-webhook
```

open `<JAWS project name>/aws_modules/awsm-slack-webhook/webhook/index.js` and add your callback code. This is the code that will handle the webhook.

when you're done, deploy with:

```
jaws dash
```
After deployment, add this webhook URL to Slack: `<endpoint>/webhooks/slack`, and test it out!
