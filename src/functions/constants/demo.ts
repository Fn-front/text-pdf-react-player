const url = process.env.NEXT_PUBLIC_URL;

export const textDemo = [
  '通常のURL: https://example.com',
  'PDFファイル：https://example.com/document.pdfをご確認ください。',
  '動画ファイル：https://youtu.be/SyAO2288G3s?si=DueYSbDpMI9-GKJqをご覧ください。',
  `複数の種類: まずはこちらの資料（https://example.com/guide.pdf）を確認し、その後で動画（${url}example.mov）をご覧ください。`,
];
