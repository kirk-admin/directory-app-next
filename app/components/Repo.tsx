import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/kirk-admin/${name}`,
    { next: { revalidate: 60 } }
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2 className="text-3xl">{repo.name}</h2>
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
    </>
  );
};

export default Repo;
