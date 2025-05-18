import { getLatestGames } from '../lib/rawg';
import NewsCard from '../components/NewsCard';

export default async function HomePage() {
  const games = await getLatestGames();

  return (
    <section className="grid gap-6 md:grid-cols-3">
      {games.map((game) => (
        <NewsCard key={game.id} game={game} />
      ))}
    </section>
  );
}
