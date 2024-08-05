import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Smartphone com tela de 6.5 polegadas, câmera de 48MP, bateria de longa duração, e sistema operacional atualizado.',
      price: 899.99,
      available: true
    },
    {
      id: 2,
      name: 'Notebook Pro',
      description: 'Notebook com processador Intel i7, 16GB de RAM, 512GB SSD, e placa de vídeo dedicada para alto desempenho.',
      price: 1299.99,
      available: true
    },
    {
      id: 3,
      name: 'Fone de Ouvido Bluetooth',
      description: 'Fone de ouvido com cancelamento de ruído ativo, alta qualidade de som, e bateria com duração de 20 horas.',
      price: 199.99,
      available: true
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Relógio inteligente com monitoramento de atividades físicas, medidor de batimentos cardíacos, e integração com smartphone.',
      price: 249.99,
      available: false
    },
    {
      id: 5,
      name: 'Câmera DSLR',
      description: 'Câmera DSLR com lente 18-55mm, sensor de alta resolução, e capacidade para gravar vídeos em Full HD.',
      price: 499.99,
      available: true
    },
    {
      id: 6,
      name: 'Teclado Mecânico',
      description: 'Teclado mecânico com iluminação RGB, switches de alta durabilidade, e design ergonômico.',
      price: 129.99,
      available: true
    },
    {
      id: 7,
      name: 'Mouse Gamer',
      description: 'Mouse gamer com sensor de 16000 DPI, botões programáveis, e iluminação RGB personalizável.',
      price: 79.99,
      available: true
    },
    {
      id: 8,
      name: 'Monitor 4K',
      description: 'Monitor de 27 polegadas com resolução 4K, taxa de atualização de 60Hz, e suporte para HDR.',
      price: 399.99,
      available: false
    },
    {
      id: 9,
      name: 'Caixa de Som Bluetooth',
      description: 'Caixa de som portátil com conexão Bluetooth, resistência à água, e bateria com duração de 10 horas.',
      price: 59.99,
      available: true
    },
    {
      id: 10,
      name: 'Tablet 10"',
      description: 'Tablet com tela de 10 polegadas, 64GB de armaznameto, e compatibilidade com caneta stylus.',
      price: 299.99,
      available: true
    },
    {
      id: 11,
      name: 'HD Externo 1TB',
      description: 'HD externo com capacidade de 1TB, conexão USB 3.0, e design portátil.',
      price: 79.99,
      available: true
    },
    {
      id: 12,
      name: 'Smart TV 55"',
      description: 'Smart TV de 55 polegadas com resolução 4K, suporte para aplicativos de streaming, e controle por voz.',
      price: 699.99,
      available: false
    },
    {
      id: 13,
      name: 'Console de Videogame',
      description: 'Console de videogame de última geração com gráficos em 4K, armaznameto expansível, e controle sem fio.',
      price: 499.99,
      available: true
    },
    {
      id: 14,
      name: 'Roteador Wi-Fi 6',
      description: 'Roteador com suporte para Wi-Fi 6, alta velocidade de conexão, e cobertura para grandes áreas.',
      price: 129.99,
      available: true
    },
    {
      id: 15,
      name: 'Câmera de Segurança',
      description: 'Câmera de segurança com resolução HD, visão noturna, e conectividade Wi-Fi.',
      price: 89.99,
      available: true
    },
    {
      id: 16,
      name: 'Impressora Multifuncional',
      description: 'Impressora com funções de impressão, cópia, digitalização, e conectividade sem fio.',
      price: 149.99,
      available: false
    },
    {
      id: 17,
      name: 'Aparelho de Som',
      description: 'Aparelho de som com qualidade de áudio Hi-Fi, múltiplas entradas, e controle remoto.',
      price: 199.99,
      available: true
    },
    {
      id: 18,
      name: 'Ar Condicionado Portátil',
      description: 'Ar condicionado portátil com controle remoto, várias opções de resfriamento, e função de desumidificação.',
      price: 299.99,
      available: true
    },
    {
      id: 19,
      name: 'Cafeteira Expresso',
      description: 'Cafeteira expresso com moedor de grãos integrado, várias opções de preparo, e fácil limpeza.',
      price: 249.99,
      available: true
    },
    {
      id: 20,
      name: 'Máquina de Lavar',
      description: 'Máquina de lavar com capacidade de 10kg, várias opções de lavagem, e eficiência energética.',
      price: 599.99,
      available: false
    },
    {
      id: 21,
      name: 'Ventilador de Torre',
      description: 'Ventilador de torre com controle remoto, várias velocidades, e design moderno.',
      price: 89.99,
      available: true
    },
    {
      id: 22,
      name: 'Micro-ondas',
      description: 'Micro-ondas com capacidade de 20 litros, várias opções de cozimento, e design compacto.',
      price: 129.99,
      available: true
    },
    {
      id: 23,
      name: 'Purificador de Água',
      description: 'Purificador de água com filtro de alta eficiência, várias opções de temperatura, e fácil instalação.',
      price: 199.99,
      available: true
    },
    {
      id: 24,
      name: 'Fogão 4 Bocas',
      description: 'Fogão com 4 bocas, forno com capacidade de 60 litros, e acendimento automático.',
      price: 399.99,
      available: true
    },
    {
      id: 25,
      name: 'Geladeira Frost Free',
      description: 'Geladeira com tecnologia frost free, capacidade de 300 litros, e compartimentos especiais.',
      price: 799.99,
      available: false
    },
    {
      id: 26,
      name: 'Forno Elétrico',
      description: 'Forno elétrico com capacidade de 40 litros, várias opções de assado, e design moderno.',
      price: 149.99,
      available: true
    },
    {
      id: 27,
      name: 'Aspirador de Pó',
      description: 'Aspirador de pó com alta potência, vários acessórios, e design compacto.',
      price: 99.99,
      available: true
    },
    {
      id: 28,
      name: 'Máquina de Costura',
      description: 'Máquina de costura com várias opções de pontos, fácil de usar, e design portátil.',
      price: 199.99,
      available: true
    },
    {
      id: 29,
      name: 'Bicicleta Ergométrica',
      description: 'Bicicleta ergométrica com monitor de desempenho, várias opções de resistência, e design confortável.',
      price: 299.99,
      available: true
    },
    {
      id: 30,
      name: 'Churrasqueira Elétrica',
      description: 'Churrasqueira elétrica com controle de temperatura, fácil de limpar, e design portátil.',
      price: 89.99,
      available: true
    }
  ]);
}
