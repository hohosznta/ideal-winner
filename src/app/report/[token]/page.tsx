import { api } from "@/lib/api";
import { ReportViewer } from "@/components/report/ReportViewer";

interface Props {
  params: Promise<{ token: string }>;
}

export default async function ReportPage({ params }: Props) {
  const { token } = await params;

  const [meta, allPages] = await Promise.all([
    api.getReport(token),
    api.getAllPages(token),
  ]);

  return <ReportViewer meta={meta} pages={allPages} />;
}
