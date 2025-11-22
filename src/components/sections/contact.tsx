'use client';

import { useMemo, useState } from "react";
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
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type FormValues = {
  name: string;
  email: string;
  project: string;
};

export function ContactSection() {
  const { t } = useI18n();
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.contact.validation.name),
        email: z.string().email(t.contact.validation.email),
        project: z.string().min(10, t.contact.validation.project),
      }),
    [t.contact.validation.email, t.contact.validation.name, t.contact.validation.project]
  );

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
    toast(t.contact.toast.sendingTitle, {
      description: t.contact.toast.sendingDescription(values.name),
    });
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("sent");
    toast.success(t.contact.toast.successTitle, {
      description: t.contact.toast.successDescription(values.email),
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
              {t.contact.eyebrow}
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">{t.contact.title}</h2>
            <p className="text-muted-foreground">{t.contact.description}</p>
            <Separator className="bg-white/10" />
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {t.contact.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-secondary/70">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.form.nameLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.contact.form.namePlaceholder} {...field} />
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
                    <FormLabel>{t.contact.form.emailLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.contact.form.emailPlaceholder} type="email" {...field} />
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
                    <FormLabel>{t.contact.form.projectLabel}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.contact.form.projectPlaceholder}
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
                    {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
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
