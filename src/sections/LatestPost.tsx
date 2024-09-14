import { Card } from "../components/Card"
import type { CollectionEntry } from "astro:content"
import { getPostColorFromCategory } from "../utils/postsUtils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";


export const LatestPost = (props: { latestPosts: CollectionEntry<'blog'>[] }) => {

  const { latestPosts } = props;

  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl text-center">
          Your portal to everything blockchain
        </h2>
        <p className="text-xl text-center text-zinc-400 mt-8">
          Keep up with newest trends, updates, and insights in the blockchain world, updated weekly.
        </p>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="flex flex-col gap-8">
            {latestPosts.map(({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(
                    (postIndex === 1 || postIndex === 3) && "md:hidden"
                  )}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">
                    {description}
                  </p>
                </Card>
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-8 mt-16">
            {latestPosts.map(({ data: { title, description, category } }, postIndex) => (
              <Card
                key={postIndex}
                buttonText="Read More"
                color={getPostColorFromCategory(category)}
                className={twMerge(
                  (postIndex === 0 || postIndex === 2) && "md:hidden"
                )}
              >
                <Tag color={getPostColorFromCategory(category)}>
                  {category}
                </Tag>
                <h3 className="font-heading font-black text-3xl mt-3">
                  {title}
                </h3>
                <p className="text-lg text-zinc-400 mt-6">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-48">
          <CutCornerButton>Read the blog</CutCornerButton>
        </div>
      </div>
    </section>
  )
}