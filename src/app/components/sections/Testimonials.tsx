import { Star } from 'lucide-react';
import { Badge } from '../Badge';
import { Card, CardContent } from '../Card';

export function Testimonials() {
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

    return (
        <section id="testimonials" className="py-20 md:py-24">
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
    );
}
