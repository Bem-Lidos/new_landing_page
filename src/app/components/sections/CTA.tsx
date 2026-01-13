'use client';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Input } from '../Input';

export function CTA() {
    const [email, setEmail] = useState('');

    return (
        <section className="py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-6">
                <Card variant="elevated" padding="none" className="overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
                        {/* <ImageWithFallback
                            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFjayUyMG9mJTIwYm9va3N8ZW58MXx8fHwxNzY4Mjc4NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Stack of books"
                            className="absolute inset-0 w-full h-full object-cover opacity-20"
                        /> */}
                        <div className="relative px-8 py-16 md:px-16 md:py-20 text-center text-white">
                            <h2 className="mb-6 text-white">Pronto para Começar sua Jornada de Leitura?</h2>
                            <p className="text-xl mb-8 text-white/90">
                                Junte-se a milhares de leitores e descubra seu próximo livro favorito hoje mesmo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Seu melhor e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    leftIcon={<Mail className="w-5 h-5" color='#ffffff50'/>}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                                />
                                <Button variant="secondary" size="lg">
                                    Começar
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                            <p className="text-sm text-white/70 mt-4">Grátis para sempre • Cancele quando quiser</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
