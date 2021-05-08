export default function DetailBar() {
  const strutture = [
    "centro IST/MST",
    "centro HIV",
    "consultorio",
    "farmacia",
    "ospedale",
    "associazione",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="strutture">Scegli la struttura dalla lista:</label>
      <input list="strutture" name="strutture"></input>
      <datalist id="strutture">
        {/* {strutture.map((struttura) => {
          <option key={struttura} value={struttura} />;
        })} */}

        <option value="centro IST/MST" />
        <option value="centro HIV" />
        <option value="consultorio" />
        <option value="farmacia" />
        <option value="ospedale" />
        <option value="associazione" />
      </datalist>
    </div>
  );
}
