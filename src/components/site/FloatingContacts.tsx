import Icon from "@/components/ui/icon";

const NUMBER = "79211830806";

const LINKS = [
  { href: `https://t.me/+${NUMBER}`, label: "Написать в Telegram", icon: "Send", bg: "#229ED9", external: true },
  {
    href: "https://max.ru/u/f9LHodD0cOKR-Q8BTfSOKFFnva1Qwl_xYasvJfTAdU32qbXXsDWu4nZ1OD0",
    label: "Написать в MAX",
    icon: "MessageSquare",
    bg: "linear-gradient(135deg, #3E8BFF 0%, #7B3FF2 100%)",
    external: true,
  },
  { href: `https://wa.me/${NUMBER}`, label: "Написать в WhatsApp", icon: "MessageCircle", bg: "#25D366", external: true },
  { href: `tel:+${NUMBER}`, label: "Позвонить", icon: "Phone", bg: "hsl(var(--primary))", external: false },
];

const FloatingContacts = () => {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 flex flex-col gap-3">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          aria-label={l.label}
          title={l.label}
          target={l.external ? "_blank" : undefined}
          rel={l.external ? "noopener noreferrer" : undefined}
          style={{ background: l.bg }}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white border-2 border-white/90 transition-transform hover:scale-110"
        >
          <Icon name={l.icon} size={24} />
        </a>
      ))}
    </div>
  );
};

export default FloatingContacts;