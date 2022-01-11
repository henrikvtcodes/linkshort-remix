import { json, useCatch, useLoaderData, redirect } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";

export let loader: LoaderFunction = async ({ request }) => {

  let url = new URL(request.url);

  let key = url.pathname.split("/").slice(1).join("/");

  let redirectPath = await linkshort.list();

  // return redirect(`${redirectPath}?l=${Date.now() - start}`);
  return {
    url: url,
    path: url.pathname,
    key,
    redirect: redirectPath.keys,
  };
};

export default function Page(): JSX.Element {

  const data = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a href="/adit">MY BOI ADIT</a>
        </li>
        <li>{data.url as string}</li>
        <li>{data.path as string}</li>
        <li>{data.key as string}</li>
        <li>{data.redirect.keys[0] as string}</li>
      </ul>
    </div>
  );
}