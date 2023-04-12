import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      <Link
        href={"/code/repos"}
        className="bg-blue-500 px-4 py-2 rounded text-blue-100"
      >
        Back to Repositories
      </Link>
      <div className="mt-4">
        <Suspense fallback={<div>Loading repo...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <Repo name={name} />
        </Suspense>

        <Suspense fallback={<div>Loading directories...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <RepoDirs name={name} />
        </Suspense>
      </div>
    </div>
  );
};

export default RepoPage;
