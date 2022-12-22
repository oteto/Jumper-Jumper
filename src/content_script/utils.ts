import { JumpInfo, JumpResponse } from "../types";

export function pageJump(page: number) {
  location.href = `#page-${page}`;
}

export async function getJumpInfo(url: string): Promise<JumpInfo> {
  const json: JumpResponse | undefined = await fetch(url + ".json")
    .then((r) => r.json())
    .catch(console.error);

  if (json === undefined) {
    throw new Error("ジャンプの読み込みに失敗したよ");
  }
  const info = json.readableProduct;

  return {
    id: info.id,
    title: info.title,
    publishedAt: info.publishedAt,
    prevUrl: info.prevReadableProductUri,
    nextUrl: info.nextReadableProductUri,
    mangas: info.toc.items,
  };
}
