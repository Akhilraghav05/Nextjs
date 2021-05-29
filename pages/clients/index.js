import Link from "next/link";

function Clients() {
  const clients = [
    {
      id: "akhil",
      name: "Akhil",
    },
    {
      id: "raghav",
      name: "Raghav",
    },
  ];
  return (
    <div>
      <div>Clients page</div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Clients;
