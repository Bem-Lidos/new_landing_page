import { BookMarked, BookOpen, Smartphone, Sparkles, Trophy, Users } from 'lucide-react';
import { Badge } from '../Badge';
import { Card, CardTitle } from '../Card';

export function Features() {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: 'Biblioteca Infinita',
            description: 'Acesse milhares de livros de todos os gêneros, sempre disponíveis na palma da sua mão.'
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Recomendações Personalizadas',
            description: 'Nossa IA aprende seus gostos e sugere livros perfeitos para você.'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Comunidade de Leitores',
            description: 'Conecte-se com outros leitores, compartilhe opiniões e descubra novos títulos.'
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: 'Desafios de Leitura',
            description: 'Participe de desafios mensais e conquiste prêmios por atingir suas metas.'
        },
        {
            icon: <BookMarked className="w-8 h-8" />,
            title: 'Marcadores Inteligentes',
            description: 'Salve passagens favoritas e sincronize seu progresso em todos os dispositivos.'
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: 'Leitura Offline',
            description: 'Baixe seus livros favoritos e leia em qualquer lugar, mesmo sem internet.'
        }
    ];

    return (
        <section id="features" className="py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="primary" size="md" className="mb-4">Recursos</Badge>
                    <h2 className="mb-6">Tudo que Você Precisa para Ler Mais</h2>
                    <p className="text-xl text-muted-foreground">
                        Desenvolvemos ferramentas inteligentes para tornar sua experiência de leitura mais rica e prazerosa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} variant="default" padding="lg" interactive>
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mb-4">
                                {feature.icon}
                            </div>
                            <CardTitle as="h3" className="mb-3">{feature.title}</CardTitle>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
