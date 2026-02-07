'use client';

import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { fadeInScale } from '../utils/animations';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setEmail('');
            alert('Thank you for subscribing!');
        }, 1000);
    };

    return (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
            <motion.div
                variants={fadeInScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse" />
                            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </div>
                    </div>

                    {/* Grid Pattern Overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }}
                    />

                    <div className="relative max-w-2xl mx-auto space-y-6">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto"
                        >
                            <Mail className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            Stay in the Loop
                        </h2>

                        <p className="text-white/90 text-lg leading-relaxed">
                            Get the latest updates, tutorials, and insights delivered straight to your inbox.
                            Join our community of developers and designers.
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
                        >
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-full px-6 py-4 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all text-foreground placeholder:text-muted-foreground font-medium"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-purple-600/30 border-t-purple-600 rounded-full animate-spin" />
                                        Subscribing...
                                    </>
                                ) : (
                                    <>
                                        Subscribe
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Trust Badge */}
                        <p className="text-white/70 text-xs">
                            🔒 We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
