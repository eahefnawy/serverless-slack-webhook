# 💳 serverless-slack-webhook

In your Serverless project root directory, run:

```
sls module install https://github.com/eahefnawy/awsm-slack-webhook
```

open `<serverelss project name>/back/modules/sl-slack-webhook/lib/index.js` and add your callback code. This is the code that will handle the webhook.

when you're done, deploy with:

```
sls function deploy
sls endpoint deploy
```
After deployment, add the webhook url to Slack and test it out!
