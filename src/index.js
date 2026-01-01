import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function SapiensWebsite() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [activeTab, setActiveTab] = useState('excerpt');

  const chapters = [
    {
      id: 1,
      number: 1,
      title: 'Животное, отличающееся от других',
      description: 'История возникновения Homo sapiens и его предков',
      excerpt: 'Около 13,5 миллиардов лет назад возникла материя и энергия.',
      questions: ['Что отличает Homo sapiens от других животных?', 'Как развивались предки человека?', 'Какие биологические изменения были ключевыми?'],
      images: ['https://images.unsplash.com/photo-1504681869696-d977211a0eeb?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=300&fit=crop']
    },
    {
      id: 2,
      number: 2,
      title: 'Дерево познания',
      description: 'Когнитивная революция и её последствия',
      excerpt: 'Около 70 тысяч лет назад произошла когнитивная революция.',
      questions: ['Какова была когнитивная революция?', 'Как способность к воображению изменила историю?', 'Почему мифы так важны?'],
      images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop']
    },
    {
      id: 3,
      number: 3,
      title: 'День охотника-собирателя',
      description: 'Жизнь древних людей до сельского хозяйства',
      excerpt: 'Охотники-собиратели обладали богатым языком и сложными социальными структурами.',
      questions: ['Была ли жизнь охотников-собирателей примитивной?', 'Какие преимущества имел их образ жизни?', 'Был ли переход к земледелию прогрессом?'],
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1518495285542-c8f051d4c744?w=500&h=300&fit=crop']
    },
    {
      id: 4,
      number: 4,
      title: 'Потоп',
      description: 'Расселение человечества по земле',
      excerpt: 'Сапиенсы адаптировались почти ко всем условиям на Земле.',
      questions: ['Как люди адаптировались к разным климатам?', 'Какую роль сыграла креативность?', 'Как география повлияла на развитие культур?'],
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=300&fit=crop']
    },
    {
      id: 5,
      number: 5,
      title: 'История лучше не писать',
      description: 'Появление письменности и государства',
      excerpt: 'Письменность позволила управлять большими государствами.',
      questions: ['Как письменность изменила управление?', 'Почему первые записи были учетом?', 'Какова роль письменности в государствах?'],
      images: ['https://images.unsplash.com/photo-1507842211343-583f20270319?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1507842211343-583f20270319?w=500&h=300&fit=crop']
    },
    {
      id: 6,
      number: 6,
      title: 'Чума капитализма',
      description: 'Древние империи и их системы',
      excerpt: 'Империи охватывают множество различных народов и культур.',
      questions: ['Как империи управляли разными народами?', 'Какие механизмы сохраняли единство?', 'Был ли имперский строй прогрессом?'],
      images: ['https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=300&fit=crop']
    },
    {
      id: 7,
      number: 7,
      title: 'Встреча с Америкой',
      description: 'Эпоха географических открытий',
      excerpt: 'Это событие изменило ход всей человеческой истории.',
      questions: ['Как встреча цивилизаций изменила мир?', 'Почему европейцы завоевали Америку?', 'Каковы были долгосрочные последствия?'],
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop']
    },
    {
      id: 8,
      number: 8,
      title: 'Научная революция',
      description: 'Зарождение современной науки',
      excerpt: 'Учёные признали, что существуют пробелы в их знаниях.',
      questions: ['Что такое научный метод?', 'Как признание незнания привело к науке?', 'Какова роль науки в современном мире?'],
      images: ['https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop']
    },
    {
      id: 9,
      number: 9,
      title: 'Индустриальная революция',
      description: 'Трансформация общества и экономики',
      excerpt: 'Машины начали заменять людей и расходовать ископаемые ресурсы.',
      questions: ['Как машины изменили экономику?', 'Были ли положительные последствия индустриализации?', 'Какова роль ископаемых топлив?'],
      images: ['https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1581092160562-40feed08a289?w=500&h=300&fit=crop']
    },
    {
      id: 10,
      number: 10,
      title: 'Конец человечества',
      description: 'Будущее Homo sapiens и искусственного интеллекта',
      excerpt: 'Мы стоим перед выбором о том, что мы хотим стать в будущем.',
      questions: ['Какое будущее нас ждет в эпоху AI?', 'Должны ли мы бояться прогресса?', 'Что означает быть человеком в будущем?'],
      images: ['https://images.unsplash.com/photo-1677442d019cecf8d01cd100a7a4e60fb1ae695c?w=500&h=300&fit=crop', 'https://images.unsplash.com/photo-1620712014215-c8c5788f46a9?w=500&h=300&fit=crop']
    }
  ];

  const filteredChapters = chapters.filter(chapter =>
    chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fef3c7 0%, white 50%, #f5f3f0 100%)' }}>
      <nav style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1rem', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f' }}>📚 Sapiens</h1>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#78716c' }}>Юваль Ноа Харари</p>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#78350f', marginBottom: '1rem' }}>Краткая история человечества</h2>
          <p style={{ fontSize: '1.125rem', color: '#57534e', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Как Homo sapiens пришёл к господству над миром? Какие революции сформировали нашу историю? Куда мы идём в будущем?
          </p>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #fcd34d 0%, #e5e7eb 100%)', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#78350f', fontWeight: '600', fontSize: '1.125rem', fontStyle: 'italic' }}>История не движется к цели</p>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 2rem' }}>
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Поиск по главам..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.5rem',
              border: '2px solid #fed7aa',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              backgroundColor: 'white'
            }}
          />
          <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>🔍</span>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 3rem' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#78350f', marginBottom: '2rem' }}>Главы книги</h3>
        
        {filteredChapters.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: '#9f9b97', fontSize: '1.125rem' }}>Главы не найдены</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
            {filteredChapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => setSelectedChapter(selectedChapter?.id === chapter.id ? null : chapter)}
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  border: selectedChapter?.id === chapter.id ? '2px solid #b45309' : '2px solid #e7e5e4',
                  background: selectedChapter?.id === chapter.id ? '#fef3c7' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #fde68a 0%, #fcd34d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#78350f',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {chapter.number}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#78350f' }}>{chapter.title}</h4>
                    <p style={{ color: '#78716c', marginTop: '0.5rem' }}>{chapter.description}</p>
                  </div>
                </div>
                
                {selectedChapter?.id === chapter.id && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '2px solid #fcd34d' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveTab('excerpt'); }}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: '0.25rem',
                          border: 'none',
                          cursor: 'pointer',
                          background: activeTab === 'excerpt' ? '#b45309' : '#fef08a',
                          color: activeTab === 'excerpt' ? 'white' : '#78350f',
                          fontWeight: '500'
                        }}
                      >
                        Отрывок
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveTab('questions'); }}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: '0.25rem',
                          border: 'none',
                          cursor: 'pointer',
                          background: activeTab === 'questions' ? '#b45309' : '#fef08a',
                          color: activeTab === 'questions' ? 'white' : '#78350f',
                          fontWeight: '500'
                        }}
                      >
                        Вопросы
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveTab('images'); }}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: '0.25rem',
                          border: 'none',
                          cursor: 'pointer',
                          background: activeTab === 'images' ? '#b45309' : '#fef08a',
                          color: activeTab === 'images' ? 'white' : '#78350f',
                          fontWeight: '500'
                        }}
                      >
                        Изображения
                      </button>
                    </div>

                    {activeTab === 'excerpt' && (
                      <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#78350f', marginBottom: '0.5rem' }}>Отрывок:</p>
                        <p style={{ color: '#57534e', lineHeight: '1.6', fontStyle: 'italic' }}>{chapter.excerpt}</p>
                      </div>
                    )}

                    {activeTab === 'questions' && (
                      <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#78350f', marginBottom: '0.75rem' }}>Вопросы для рефлексии:</p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {chapter.questions.map((q, idx) => (
                            <li key={idx} style={{ color: '#57534e', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                              <span style={{ color: '#b45309', fontWeight: 'bold' }}>{idx + 1}.</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'images' && (
                      <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#78350f', marginBottom: '0.75rem' }}>Визуальные материалы:</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                          {chapter.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`Изображение ${idx + 1}`}
                              style={{ width: '100%', height: '128px', objectFit: 'cover', borderRadius: '0.5rem', border: '1px solid #fed7aa' }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={{ background: 'linear-gradient(90deg, #fef3c7 0%, #f5f3f0 100%)', color: '#78350f', padding: '3rem 1rem', marginTop: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#92400e' }}>10</p>
            <p style={{ color: '#78716c', marginTop: '0.5rem' }}>Основных глав</p>
          </div>
          <div>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#92400e' }}>70k+</p>
            <p style={{ color: '#78716c', marginTop: '0.5rem' }}>Лет истории</p>
          </div>
          <div>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#92400e' }}>30+</p>
            <p style={{ color: '#78716c', marginTop: '0.5rem' }}>Вопросов для размышления</p>
          </div>
        </div>
      </section>

      <footer style={{ background: 'white', color: '#78716c', padding: '2rem 1rem', marginTop: '3rem', textAlign: 'center', borderTop: '1px solid #fed7aa' }}>
        <p style={{ marginBottom: '0.5rem' }}>© 2025 Sapiens Study Platform</p>
        <p style={{ fontSize: '0.875rem', color: '#9f9b97' }}>Основано на книге Юваля Ноа Харари</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SapiensWebsite />);
