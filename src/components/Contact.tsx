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
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    // Replace with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        message: values.message,
        to_name: "TenderLink Team",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      console.error("Email Error:", error);
      toast.error("Failed to send message.", {
        description: "Please try again or contact us directly via phone.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white relative border-t border-[#1F1E5E]/5"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1F1E5E] uppercase tracking-tighter">
            Get In <span className="text-[#1F1E5E]/70">Touch</span>
          </h2>
          <p className="text-lg text-[#1F1E5E]/60 max-w-2xl mx-auto font-light">
            Have questions? We're here to help you succeed. Visit our offices or
            send us a message.
          </p>
          <div className="w-16 h-1 bg-[#1F1E5E]/10 mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column: Contact Details & Map */}
          <div className="space-y-6 flex flex-col">
            {/* Quick Contact Cards */}
            <div className="grid gap-6">
              {/* Email Card */}
              <Card className="rounded-none bg-white border border-[#1F1E5E]/10 p-6 hover:shadow-lg hover:border-[#1F1E5E]/30 transition-all duration-300 flex items-center gap-5 group">
                <div className="p-4 bg-[#1F1E5E]/5 border border-[#1F1E5E]/10 group-hover:bg-[#1F1E5E] group-hover:text-white transition-all duration-300">
                  <Mail className="h-5 w-5 text-[#1F1E5E] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-[#1F1E5E]/50 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:Contact@tenderinfo.in"
                    className="text-[#1F1E5E] font-heading font-bold text-lg hover:text-[#1A184D] transition-colors"
                  >
                    Contact@tenderinfo.in
                  </a>
                </div>
              </Card>

              {/* Phone Card */}
              <Card className="rounded-none bg-white border border-[#1F1E5E]/10 p-6 hover:shadow-lg hover:border-[#1F1E5E]/30 transition-all duration-300 flex items-center gap-5 group">
                <div className="p-4 bg-[#1F1E5E]/5 border border-[#1F1E5E]/10 group-hover:bg-[#1F1E5E] group-hover:text-white transition-all duration-300">
                  <Phone className="h-5 w-5 text-[#1F1E5E] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-[#1F1E5E]/50 mb-1">
                    Call Us
                  </h3>
                  <a
                    href="tel:+917774911330"
                    className="text-[#1F1E5E] font-heading font-bold text-lg hover:text-[#1A184D] transition-colors"
                  >
                    +91-7774 911330
                  </a>
                </div>
              </Card>
            </div>

            {/* Address Card Container */}
            <Card className="rounded-none bg-white border border-[#1F1E5E]/10 flex-grow flex flex-col justify-center shadow-sm relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#1F1E5E]/5 -mr-4 -mt-4 rotate-45" />

              {/* PUNE OFFICE - Clickable */}
              <a
                href="https://maps.app.goo.gl/ZwEUsZMBFbDaRopdA"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 hover:bg-[#1F1E5E]/[0.02] transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#1F1E5E]/5 border border-[#1F1E5E]/10 group-hover:bg-[#1F1E5E] group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6 text-[#1F1E5E] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-lg text-[#1F1E5E] uppercase tracking-wide">
                        Pune Head Office
                      </h3>
                      <ExternalLink className="h-3 w-3 text-[#1F1E5E]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-1 text-sm text-[#1F1E5E]/70 font-light leading-relaxed">
                      <p>Office No.: 812</p>
                      <p>Maruti Millenium Tower</p>
                      <p>Mumbai-Pune-Bengaluru Highway,</p>
                      <p>Baner, Pune, Maharashtra 411045</p>
                    </div>
                  </div>
                </div>
              </a>

              <div className="w-full h-px bg-[#1F1E5E]/10" />

              {/* DELHI OFFICE - Clickable */}
              <a
                href="https://maps.app.goo.gl/NqKM53FCZ2aC1Yfg6"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 hover:bg-[#1F1E5E]/[0.02] transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#1F1E5E]/5 border border-[#1F1E5E]/10 group-hover:bg-[#1F1E5E] group-hover:text-white transition-all duration-300">
                    <Building2 className="h-6 w-6 text-[#1F1E5E] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-lg text-[#1F1E5E] uppercase tracking-wide">
                        Delhi Office
                      </h3>
                      <ExternalLink className="h-3 w-3 text-[#1F1E5E]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-1 text-sm text-[#1F1E5E]/70 font-light">
                      <p>Saket, New Delhi</p>
                      <p>Delhi - 110030</p>
                    </div>
                  </div>
                </div>
              </a>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <Card
            className="lg:col-span-2 rounded-none bg-white border border-[#1F1E5E]/10 p-8 md:p-10 shadow-xl animate-slide-up h-full flex flex-col"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-8 border-b border-[#1F1E5E]/10 pb-6">
              <h3 className="text-2xl font-heading font-bold mb-3 text-[#1F1E5E] uppercase tracking-wide">
                Send us a Message
              </h3>
              <p className="text-[#1F1E5E]/60 text-sm font-light">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex-grow"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-widest text-[#1F1E5E]">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="rounded-none bg-[#1F1E5E]/[0.02] border-[#1F1E5E]/20 focus:border-[#1F1E5E] h-12"
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
                        <FormLabel className="text-xs font-bold uppercase tracking-widest text-[#1F1E5E]">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="rounded-none bg-[#1F1E5E]/[0.02] border-[#1F1E5E]/20 focus:border-[#1F1E5E] h-12"
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
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-[#1F1E5E]">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="rounded-none bg-[#1F1E5E]/[0.02] border-[#1F1E5E]/20 focus:border-[#1F1E5E] h-12"
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
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-[#1F1E5E]">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          rows={6}
                          className="rounded-none bg-[#1F1E5E]/[0.02] border-[#1F1E5E]/20 focus:border-[#1F1E5E] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full md:w-auto bg-[#1F1E5E] hover:bg-[#1A184D] text-white rounded-none uppercase tracking-widest font-bold px-10 h-14"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};
