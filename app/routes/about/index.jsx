import aboutStyles from "~/styles/about.css";

export const meta = () => ({
  title: "About",
  description: "This is the about page",
  keywords: "about, about page",
  canonical: "https://web-serfer.ru/about"
});
  
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: aboutStyles
    }
  ];
}
  
export default function About() {
  return (
    <h2 className="text-xl text-center">About page</h2>
  )
}
  