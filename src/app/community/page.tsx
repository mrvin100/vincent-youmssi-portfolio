import type { Metadata } from "next";
import { CommunityItem } from "@/components/community-item";
import { community } from "@/data/community";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Community involvement, hackathons, and events by Vincent Youmssi.",
};

export default function CommunityPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Community
      </h1>
      <div className="divide-y divide-neutral-200">
        {community.map((item) => (
          <CommunityItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
