import Spinner from "@/components/Loading/Spinner";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  );
}
