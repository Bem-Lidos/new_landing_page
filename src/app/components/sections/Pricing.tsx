import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card, CardContent, CardHeader, CardTitle } from '../Card';

export function Pricing() {
    const plans = [
        {
            name: 'Gratuito',
            price: 'R$ 0',
            period: '/mês',
            features: [
                '5 livros por mês',
                'Acesso a best-sellers',
                'Marcadores básicos',
                'Comunidade de leitores'
            ],
            highlighted: false
        },
        {
            name: 'Premium',
            price: 'R$ 19,90',
            period: '/mês',
            features: [
                'Livros ilimitados',
                'Catálogo completo',
                'Downloads offline',
                'Sem anúncios',
                'Recomendações IA',
                'Desafios exclusivos'
            ],
            highlighted: true
        },
        {
            name: 'Família',
            price: 'R$ 29,90',
            period: '/mês',
            features: [
                'Até 5 perfis',
                'Todos os benefícios Premium',
                'Controle parental',
                'Biblioteca compartilhada',
                'Suporte prioritário'
            ],
            highlighted: false
        }
    ];

    return (
        <section id="pricing" className="py-20 md:py-24 bg-accent/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="primary" size="md" className="mb-4">Planos</Badge>
                    <h2 className="mb-6">Escolha o Plano Ideal para Você</h2>
                    <p className="text-xl text-muted-foreground">
                        Comece grátis e faça upgrade quando quiser. Sem compromisso.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            variant={plan.highlighted ? "bordered" : "elevated"}
                            padding="lg"
                            className="relative"
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <Badge variant="secondary" size="sm">Mais Popular</Badge>
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle as="h3">{plan.name}</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    variant={plan.highlighted ? "primary" : "outline"}
                                    size="lg"
                                    fullWidth
                                    className="mt-6"
                                >
                                    {plan.price === 'R$ 0' ? 'Começar Grátis' : 'Assinar Agora'}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
