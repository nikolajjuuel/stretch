const parseTranscripts = (messages) => {
  allMessages = [];
  for (const id in messages) {
    const messageInfo = messages[id];
    const origin = messageInfo.origin;
    const message = messageInfo.message;
    const complete = `${origin}: ${message}`
    allMessages.push(complete)

  }

  return allMessages
}