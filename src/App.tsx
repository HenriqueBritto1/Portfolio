import React, { useState } from 'react';
import { Github, Linkedin, Instagram, ExternalLink, X, Menu, Mail, MapPin, Phone, Globe } from 'lucide-react';
import Projeto1 from './assets/Projeto1.jpeg';
import Projeto2 from './assets/Projeto2.jpeg';
import Projeto3 from './assets/Projeto3.jpeg';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
}

interface Translations {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    journey: {
      title: string;
      content: string;
    };
    skills: {
      title: string;
      content: string;
    };
    stats: {
      projects: string;
      period: string;
      languages: string;
      methodologies: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetails: string;
    viewCode: string;
    liveDemo: string;
    technologiesUsed: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    followMe: string;
    letsConnect: string;
    connectDescription: string;
    getInTouch: string;
  };
  footer: {
    rights: string;
  };
}

const translations: { [key: string]: Translations } = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Junior Developer & Software Engineering Student passionate about creating innovative solutions",
      cta: "Learn More About Me"
    },
    about: {
      title: "About Me",
      journey: {
        title: "My Academic Journey",
        content: "I'm currently in my 6th period of Software Engineering at UFMS, where I've developed a strong foundation in programming and software development principles. Through academic projects and hands-on learning, I've gained experience in multiple programming languages and development methodologies."
      },
      skills: {
        title: "Technical Skills",
        content: "I have hands-on experience with Python, Java, JavaScript, HTML, CSS and SQL. I'm also well-versed in agile methodologies, having applied Scrum and Kanban principles in academic and personal projects. I enjoy problem-solving and creating efficient, well-documented code."
      },
      stats: {
        projects: "Academic Projects",
        period: "Period Student",
        languages: "Programming Languages",
        methodologies: "Methodologies"
      }
    },
    projects: {
      title: "My Projects",
      subtitle: "Here are some of my academic and personal projects that showcase my programming skills and learning journey.",
      viewDetails: "View Details",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      technologiesUsed: "Technologies Used"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "I'm always open to discussing new opportunities and interesting projects. Let's connect!",
      email: "Email",
      phone: "Phone",
      location: "Location",
      followMe: "Follow Me",
      letsConnect: "Let's Connect",
      connectDescription: "I'm actively seeking internship opportunities and junior developer positions. Whether you want to discuss technology, share learning experiences, or explore collaboration opportunities, I'd love to connect!",
      getInTouch: "Get In Touch"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato"
    },
    hero: {
      greeting: "Olá, eu sou",
      subtitle: "Desenvolvedor Júnior & Estudante de Engenharia de Software apaixonado por criar soluções inovadoras",
      cta: "Saiba Mais Sobre Mim"
    },
    about: {
      title: "Sobre Mim",
      journey: {
        title: "Minha Jornada Acadêmica",
        content: "Atualmente estou no 6º período de Engenharia de Software na UFMS, onde desenvolvi uma base sólida em programação e princípios de desenvolvimento de software. Através de projetos acadêmicos e aprendizado prático, ganhei experiência em múltiplas linguagens de programação e metodologias de desenvolvimento."
      },
      skills: {
        title: "Habilidades Técnicas",
        content: "Tenho experiência prática com Python, Java, JavaScript, HTML, CSS e SQL. Também sou bem versado em metodologias ágeis, tendo aplicado princípios Scrum e Kanban em projetos acadêmicos e pessoais. Gosto de resolver problemas e criar código eficiente e bem documentado."
      },
      stats: {
        projects: "Projetos Acadêmicos",
        period: "Período Estudante",
        languages: "Linguagens de Programação",
        methodologies: "Metodologias"
      }
    },
    projects: {
      title: "Meus Projetos",
      subtitle: "Aqui estão alguns dos meus projetos acadêmicos e pessoais que demonstram minhas habilidades de programação e jornada de aprendizado.",
      viewDetails: "Ver Detalhes",
      viewCode: "Ver Código",
      liveDemo: "Demo ao Vivo",
      technologiesUsed: "Tecnologias Utilizadas"
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Estou sempre aberto para discutir novas oportunidades e projetos interessantes. Vamos nos conectar!",
      email: "Email",
      phone: "Telefone",
      location: "Localização",
      followMe: "Me Siga",
      letsConnect: "Vamos nos Conectar",
      connectDescription: "Estou ativamente buscando oportunidades de estágio e posições de desenvolvedor júnior. Se você quer discutir tecnologia, compartilhar experiências de aprendizado ou explorar oportunidades de colaboração, adoraria me conectar!",
      getInTouch: "Entre em Contato"
    },
    footer: {
      rights: "Todos os direitos reservados."
    }
  }
};

const projectsData: { [key: string]: Project[] } = {
  en: [
    {
      id: 1,
      title: "Student Management System",
      description: "Academic project built with Java and SQL database",
      longDescription: "In development...",
      image: Projeto1,
      technologies: ["Java", "MySQL"],
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description: "Web application for expense tracking and budgeting",
      longDescription: "In development...",
      image: Projeto2,
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Data Analysis Scripts",
      description: "Python automation tools for data processing",
      longDescription: "A collection of Python scripts developed for automating data analysis tasks in academic projects. Includes tools for data cleaning, statistical analysis, visualization, and report generation. The scripts utilize pandas for data manipulation, matplotlib for visualization, and follow PEP 8 coding standards. Developed using agile practices with version control and iterative improvements based on user feedback.",
      image: Projeto3,
      technologies: ["Python", "Pandas", "Matplotlib", "NumPy", "Jupyter"],
      githubUrl: "#"
    }
  ],
  pt: [
    {
      id: 1,
      title: "Sistema de Gestão de Estudantes",
      description: "Projeto acadêmico desenvolvido com Java e banco de dados SQL",
      longDescription: "Em desenvolvimento...",
      image: Projeto1,
      technologies: ["Java", "MySQL"],
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Rastreador de Finanças Pessoais",
      description: "Aplicação web para controle de gastos e orçamento",
      longDescription: "Em desenvolvimento...",
      image: Projeto2,
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Scripts de Análise de Dados",
      description: "Ferramentas de automação Python para processamento de dados",
      longDescription: "Uma coleção de scripts Python desenvolvidos para automatizar tarefas de análise de dados em projetos acadêmicos. Inclui ferramentas para limpeza de dados, análise estatística, visualização e geração de relatórios. Os scripts utilizam pandas para manipulação de dados, matplotlib para visualização e seguem padrões de codificação PEP 8. Desenvolvido usando práticas ágeis com controle de versão e melhorias iterativas baseadas no feedback dos usuários.",
      image: Projeto3,
      technologies: ["Python", "Pandas", "Matplotlib", "NumPy", "Jupyter"],
      githubUrl: "#"
    }
  ]
};

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('pt');

  const t = translations[language];
  const projects = projectsData[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t.nav.contact}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <Globe size={18} />
                <span>{language === 'en' ? 'PT' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {t.nav.projects}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {t.nav.contact}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <Globe size={18} />
                  <span>{language === 'en' ? 'PT' : 'EN'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white text-3xl font-bold">
                HC
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.hero.greeting} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Henrique Carrilho</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.about.journey.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.journey.content}
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.about.skills.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.skills.content}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-700">{t.about.stats.projects}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl font-bold text-purple-600 mb-2">6°</div>
                <div className="text-gray-700">{t.about.stats.period}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-700">{t.about.stats.languages}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl font-bold text-orange-600 mb-2">Agile</div>
                <div className="text-gray-700">{t.about.stats.methodologies}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.projects.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow duration-200">
                    {t.projects.viewDetails}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.contact.email}</h3>
                  <p className="text-gray-600">henrique.britto1711@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.contact.phone}</h3>
                  <p className="text-gray-600">+55 (99) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.contact.location}</h3>
                  <p className="text-gray-600">Campo Grande-MS, Brazil</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">{t.contact.followMe}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/henrique-carrilho-b51a59245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/HenriqueBritto1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-gray-700 to-gray-800 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/henrique.c1_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-pink-500 to-purple-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">{t.contact.letsConnect}</h4>
                <p className="text-gray-600 mb-6">
                  {t.contact.connectDescription}
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  {t.contact.getInTouch}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Portfolio
          </div>
          <p className="text-gray-400 mb-6">
            © 2025 Henrique Carrilho. {t.footer.rights}
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/henrique-carrilho-b51a59245/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/HenriqueBritto1" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://instagram.com/henrique.c1_" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <X size={20} />
              </button>
              <div className="h-64 bg-gray-200 overflow-hidden rounded-t-2xl">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t.projects.technologiesUsed}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github size={20} />
                    <span>{t.projects.viewCode}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;