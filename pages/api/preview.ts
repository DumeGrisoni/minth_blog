import type { NextApiRequest, NextApiResponse } from 'next';

export default function preview(
  _req: NextApiRequest,
  res: NextApiResponse
): void {
  res.setPreviewData({});
  res.writeHead(307, { Location: '/' });
  res.end();
}
