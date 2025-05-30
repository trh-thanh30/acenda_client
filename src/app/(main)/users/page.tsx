export interface IUSER {
  id: number;
  name: string;
}
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return (
    <div>
      <h1>Users Lists</h1>
      <ul>
        {data.map((user: IUSER) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
