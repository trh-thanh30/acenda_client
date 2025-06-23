import SpinnerLarge from "@/components/Loading/SpinnerLarge";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SpinnerLarge />
    </div>
  );
}
