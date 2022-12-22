import { getJumpInfo, pageJump } from "./utils";

async function main() {
  const info = await getJumpInfo(location.href);

  const prevInfo = await (async () => {
    if (info.prevUrl === null) {
      return;
    }
    return await getJumpInfo(info.prevUrl);
  })();

  const nextInfo = await (async () => {
    if (info.nextUrl === null) {
      return;
    }
    return await getJumpInfo(info.nextUrl);
  })();

  const reg = new RegExp(/\((巻頭カラー|モノクロ冒頭ページ)\)$/);
  const mangaInfos = info.mangas.map((m) => {
    const title = m.title.replace(reg, "");
    const page = m.startAt.toString().padEnd(3, " ");
    const prev = prevInfo?.mangas.find((pm) => pm.title.startsWith(title));
    const next = nextInfo?.mangas.find((nm) => nm.title.startsWith(title));

    return ` ・p.${page} ${title}\t前の号の掲載: ${
      prev ? `p.${prev.startAt}` : "なし"
    }\t次の号の掲載: ${next ? `p.${next.startAt}` : "なし"}`;
  });

  console.log(`# ${info.title}
${info.publishedAt}

- 前の号 ${info.prevUrl ?? "なし"}
- 次の号 ${info.nextUrl ?? "なし"}

## 今週の掲載漫画

${mangaInfos.join("\n")}
`);

  pageJump(1);
}

main();
