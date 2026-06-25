import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import InsightDetailPage from "@/components/insights/InsightDetailPage";
import {
  getAllInsightSlugs,
  getInsightBySlug,
} from "@/lib/data/insights";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return { title: "Anlayış tapılmadı | AysDigital" };
  }

  return {
    title: `${article.title} | AysDigital`,
    description: article.description,
  };
}

export default async function InsightDetailRoute({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <InsightDetailPage article={article} />
      <Footer />
    </>
  );
}
