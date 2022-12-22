export type JumpResponse = {
  readableProduct: {
    id: string;
    title: string;
    number: number;
    nextReadableProductUri: string | null;
    prevReadableProductUri: string | null;
    publishedAt: string;
    toc: {
      items: Item[];
    };
  };
};

export type Item = {
  startAt: number;
  title: string;
};

export type JumpInfo = {
  id: string;
  title: string;
  publishedAt: string;
  nextUrl: string | null;
  prevUrl: string | null;
  mangas: Item[];
};
