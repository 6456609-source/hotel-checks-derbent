import Icon from "@/components/ui/icon";

const NUMBER = "79211830806";

const LINKS = [
  { href: `https://t.me/+${NUMBER}`, name: "Telegram", label: "Написать в Telegram", icon: "Send", bg: "#229ED9", external: true },
  {
    href: "https://max.ru/u/f9LHodD0cOKR-Q8BTfSOKFFnva1Qwl_xYasvJfTAdU32qbXXsDWu4nZ1OD0",
    name: "MAX",
    label: "Написать в MAX",
    icon: "MessageSquare",
    bg: "linear-gradient(135deg, #3E8BFF 0%, #7B3FF2 100%)",
    external: true,
  },
  { href: `https://wa.me/${NUMBER}`, name: "WhatsApp", label: "Написать в WhatsApp", icon: "MessageCircle", bg: "#25D366", external: true },
  { href: `tel:+${NUMBER}`, name: "Позвонить", label: "Позвонить", icon: "Phone", bg: "hsl(var(--primary))", external: false },
];

const FloatingContacts = () => {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 flex flex-col items-end gap-2.5">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          aria-label={l.label}
          title={l.label}
          target={l.external ? "_blank" : undefined}
          rel={l.external ? "noopener noreferrer" : undefined}
          style={{ background: l.bg }}
          className="h-12 pl-3.5 pr-4 rounded-full flex items-center gap-2 text-white text-sm font-semibold border-2 border-white/90 transition-transform hover:scale-105"
        >
          <Icon name={l.icon} size={20} />
          <span>{l.name}</span>
        </a>
      ))}
    </div>
  );
};

export default FloatingContacts;
