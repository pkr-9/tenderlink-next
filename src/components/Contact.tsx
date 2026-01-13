"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  Send,
  Building2,
  ExternalLink,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/* ------------------ Validation ------------------ */
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  /* ------------------ Email Handler ------------------ */
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          message: values.message,
          to_name: "TenderLink Team",
        },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      toast.error("Failed to send message.", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  /* ------------------ Monotonic Blue Themes ------------------ */
  const infoThemes = [
    {
      accent: "text-[#1F1E5E]",
      softBg: "bg-[#1F1E5E]/8",
      border: "border-[#1F1E5E]/20",
      hover: "hover:shadow-[#1F1E5E]/20",
    },
    {
      accent: "text-[#2F2FA2]",
      softBg: "bg-[#2F2FA2]/8",
      border: "border-[#2F2FA2]/20",
      hover: "hover:shadow-[#2F2FA2]/20",
    },
    {
      accent: "text-[#4F46E5]",
      softBg: "bg-[#4F46E5]/8",
      border: "border-[#4F46E5]/20",
      hover: "hover:shadow-[#4F46E5]/20",
    },
    {
      accent: "text-[#2563EB]",
      softBg: "bg-[#2563EB]/8",
      border: "border-[#2563EB]/20",
      hover: "hover:shadow-[#2563EB]/20",
    },
  ];

  return (
    <section
      id="contact"
      className="section bg-surface border-t border-primary/10"
    >
      <div className="container mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Get In <span className="text-primary/70">Touch</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you succeed.
          </p>
          <div className="w-16 h-1 bg-primary/20 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-6 flex flex-col">
            {/* Email + Phone */}
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "Contact@tenderinfo.in",
                href: "mailto:Contact@tenderinfo.in",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+91-7774 911330",
                href: "tel:+917774911330",
              },
            ].map((item, i) => {
              const theme = infoThemes[i];
              const Icon = item.icon;

              return (
                <Card
                  key={i}
                  className={`
                    bg-surface border ${theme.border}
                    p-6 rounded-2xl flex items-center gap-5
                    shadow-glow transition-all duration-300
                    ${theme.hover}
                  `}
                >
                  <div
                    className={`p-4 rounded-xl ${theme.softBg} ${theme.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className={`text-xl font-bold ${theme.accent}`}
                    >
                      {item.value}
                    </a>
                  </div>
                </Card>
              );
            })}

            {/* Address Card */}
            <Card className="bg-surface border border-primary/10 rounded-2xl overflow-hidden">
              {/* Pune */}
              <a
                href="https://maps.app.goo.gl/ZwEUsZMBFbDaRopdA"
                target="_blank"
                className="block p-7 hover:bg-primary/[0.02] transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Pune Head Office</h3>
                    <p className="text-md text-muted-foreground leading-relaxed">
                      Office No. 812, Maruti Millenium Tower, Baner, Pune 411045
                    </p>
                  </div>
                </div>
              </a>

              <div className="h-px bg-primary/10" />

              {/* Delhi */}
              <a
                href="https://maps.app.goo.gl/NqKM53FCZ2aC1Yfg6"
                target="_blank"
                className="block p-7 hover:bg-primary/[0.02] transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Delhi Office</h3>
                    <p className="text-md text-muted-foreground">
                      Saket, New Delhi 110030
                    </p>
                  </div>
                </div>
              </a>
            </Card>
          </div>

          {/* ================= RIGHT COLUMN (FORM) ================= */}
          <Card className="lg:col-span-2 bg-surface border border-primary/10 rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="mb-8 border-b border-primary/10 pb-6">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                Send us a Message
              </h3>
              <p className="text-md text-muted-foreground">
                Fill out the form and our team will get back within 24 hours.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm uppercase tracking-wider text-primary font-semibold">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Full Name"
                            className="rounded-xl bg-primary/[0.03] border-primary/20 h-12 focus:border-primary placeholder:text-lg"
                            {...field}
                          />
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
                        <FormLabel className="text-sm uppercase tracking-wider text-primary font-semibold">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="email@example.com"
                            className="rounded-xl bg-primary/[0.03] border-primary/20 h-12 focus:border-primary placeholder:text-lg"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm uppercase tracking-wider text-primary font-semibold">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="rounded-xl bg-primary/[0.03] border-primary/20 h-12 focus:border-primary placeholder:text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md uppercase tracking-wider text-primary font-semibold">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Tell us about your requirements..."
                          className="rounded-xl bg-primary/[0.03] border-primary/20 resize-none focus:border-primary placeholder:text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-white text-md rounded-xl px-8 h-12 font-semibold hover:bg-primary/90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};
