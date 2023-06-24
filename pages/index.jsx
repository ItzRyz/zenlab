import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Testimoni from "../components/Testimoni";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Hero />
      <Testimoni />
    </Layout>
  );
}
