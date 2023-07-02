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
      <div className="flex flex-col gap-4">
        <h1 className="text-title-large text-primary font-medium first-letter:uppercase">{doc.title}</h1>
        <table className="table">
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
                <td>{c.name}</td>
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
