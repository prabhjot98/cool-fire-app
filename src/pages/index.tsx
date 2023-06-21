import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/Button";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Button />
    </>
  );
}
