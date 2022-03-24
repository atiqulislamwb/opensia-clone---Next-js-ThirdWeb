import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "kf348kq2",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skJ9fAuIjC2ppeyh8QKN3zauVECSBfohWlI90srWd5eHtlutROuni9EQF9TTSrWs6fk0B84jz766P0CejFQ0Vjx1SeLE6pC2mg9t5a0gz1EkUeNdRQDcMMwYUYDEqqjRRAYZIT2qDSBEZ1j98zO9b1moKzgbx72BNT6z6qRuOO93VN09Ym6o",
  useCdn: true,
});
