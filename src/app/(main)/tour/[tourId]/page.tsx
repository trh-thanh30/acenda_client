import DetailsTour from "./components/DetailsTour";

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ tourId: string }>;
}) {
  const { tourId } = await params;
  return <DetailsTour tourId={tourId} />;
}
