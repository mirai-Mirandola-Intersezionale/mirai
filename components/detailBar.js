export default function detailBar() {
  let lista = [
    "centro IST/MST",
    "centro HIV",
    "consultorio",
    "farmacia",
    "ospedale",
    "associazione",
  ];
  return (
    <>
      <datalist id="strutture">
        {lista.map((li) => {
          <option value={li} />;
        })}
      </datalist>
    </>
  );
}
