'use client';
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/Card';
import { Badge } from './components/Badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ThemeToggle } from './components/ThemeToggle';
import {
    BookOpen,
    Sparkles,
    Users,
    TrendingUp,
    Heart,
    Star,
    ArrowRight,
    Menu,
    X,
    CheckCircle2,
    Smartphone,
    BookMarked,
    Trophy,
    Target,
    Zap,
    Mail,
    Instagram,
    Twitter,
    Facebook
} from 'lucide-react';

export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [email, setEmail] = useState('');

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

    const stats = [
        { value: '50K+', label: 'Leitores Ativos' },
        { value: '10K+', label: 'Livros Disponíveis' },
        { value: '4.9★', label: 'Avaliação Média' },
        { value: '95%', label: 'Satisfação' }
    ];

    const testimonials = [
        {
            name: 'Ana Silva',
            role: 'Leitora Ávida',
            content: 'O Bem Lidos transformou minha rotina de leitura. Nunca li tanto quanto nos últimos meses!',
            rating: 5
        },
        {
            name: 'Carlos Mendes',
            role: 'Professor',
            content: 'As recomendações são incríveis! Descobri autores que nunca teria encontrado sozinho.',
            rating: 5
        },
        {
            name: 'Juliana Costa',
            role: 'Estudante',
            content: 'Perfeito para quem tem pouco tempo. Consigo ler no ônibus, na fila, em qualquer lugar.',
            rating: 5
        }
    ];

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
        <div className="min-h-screen bg-background">
            {/* Navigation */}
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

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
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
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-background" />
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 border-2 border-background" />
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-2 border-background" />
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-300 to-primary-500 border-2 border-background" />
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

            {/* Stats Section */}
            <section className="py-16 bg-card border-y border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 md:py-32">
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

            {/* How It Works */}
            <section id="how-it-works" className="py-20 md:py-32 bg-accent/30">
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

            {/* Testimonials */}
            <section id="testimonials" className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge variant="success" size="md" className="mb-4">Depoimentos</Badge>
                        <h2 className="mb-6">O Que Nossos Leitores Dizem</h2>
                        <p className="text-xl text-muted-foreground">
                            Milhares de leitores já transformaram sua rotina de leitura com o Bem Lidos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} variant="bordered" padding="lg">
                                <CardContent>
                                    <div className="flex items-center gap-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                        ))}
                                    </div>
                                    <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 md:py-32 bg-accent/30">
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

            {/* CTA Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <Card variant="elevated" padding="none" className="overflow-hidden">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFjayUyMG9mJTIwYm9va3N8ZW58MXx8fHwxNzY4Mjc4NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Stack of books"
                                className="absolute inset-0 w-full h-full object-cover opacity-20"
                            />
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
                                        leftIcon={<Mail className="w-5 h-5" />}
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

            {/* Footer */}
            <footer className="bg-card border-t border-border py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-foreground">Bem Lidos</span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Transformando vidas através da leitura, um livro de cada vez.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Planos</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Download</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Atualizações</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carreiras</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Licenças</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2026 Bem Lidos. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
