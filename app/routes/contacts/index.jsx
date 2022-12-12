import contactsStyles from "~/styles/contacts.css";

export const meta = () => ({
  title: "Contacts",
  description: "This is the contacts page",
  keywords: "contacts, any films",
  canonical: "https://web-serfer.ru/contacts"
});
  
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: contactsStyles
    }
  ];
}
  
export default function Contacts() {
  return (
    <h2 className="text-xl text-center">Contacts page</h2>
  )
}
  