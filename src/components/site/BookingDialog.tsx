import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

type Pay = "company" | "self";

const empty = { name: "", phone: "", checkIn: "", checkOut: "", company: "", comment: "" };

const BookingDialog = ({ open, onOpenChange }: Props) => {
  const { toast } = useToast();
  const [form, setForm] = useState(empty);
  const [pay, setPay] = useState<Pay>("company");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Укажите имя";
    if (form.phone.replace(/\D/g, "").length < 10) e.phone = "Укажите телефон";
    if (!form.checkIn) e.checkIn = "Дата заезда";
    if (!form.checkOut) e.checkOut = "Дата выезда";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) e.checkOut = "Выезд позже заезда";
    if (pay === "company" && form.company.trim().length < 2) e.company = "Название или ИНН компании";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    toast({
      title: "Заявка принята",
      description: "Перезвоним в течение 15 минут и пришлём счёт на реквизиты.",
    });
    setForm(empty);
    setErrors({});
    onOpenChange(false);
  };

  const err = (k: string) => errors[k] && <p className="text-sm text-primary mt-1">{errors[k]}</p>;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-border max-w-lg max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Забронировать номер</DialogTitle>
          <DialogDescription>Документы — только за фактическое проживание с реальными датами.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4 mt-2" noValidate>
          <div className="grid grid-cols-2 gap-2 p-1 rounded-full border-2 border-foreground/20">
            {(
              [
                ["company", "От компании"],
                ["self", "Сам, картой"],
              ] as [Pay, string][]
            ).map(([v, l]) => (
              <button
                key={v}
                type="button"
                onClick={() => setPay(v)}
                className={`h-10 rounded-full font-medium transition-colors ${
                  pay === v ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <div>
            <Label htmlFor="b-name">Имя</Label>
            <Input id="b-name" value={form.name} onChange={set("name")} placeholder="Иван Петров" />
            {err("name")}
          </div>
          <div>
            <Label htmlFor="b-phone">Телефон</Label>
            <Input id="b-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+7 900 000-00-00" />
            {err("phone")}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="b-in">Заезд</Label>
              <Input id="b-in" type="date" value={form.checkIn} onChange={set("checkIn")} className="[color-scheme:dark]" />
              {err("checkIn")}
            </div>
            <div>
              <Label htmlFor="b-out">Выезд</Label>
              <Input id="b-out" type="date" value={form.checkOut} onChange={set("checkOut")} className="[color-scheme:dark]" />
              {err("checkOut")}
            </div>
          </div>
          {pay === "company" && (
            <div>
              <Label htmlFor="b-company">Компания или ИНН</Label>
              <Input id="b-company" value={form.company} onChange={set("company")} placeholder="ООО «Стройпроект», 7700000000" />
              {err("company")}
            </div>
          )}
          <div>
            <Label htmlFor="b-comment">Комментарий</Label>
            <Textarea
              id="b-comment"
              value={form.comment}
              onChange={set("comment")}
              placeholder="Нужен трансфер, авто или переговорная?"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="h-[52px] rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
          >
            Отправить заявку <Icon name="ArrowRight" size={18} />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
