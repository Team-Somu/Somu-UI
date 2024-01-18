function markdownToSlackPrBody(markdownBody) {
  // Markdown 코드 블록을 Slack 코드 블록으로 변환하는 함수
  function convertCodeBlocks(match, p1, offset, string) {
    return '```' + p1.trim() + '```';
  }

  // PR 내용을 Slack mrkdwn으로 변환
  const convertedBody = markdownBody
    .replace(/```(\w+)\n([\s\S]*?)\n```/gm, convertCodeBlocks) // 코드 블록 변환
    .replace(/### (.*)(\n|\r\n|\r)/g, '*$1*\n') // 세 번째 수준의 제목 변환
    .replace(/## (.*)(\n|\r\n|\r)/g, '*$1*\n') // 두 번째 수준의 제목 변환
    .replace(/# (.*)(\n|\r\n|\r)/g, '*$1*\n') // 첫 번째 수준의 제목 변환
    .replace(/- \[ \] (.*)/g, '- $1') // 체크박스 변환
    .replace(/<!----(.*)(\n|\r\n|\r)--> */g, '') // HTML 주석 제거
    .replace(/<details>([\s\S]*?)<\/details>/g, 'Details: $1'); // <details> 변환

  return convertedBody;
}
console.log('test');
console.log(
  `::set-output name=SLACK_MESSAGE::${markdownToSlackPrBody(
    process.env.PR_BODY,
  )}`,
); // yml 파일에서 github env로 생성한 환경변수
