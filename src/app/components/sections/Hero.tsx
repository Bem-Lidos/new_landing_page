'use client';
import { ArrowRight, Star, Zap } from 'lucide-react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20" />
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <Badge variant="primary" size="sm">
                            <Zap className="w-3 h-3" />
                            Mais de 50 mil leitores ativos
                        </Badge>

                        <div>
                            <h1 className="mb-6">
                                Descubra o Prazer de Ler
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Milhares de livros, recomendações personalizadas e uma comunidade apaixonada por leitura. Tudo em um só lugar.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg">
                                Começar Grátis
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Ver Demonstração
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary-400 to-primary-600 border-2 border-primary" />
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-secondary-400 to-secondary-600 border-2 border-primary" />
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 border-2 border-primary" />
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-secondary-300 to-primary-500 border-2 border-primary" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">Avaliado por milhares de leitores</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1525451350286-a21d5aef139c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWFkaW5nJTIwYm9va3xlbnwxfHx8fDE3NjgxNzQ2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Person reading a book"
                            className="relative rounded-3xl shadow-2xl w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
