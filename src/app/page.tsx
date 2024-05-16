import { getBase64 } from "@/lib/image";
import Image from "next/image";

export default async function Home() {
  const blur = await getBase64(
    "https://raw.githubusercontent.com/gmcardoso-dev/blog-images/main/2024/05/hoisting.jpg"
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8">
      <h1>Using blur while the image is not ready</h1>
      <div className="flex place-items-center mt-16">
        <Image
          className="max-w-screen"
          src="https://raw.githubusercontent.com/gmcardoso-dev/blog-images/main/2024/05/hoisting.jpg"
          alt="A random image"
          width={500}
          height={500}
          priority
          placeholder="blur"
          blurDataURL={blur}
        />
      </div>
    </main>
  );
}
