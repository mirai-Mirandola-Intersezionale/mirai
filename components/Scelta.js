export default function Scelta() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="strutture">Scegli la struttura dalla lista:</label>
      <input list="strutture" name="strutture"></input>
      <datalist id="strutture">
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
