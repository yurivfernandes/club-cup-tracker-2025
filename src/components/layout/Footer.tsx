
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/groups', label: 'Grupos' },
    { path: '/knockout', label: 'Eliminatórias' },
    { path: '/ranking', label: 'Ranking IFFHS' },
    { path: '/criteria', label: 'Critérios' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yurivfernandes',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yurianalistabi/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5531987798823',
      icon: MessageCircle,
      color: 'hover:text-green-600'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-purple-700 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Copa do Mundo de Clubes 2025</span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Acompanhe todos os jogos, grupos e resultados do maior torneio interclubes do mundo.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desenvolvedor e Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Desenvolvedor</h3>
            <p className="text-gray-300 text-sm">
              Desenvolvido por <span className="font-semibold text-white">Yuri Viana Fernandes</span>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha divisória e Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Copa do Mundo de Clubes. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Dados oficiais da FIFA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
