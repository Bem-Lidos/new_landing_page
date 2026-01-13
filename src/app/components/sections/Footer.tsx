import { BookOpen, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
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
    );
}
