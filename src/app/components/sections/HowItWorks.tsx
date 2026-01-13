import { BookOpen, Heart, Target } from 'lucide-react';
import { Badge } from '../Badge';
import { Card, CardTitle } from '../Card';

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 md:py-24 bg-accent/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="secondary" size="md" className="mb-4">Como Funciona</Badge>
                    <h2 className="mb-6">Comece em 3 Passos Simples</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                            1
                        </div>
                        <Card variant="elevated" padding="lg">
                            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary mb-4">
                                <Target className="w-8 h-8" />
                            </div>
                            <CardTitle as="h3" className="mb-3">Crie sua Conta</CardTitle>
                            <p className="text-muted-foreground">
                                Cadastre-se gratuitamente em menos de 1 minuto e comece a explorar nosso catálogo.
                            </p>
                        </Card>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                            2
                        </div>
                        <Card variant="elevated" padding="lg">
                            <div className="w-14 h-14 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center text-secondary mb-4">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <CardTitle as="h3" className="mb-3">Escolha seus Livros</CardTitle>
                            <p className="text-muted-foreground">
                                Browse por gêneros ou use nossas recomendações personalizadas baseadas em IA.
                            </p>
                        </Card>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                            3
                        </div>
                        <Card variant="elevated" padding="lg">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl flex items-center justify-center text-primary mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <CardTitle as="h3" className="mb-3">Comece a Ler</CardTitle>
                            <p className="text-muted-foreground">
                                Leia online ou offline, em qualquer dispositivo. Seu progresso é sincronizado automaticamente.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
