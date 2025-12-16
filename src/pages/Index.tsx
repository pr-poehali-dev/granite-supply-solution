import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    { name: 'Гранитная плита', description: 'Модульная, мощения' },
    { name: 'Гранитная брусчатка', description: 'Колотая, пиленно-колотая, полнопиленная, термообработанная' },
    { name: 'Гранитные бордюры', description: 'Стандартные и радиусные' },
    { name: 'Гранитные слэбы', description: 'Крупноформатные плиты' },
    { name: 'Брусчатка гальтованная', description: 'С закругленными краями' },
    { name: 'Дополнительные изделия', description: 'МАФы, ограждения, фонтаны, пандусы, болларды, памятники' }
  ];

  const deliveryTerms = [
    { title: 'Минимальный объем', text: 'От 70 м²' },
    { title: 'Максимальный объем', text: 'До 50 000 м²' },
    { title: 'Гарантия качества', text: '100% соответствие стандартам' },
    { title: 'Условия оплаты', text: 'Гибкие схемы для постоянных клиентов' }
  ];

  const faqData = [
    {
      question: 'Какой минимальный объем заказа?',
      answer: 'Минимальный объем поставки составляет 70 м². Это позволяет нам обеспечить оптимальную стоимость доставки и качество обслуживания.'
    },
    {
      question: 'Как долго занимает доставка?',
      answer: 'Сроки доставки зависят от объема заказа и вашего местоположения. Стандартная доставка по Свердловской области — 3-7 дней с момента подтверждения заказа.'
    },
    {
      question: 'Предоставляете ли вы образцы материала?',
      answer: 'Да, мы предоставляем образцы гранита для оценки качества перед оформлением крупного заказа. Свяжитесь с нами для уточнения деталей.'
    },
    {
      question: 'Какие документы предоставляются с продукцией?',
      answer: 'Вместе с каждой поставкой предоставляются сертификаты качества, паспорта на продукцию и все необходимые сопроводительные документы.'
    },
    {
      question: 'Возможна ли доставка в другие регионы?',
      answer: 'Да, мы осуществляем доставку по всей России. Стоимость и сроки рассчитываются индивидуально в зависимости от региона и объема заказа.'
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Гранит Про</h1>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('products')} className="text-sm hover:text-primary transition-colors">Продукция</button>
              <button onClick={() => scrollToSection('delivery')} className="text-sm hover:text-primary transition-colors">Условия</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">Вопросы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </nav>
            <a href="tel:+79826654577">
              <Button className="hidden md:inline-flex">+7 (982) 665-45-77</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Оптовые поставки гранита</h2>
              <p className="text-xl text-muted-foreground mb-4">От 70 м² до 50 000 м²</p>
              <p className="text-lg text-muted-foreground mb-8">Высочайшее качество, надежность поставок, гибкие условия сотрудничества</p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')}>Связаться</Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('products')}>Каталог</Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <img 
                src="https://cdn.poehali.dev/projects/af10dde2-ed55-479c-af68-5b4c342ac318/files/89cfe9e4-c143-43fc-a28a-827cd0fd5042.jpg" 
                alt="Гранит" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Компания «Гранит Про» специализируется на оптовых поставках изделий из гранита высочайшего качества. 
              Мы предлагаем широкий ассортимент продукции, начиная от классической гранитной плиты и заканчивая 
              уникальными монументальными памятниками.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">70+</div>
                <p className="text-muted-foreground">Минимальный объем (м²)</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50 000</div>
                <p className="text-muted-foreground">Максимальный объем (м²)</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Гарантия качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Продукция</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Terms */}
      <section id="delivery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Условия доставки и сотрудничества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {deliveryTerms.map((term, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">{term.title}</h3>
                <p className="text-muted-foreground">{term.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Вопросы и ответы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">Свердловская область, Екатеринбург,<br />2-я Новосибирская улица, д. 68</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <a href="tel:+79826654577" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (982) 665-45-77
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Готовы обсудить заказ?</h3>
              <p className="mb-6 opacity-90">Свяжитесь с нами прямо сейчас, и мы подготовим для вас индивидуальное коммерческое предложение</p>
              <a href="tel:+79826654577">
                <Button size="lg" variant="secondary" className="w-full">
                  Позвонить нам
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Гранит Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
