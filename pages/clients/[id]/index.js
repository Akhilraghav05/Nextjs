import { useRouter } from "next/router";
function ClientsProjectPage() {
  const routerInfo = useRouter();
  console.log(routerInfo.query);

  function loadProject (){
    routerInfo.push(`/clients/${routerInfo.query.id}/abc`)
  }
  return (
    <div>
      <div>The projects of given clients</div>
      <button onClick={loadProject}>Load Project info</button>
    </div>
  );
}
export default ClientsProjectPage;
