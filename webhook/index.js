'use strict';

/**
 * Export for lambda handler
 * @param event
 * @param context
 * @param cb
 */
exports.run = function(event, context, cb) {
  /**
   *
   *
   *
   * Write your callback code here. Make sure you validate the request
   * by checking the payload token with slack before processing.
   *
   *
   *
  */
  console.log(event.token);
  return cb(null, {"text": "change this to the response that would be displayed on the channel"});
};
