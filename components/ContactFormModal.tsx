"use client";

import { useState } from "react";
import { Send, User, Mail, MessageSquare, Briefcase, Loader2, Sparkles } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Close after showing success for a moment
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
            setFormState({ name: "", email: "", projectType: "", message: "" });
        }, 2000);
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-lg border-0 bg-transparent p-0 overflow-hidden shadow-2xl">
                <div className="relative bg-white dark:bg-zinc-950 p-6 sm:p-8 rounded-lg border border-neutral-200 dark:border-neutral-800">

                    {/* Decorative gradient background */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    <DialogHeader className="mb-6 relative z-10">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
                                        <Send className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <DialogTitle className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                                        Message Sent!
                                    </DialogTitle>
                                    <DialogDescription className="text-base text-gray-600 dark:text-gray-300">
                                        We've received your inquiry and will get back to you shortly.
                                    </DialogDescription>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2 text-center sm:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
                                    <Sparkles className="w-3 h-3" />
                                    Let's Collaborate
                                </div>
                                <DialogTitle className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                                    Start your project
                                </DialogTitle>
                                <DialogDescription className="text-base text-gray-500 dark:text-gray-400">
                                    Fill in the details below and let's create something extraordinary together.
                                </DialogDescription>
                            </div>
                        )}
                    </DialogHeader>

                    {!isSuccess && (
                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="name"
                                        className={cn(
                                            "text-xs font-bold uppercase tracking-wider transition-colors duration-200",
                                            focusedField === "name" ? "text-purple-600" : "text-gray-500"
                                        )}
                                    >
                                        Name
                                    </Label>
                                    <div className="relative group">
                                        <User className={cn(
                                            "absolute left-3 top-2.5 h-4 w-4 transition-colors duration-200",
                                            focusedField === "name" ? "text-purple-600" : "text-gray-400 group-hover:text-gray-500"
                                        )} />
                                        <Input
                                            id="name"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            onFocus={() => setFocusedField("name")}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="John Doe"
                                            className="pl-9 bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className={cn(
                                            "text-xs font-bold uppercase tracking-wider transition-colors duration-200",
                                            focusedField === "email" ? "text-purple-600" : "text-gray-500"
                                        )}
                                    >
                                        Email
                                    </Label>
                                    <div className="relative group">
                                        <Mail className={cn(
                                            "absolute left-3 top-2.5 h-4 w-4 transition-colors duration-200",
                                            focusedField === "email" ? "text-purple-600" : "text-gray-400 group-hover:text-gray-500"
                                        )} />
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            onFocus={() => setFocusedField("email")}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="john@example.com"
                                            className="pl-9 bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="project-type"
                                    className={cn(
                                        "text-xs font-bold uppercase tracking-wider transition-colors duration-200",
                                        focusedField === "projectType" ? "text-purple-600" : "text-gray-500"
                                    )}
                                >
                                    Project Type
                                </Label>
                                <div className="relative">
                                    <Briefcase className={cn(
                                        "absolute left-3 top-2.5 h-4 w-4 z-10 transition-colors duration-200",
                                        focusedField === "projectType" ? "text-purple-600" : "text-gray-400"
                                    )} />
                                    <Select
                                        value={formState.projectType}
                                        onValueChange={(value) => setFormState({ ...formState, projectType: value })}
                                        onOpenChange={(open) => setFocusedField(open ? "projectType" : null)}
                                    >
                                        <SelectTrigger
                                            id="project-type"
                                            className="pl-9 w-full bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200"
                                        >
                                            <SelectValue placeholder="Select what you need..." />
                                        </SelectTrigger>
                                        <SelectContent position="popper" sideOffset={5}>
                                            <SelectItem value="web-dev">Web Development</SelectItem>
                                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                                            <SelectItem value="design">UI/UX Design</SelectItem>
                                            <SelectItem value="consulting">Consulting</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="message"
                                    className={cn(
                                        "text-xs font-bold uppercase tracking-wider transition-colors duration-200",
                                        focusedField === "message" ? "text-purple-600" : "text-gray-500"
                                    )}
                                >
                                    Message
                                </Label>
                                <div className="relative group">
                                    <MessageSquare className={cn(
                                        "absolute left-3 top-3 h-4 w-4 transition-colors duration-200",
                                        focusedField === "message" ? "text-purple-600" : "text-gray-400 group-hover:text-gray-500"
                                    )} />
                                    <Textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Tell us a bit about your project goals and timeline..."
                                        className="w-full pl-9 resize-none bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-200 min-h-[100px] max-h-[150px] overflow-y-auto whitespace-pre-wrap break-all [field-sizing:fixed]"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold tracking-wide shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
