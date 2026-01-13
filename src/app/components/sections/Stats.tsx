export function Stats() {
    const stats = [
        { value: '50K+', label: 'Leitores Ativos' },
        { value: '10K+', label: 'Livros Disponíveis' },
        { value: '4.9★', label: 'Avaliação Média' },
        { value: '95%', label: 'Satisfação' }
    ];

    return (
        <section className="py-16 bg-card border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
