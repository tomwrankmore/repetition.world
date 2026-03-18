import { Project } from "@/types/Project";
import { Page } from "../types/Page";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"

export async function getProjects(): Promise<Project[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]|order(orderRank){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { next: { revalidate: 60 } }  
  );
}

export async function getProject(slug: string): Promise<Project> {

  return createClient(clientConfig).fetch(
    // project where slug.current is the same as the slug we pass in to getProject
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    // the line below is how we pass in slug as a value from the function argument
    { slug },
    { next: { revalidate: 60 } }
  );
}

// List of page links for Navigation

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`,
    { next: { revalidate: 60 } }
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    {slug},
    { next: { revalidate: 60 } }  
  )
}