

import homeStyles from "~/styles/index.css";

export const meta = () => ({
  title: "Home",
  description: "This is the home page",
  keywords: "home page, main page",
  canonical: "https://web-serfer.ru"
});

export function links() {
  return [    
    {
      rel: "stylesheet",
      href: homeStyles,
    },
  ];
}


export default function Home() {
  return (
    <h2 className="text-xl text-center">
      Home page !!!
    </h2>
  )
}
  