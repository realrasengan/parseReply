function extractJson(str) {
  const regex = /{(?:[^{}]|{[^{}]*})*}/g;
  const jsonObjects = [];
  const matches = str.match(regex);
  if (!matches)
    return jsonObjects;
  for (const match of matches) {
    try {
      const jsonObject = JSON.parse(match);
      jsonObjects.push(jsonObject);
    } catch (error) {
      continue;
    }
  }
  return jsonObjects;
}
function extractCode(str) {
  const regex = /```(\w+)?\n([\s\S]*?)```/g;
  const codeBlocks = [];
  const matches = str.matchAll(regex);
  for (const match of matches) {
    const language = match[1] || null;
    const code = match[2];
    codeBlocks.push({ language, code });
  }
  return codeBlocks;
}


const parseReply = {
  extractJson: extractJson,
  extractCode: extractCode,
}

export default parseReply;
