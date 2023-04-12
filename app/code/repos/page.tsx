import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/kirk-admin/repos",
    { next: { revalidate: 60 } }
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="w-full">
      <h1 className="text-3xl">Repositories</h1>
      <ul>
        {repos &&
          repos.map((repo: any) => (
            <li
              key={repo.id}
              className="py-4 bg-slate-800 text-slate-300 px-2 w-full mt-2"
            >
              <Link href={`/code/repos/${repo.name}`}>
                <h3 className="text-2xl">{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="mt-2 flex gap-2 items-center">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ReposPage;
