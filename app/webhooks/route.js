import { CACHE_TAG_REVIEWS } from "@/lib/review";
import { revalidateTag } from "next/cache";

export async function POST() {
  const payload = await request.json();
  if (payload.modal === "review") {
    revalidateTag(CACHE_TAG_REVIEWS);
  }
  return new Response(null, { status: 204 });
}
