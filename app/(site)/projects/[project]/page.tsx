import React from "react";
import { getProject } from "@/sanity/sanity-utils";
// import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Body from "../../components/Body";
import Link from "next/link";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  console.log('project', project)

  return (
    <div className="">
      <div>
        <header>
          <h1 className="text-2xl mb-4 underline">
            {project.url ? <a href={project.url} target="_blank" referrerPolicy="no-referrer">{project.name}</a> : (project.name)}
          </h1>
        </header>
        <div className="flex items-start justify-between flex-col-reverse md:flex-row md:gap-8">
          <div className="prose prose-slate md:flex-1">
            <Body blocks={project.content} />
          </div>

          {project.image ? (<div className="w-full md:w-[250px] shrink-0 mb-6 md:mb-0">
            <a href={project.url} target="_blank" referrerPolicy="no-referrer">
              <Image
                src={project.image}
                alt={project.name || "Project image"}
                width={200}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 160px, 200px"
                className="w-full h-auto object-cover rounded-lg"
                quality={60}
                priority={false}
              /></a>
          </div>) : null}
        </div>
        <Link
          href="/"
          className="text-xs font-bold my-3 hover:underline transition block text-right"
        >
          Back to projects
        </Link>
      </div>
    </div>
  );
};

export default Project;

export const revalidate = 60;
