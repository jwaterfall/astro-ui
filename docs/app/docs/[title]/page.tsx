import { notFound } from "next/navigation";

import { getAllDocs } from "../../../utils/docs";
import { Doc } from "../../../utils/io";
import Content from "./Content";

export async function generateStaticParams() {
  return await getAllDocs(process.cwd() + "/../src");
}

export default async function Home({ params }: { params: Doc }) {
  try {
    const docs = await getAllDocs(process.cwd() + "/../src");

    const doc = docs.find((doc) => doc.title === params.title.replace("-", " "));
    if (!doc) notFound();

    return (
      <div className="w-full max-w-4xl">
        <h1 className="text-title-large text-on-surface font-medium first-letter:uppercase">{doc.title}</h1>
        <p className="text-body-medium text-on-surface-variant my-2">{doc.description}</p>
        <table className="my-4 table w-full">
          <thead>
            <tr>
              <th>Class</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {doc.classes.map((c) => (
              <tr key={c.name}>
                <td>
                  <span className="bg-surface-3 text-on-surface rounded-sm px-2 py-1">{c.name}</span>
                </td>
                <td>{c.type}</td>
                <td>{c.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Content source={doc.source} />
      </div>
    );
  } catch (e) {
    console.error(e);
    notFound();
  }
}
