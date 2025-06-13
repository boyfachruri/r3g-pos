// utils/formatPath.ts
export function formatPath(path: string): string {
  if (!path) return "";

  const segments = path.replace(/^\/+|\/+$/g, "").split("/");

  const mainIndex = segments.indexOf("main");
  if (mainIndex === -1 || mainIndex === segments.length - 1) return "";

  const targetSegment = segments[mainIndex + 1];

  const formatted = targetSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formatted;
}
