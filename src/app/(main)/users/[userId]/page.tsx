import { notFound } from "next/navigation";

export async function genUserWithId(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();
  return data;
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await genUserWithId(userId);
  if (!user) {
    notFound();
  }
  return <div>{user.name}</div>;
}
