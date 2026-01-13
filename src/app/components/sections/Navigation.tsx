'use client';
import { ArrowRight, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../Button';
import { ThemeToggle } from '../ThemeToggle';

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-foreground">Bem Lidos</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-foreground hover:text-primary transition-colors">Recursos</a>
                        <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Como Funciona</a>
                        <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
                        <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Planos</a>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Button variant="ghost" size="sm">Entrar</Button>
                        <Button variant="primary" size="sm">
                            Começar Grátis
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            className="p-2 text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            <a href="#features" className="text-foreground hover:text-primary transition-colors">Recursos</a>
                            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Como Funciona</a>
                            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
                            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Planos</a>
                            <div className="flex flex-col gap-2 pt-2">
                                <Button variant="ghost" size="sm" fullWidth>Entrar</Button>
                                <Button variant="primary" size="sm" fullWidth>
                                    Começar Grátis
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
