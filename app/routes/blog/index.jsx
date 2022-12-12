
import blogStyles from "~/styles/blog.css";

export const meta = () => ({
  title: "Blog",
  description: "This is the blog page",
  keywords: "blog, any posts",
  canonical: "https://web-serfer.ru/blog"
});
  
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: blogStyles
    }
  ];
}
  
export default function Blog() {
  return (
    <div>
      <h2 className="text-xl text-center">Blog page</h2>
    </div>
  )
}
  