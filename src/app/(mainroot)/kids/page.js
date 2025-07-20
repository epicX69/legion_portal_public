import KidsPageClientWrapper from "./KidsPageClientWrapper";
import "./styles.scss";

async function getGames() {
  const res = await fetch(
    `https://raw.githubusercontent.com/Xperiement/repo/main/sample.json`
  );
  const games = await res.json();
  return games;
}

export default async function KidsPage() {
  const games = await getGames();

  return (
    <div className="kidsPanel">
      <KidsPageClientWrapper games={games} />
    </div>
  );
}
