'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, SendHorizontal } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import {toast} from "sonner";

gsap.registerPlugin(ScrollTrigger);

const schema = z.object({
  name: z.string().min(2, "Укажите имя"),
  email: z.string().email("Введите корректный email"),
  project: z.string().min(10, "Опишите задачу подробнее"),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", project: "" },
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useGSAP(() => {
    gsap.from(".contact-card", {
      scrollTrigger: { trigger: ".contact-card", start: "top 85%" },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    toast("Отправляем...", {
      description: `Упаковываем заявку ${values.name} вместе с анимациями.`,
    });
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("sent");
    toast.success("Получили!", {
      description: `Ответим на ${values.email} в течение одного рабочего дня.`,
    });
    form.reset();
    setTimeout(() => setStatus("idle"), 1500);
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
      <Card className="contact-card floating-card relative overflow-hidden border-border/80 bg-card/80 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/25" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              Обсудим задачу
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">Расскажите о продукте.</h2>
            <p className="text-muted-foreground">
              Прототип или платформа — соберём UI на shadcn/ui, анимации на GSAP и надёжный бэкенд с DevOps‑практиками.
            </p>
            <Separator className="bg-white/10" />
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <Badge variant="secondary" className="bg-secondary/70">Созвон → Архитектура → Спринты</Badge>
              <Badge variant="secondary" className="bg-secondary/70">Анимации и микро-интеракции входят</Badge>
              <Badge variant="secondary" className="bg-secondary/70">Еженедельные демо и метрики</Badge>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Ада Лавлейс" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@product.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Коротко о проекте</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Что делаем? Сроки? Ключевые результаты?"
                        className="min-h-[140px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/80"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <SendHorizontal className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
        <Toaster position="bottom-right" />
      </Card>
    </section>
  );
}
