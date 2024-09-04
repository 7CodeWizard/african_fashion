import { prisma } from "../lib/prisma";

async function main() {
    await prisma.good.createMany({
        data: [
            // !Gladden Island - 01
            {
                name: "FrenchGeorges",
                description:
                    "Um Resort de Ilha Privada Construído para um a dois casais - Tudo está incluído. Um redemoinho de lagoas azul-turquesa e marinhas berço Gladden Private Island, uma ilha rodeada de areia branca a 20 milhas a nordeste de Placencia, no coração da Barreira de Corais de Belize. Esta joia da ilha abriga seu próprio santuário privado, uma vila casualmente elegante projetada para apenas um - dois casais, com o serviço completo de um resort de luxo. Tudo incluído: Todas as refeições preparadas por um chef gourmet, todas as bebidas, incluindo vinhos finos, todas as atividades, incluindo mergulho com snorkel, mergulho e certificação PADI, tratamentos de spa, traslados de e para a cidade de Belize. Incluído no preço para uma estadia de 7 dias está um traslado de helicóptero de ida e volta de 35 minutos sobre o recife de barreira diretamente para Gladden.",
                location: "Cidade de Belize, Belize",
                locationDescription:
                    "Embora a maioria das experiências de ilhas privadas exijam jatos para os confins do mundo, Gladden Private Island oferece a beleza natural e a tranquilidade de um atol polinésio a apenas quatro horas de Miami.",
                countryCode: "BZ",
                coverImage:
                    "/George.JPG",
                imagesUrl: [
                    "/George4.JPG",
                    "/George1.JPG",
                    "/George2.JPG",
                    "/George3.JPG",
                ],
                price: 23795,
                highlights: [
                    "HDTV de 55 com Amazon Prime, Disney+, HBO Max, Netflix...",
                    "Sistema de som Sonos com Bluetooth",
                    "Mesa de bilhar",
                    "Livros e material de leitura",
                    "Cercadinho/berço portátil",
                    "Jogos de tabuleiro",
                    "Recomendações de babás",
                    "Ar-condicionado split",
                    "Alarme de monóxido de carbono",
                    "Wi-Fi e Espaço de trabalho exclusivo",
                    "Vista para as águas, Ao lado de uma orla",
                    "Café da Manhã",
                    "Limpeza disponível durante a estadia",
                ],
                recommended: true,
                maxGuests: 4,
                checkIn: "após 15:00",
                checkOut: "antes das 12:00",
                type: "Georges",
            },
            // !Cabana do Sossego - 02
            {
                name: "SilkGeorge",
                description:
                    "Venha se hospedar na primeira Cabana A-Frame do Sul de Minas. A Cabana do Sossego foi inspirada nas Cabanas americanas e canadenses. Um encontro lindo da natureza com a Arquitetura.Feita toda em madeira rústica, e decorada com todo luxo e design para que o hospede tenha uma experiência inesquecível com requinte e aconchego. Alem de contato com a natureza, descanso e tranquilidade. Aproveite o sossego de nossa região para curtir momentos a dois, descansar e se divertir na Serra da Mantiqueira.",
                location: "Bairro Mellos, Brasil",
                locationDescription:
                    "O Bairro dos Mellos é um bairro rural e familiar. Nao possui mercados, mas fica bem proximo do centro da cidade de Piranguçu. Estamos a 1h40m de Campos do Jordao.",
                countryCode: "BR",
                coverImage:
                    "/George1.JPG",
                imagesUrl: [
                    "/George4.JPG",
                    "/George.JPG",
                    "/George2.JPG",
                    "/George3.JPG",
                ],
                price: 1050,
                highlights: [
                    "Vista para as montanhas",
                    "Câmeras de segurança",
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Banheira",
                    "TV",
                    "Ar-condicionado",
                    "Fogueira",
                    "Churrasqueira",
                    "Permitido animais",
                    "Café da manhã",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "após 15:00",
                checkOut: "antes das 11:00",
                type: "Georges",
            },
            // !Dragon Temple - 03
            {
                name: "NetGeorge",
                description:
                    "O Templo Zen tem mais de 1.000 anos, com armaduras samurais e gaiolas que remontam a 600 anos.A casa de hóspedes foi projetada com arquitetura japonesa, para que você possa ficar confortavelmente. Você terá seu próprio banheiro privativo e banheiro.Tente participar do seu zazen matinal. Preparamos comida japonesa grátis para o café da manhã. O jantar também pode ser preparado por 2.500 ienes. Eu começo este hotel templo para dizer às pessoas a verdadeira atratividade da cultura japonesa e sentimentos de gratidão através da experiência que você só pode ter no templo. O chef feito pelo chef exclusivo é de 2500 ienes .É necessário fazer reservas. O cozimento automático também é possível. Dentro do templo e templos. Este lugar é casa de estilo japonês e geralmente usado de alta classe restaurante de estilo japonês servindo japonês , executado pelo nosso templo. O templo Ryutakuzenji é apenas ao lado da casa.",
                location: "Takasaki-shi, Japão",
                locationDescription:
                    "Não há lojas ao redor, e esperamos que você aprecie o luar, a beleza das estrelas, o som de insetos e o gosto profundo do Templo Zen.",
                countryCode: "JP",
                coverImage:
                    "/George2.JPG",
                imagesUrl: [
                    "/George4.JPG",
                    "/George1.JPG",
                    "/George.JPG",
                    "/George3.JPG",
                ],
                price: 888,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Jacuzzi privativa",
                    "Máquina de Lavar",
                    "Ar-condicionado",
                    "Pátio ou varanda (Privativa)",
                    "Quintal",
                    "Lareira interna",
                ],
                recommended: true,
                maxGuests: 5,
                checkIn: "15:00 - 21:00",
                checkOut: "antes das 10:00",
                type: "Georges",
            },
            // !Domo Geodésico - 04
            {
                name: "StonedGeorges",
                description:
                    "Um domo geodésico que é uma estrutura arredondada, toda feita em madeira ecologicamente tratada. As vibrações dentro dessas estruturas são únicas. Seus 45 metros quadrados contam com uma suíte com mezanino, uma cozinha toda equipada com fogão, forno, frigobar, airfryer e todos os utensílios para “chefs” aspirantes. O chalé possui ar condicionado, um banheiro espaçoso e ducha elétrica. O ponto alto sem dúvida é o painel de vidro contemplando as cadeias de montanha da Serra da Mantiqueira. O Domo foi projetado ao redor da cama queen, priorizando a experiência de sono e descanso dos hóspedes. Por isso, temos o icônico colchão e travesseiros da Zissou que trazem excelência nas sensações de conforto, suporte e toque. Da porta para fora já se pode sentir a presença da natureza. O domo conta com sua própria horta de temperos e chás para os hóspedes se servirem a vontade.",
                location: "Monteiro Lobato, Brasil",
                locationDescription:
                    "A pérola de Monteiro Lobato é o Bairro dos Souzas. Aqui há uma venda de produtos orgânicos, veganos e sustentáveis. Também tem um mercado com tudo que você possa imaginar, a apenas 3km da cabana. Um pequeno bistrô que abre alguns dias por semana. E um produtor de pães de fermentação natural que é um dos melhores que já provamos. Em Monteiro Lobato temos restaurantes de alguns estilos diferentes, um restaurante a la carte, uma lanchonete e um restaurante de comida caipira. Existem trilhas que podem ser feitas, tanto no terreno do sítio quanto em locais próximos também com visuais de tirar o fôlego.",
                countryCode: "BR",
                coverImage:
                    "/George4.JPG",
                imagesUrl: [
                    "/George4.JPG",
                    "/George1.JPG",
                    "/George2.JPG",
                    "/George.JPG",
                ],
                price: 810,
                highlights: [
                    "Vista para as montanhas",
                    "Água quente",
                    "Wi-Fi rápido(50 Mbps)",
                    "Jogos de tabuleiro",
                    "Cozinha",
                    "Acesso ao lago",
                    "Ar-condicionado split",
                    "Acesso ao lago",
                    "Fogueira",
                    "Churrasqueira",
                    "Jacuzzi privativa",
                    "Estacionamento incluído",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "após 12:00",
                checkOut: "antes das 09:00",
                type: "Georges",
            },
            // !Alianz Loft - 05
            {
                name: "NetLace",
                description:
                    "A 20 minutos do aeroporto de San José. Primeiro loft construído por Alianz. Contém um terraço decorado, jacuzzi, lareira, jardim de coelhos, dois quartos, duas varandas, portão de entrada, jardim privado, estacionamento privado, área para churrasco, ar condicionado em cada quarto, quadra de basquete, camas de luxo e vista para a montanha. Ideal para amantes da arquitetura, encontros românticos ou para se divertir. É um espaço único do tipo dele. Apenas animais de estimação que não prejudiquem coelhos são permitidos.",
                location: "San Roque de Barva, Costa Rica",
                locationDescription:
                    "Cidade pequena, muito perto das principais estradas principais ou das áreas de vulcão ou cachoeiras. Por favor, verifique o guia. Estadia recomendada um dia no apartamento relaxante. O restaurante mais recomendado fica a Casa Grande a 5 minutos de distância, ou comida mais típica Carretica a 8 minutos de distância. Supermercado Automercado se realmente completa mercearia agradável. Mais lugares visitados para viajar são as cachoeiras La Paz.",
                countryCode: "CR",
                coverImage:
                    "/Lace1.JPG",
                imagesUrl: [
                    "/Lace5.JPG",
                    "/Lace2.JPG",
                    "/Lace3.JPG",
                    "/Lace4.JPG",
                ],
                price: 1600,
                highlights: [
                    "Vista para o horizonte da cidade",
                    "Vista para as montanhas",
                    "HDTV de 52 com Apple TV e TV a cabo",
                    "Sistema de som Bose com Bluetooth",
                    "Equipamento para exercícios: tapete de ioga",
                    "Climatização: Ar-condicionado split",
                    "Câmeras de segurança na propriedade",
                    "Wi-Fi",
                    "Cozinha totalmente equipada",
                    "Churrasqueira",
                    "Jacuzzi privativa",
                    "Estacionamento incluído",
                    "Permitido animais",
                    "É permitido deixar as malas",
                    "Permitido fumar",
                    "Estadias de longa duração são permitidas",
                ],
                recommended: true,
                maxGuests: 4,
                checkIn: "após 14:00",
                checkOut: "antes das 11:00",
                type: "Laces",
            },
            // !Bosque Encantado - 06
            {
                name: "CordLace",
                description:
                    "Viva uma imersão na Mata Atlântica, com muito conforto e aventura. Alimentação inclusa no valor da diária, Experiências na Horta Orgânica, Hiking, BirdWatching, Biking, Charcutaria, Sauna, Piscina Natural, Fogueira sob o céu estrelado e muito mais. A vista para o Bosque, o som dos pássaros, a luz ao amanhecer, as portas para o terraço privativo a beira do lago, a lareira e todos os detalhes pensados com muito carinho. Situada na sede da Reserva Mata Grande, a Suíte Bosque é um encanto.",
                location: "Biritiba Mirim, Brasil",
                locationDescription:
                    "Em meio à encantadora cidade de Biritiba Mirim, no coração do estado de São Paulo, Brasil, encontra-se a Suite Bosque encantado, uma acomodação única que oferece uma experiência verdadeiramente mágica de contato com a natureza. Este retiro encantador está estrategicamente situado em um bosque exuberante, onde a tranquilidade e a serenidade reinam supremas.",
                countryCode: "BR",
                coverImage:
                    "/Lace2.JPG",
                imagesUrl: [
                    "/Lace5.JPG",
                    "/Lace1.JPG",
                    "/Lace3.JPG",
                    "/Lace4.JPG",
                ],
                price: 1120,
                highlights: [
                    "Tranca na porta do quarto",
                    "Vista para as águas",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Piscina",
                    "Sauna",
                    "Quintal",
                    "Lareira interna",
                    "Mesa de bilhar",
                    "Lareira interna",
                    "Kit de primeiros socorros",
                    "Café da manhã",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "após 15:00",
                checkOut: "antes das 11:00",
                type: "Laces",
            },
            // !Villa Joglo - 07
            {
                name: "RegularLace",
                description:
                    "A Villa Joglo é uma propriedade deslumbrante situada entre a floresta tropical na Praia de Setangi, a 10 minutos ao norte do centro de Senggigi. O design de interiores possui arquitetura e design javaneses tradicionais, com um toque moderno e confortável. A propriedade tem 3 edifícios separados e independentes que se interligam através de uma passarela central, permitindo que até 12 hóspedes fiquem juntos em um complexo, mas com privacidade quando necessário. Uma piscina central está localizada na villa principal para que todos possam desfrutar. Esta bela vila nova é composta por 3 edifícios separados que se interligam através de uma passarela central, permitindo que os hóspedes fiquem juntos em um complexo, mas com privacidade quando necessário. A villa acomoda até 12 pessoas. Se reservar para 1-4 pessoas, terá acesso ao maior edifício - Villa Java. Se forem necessários quartos adicionais, você também terá acesso à Villa Robert e/ou à Villa Caroline. A villa está localizada na Praia de Setangi, a 10 minutos de carro do norte do centro de Senggigi.",
                location: "Pemenang, Indonésia",
                locationDescription:
                    "Senggigi está se tornando um destino muito popular para pessoas que querem escapar das áreas turísticas movimentadas de Bali. Tem todos os confortos de Bali - restaurantes ocidentais, massagens e salões de beleza, cafés, lojas de souvenirs, praias e bares. Setangi Beach é uma praia bonita, geralmente muito tranquila 10 minutos ao norte do centro de Senggigi. A partir da nossa vila, você pode caminhar por aproximadamente 5-10 minutos pela vila tranquila diretamente até a praia. Os coqueiros altos enchem a área gramada em frente à praia, criando silhuetas lindas enquanto você se aproxima da praia para observar o pôr do sol sobre a água. Lendung Luar é o nome da aldeia onde nossa vila está localizada. É tranquilo, local e pequeno, com apenas algumas pequenas lojas que vendem produtos básicos. As pessoas que vivem aqui cultivam principalmente suas pequenas terras. Há um centro de ioga ao lado da nossa vila com aulas diárias de ioga e outro hotel com bar e restaurante a uma curta caminhada de distância em direção à praia.",
                countryCode: "ID",
                coverImage:
                    "/Lace4.JPG",
                imagesUrl: [
                    "/Lace5.JPG",
                    "/Lace2.JPG",
                    "/Lace3.JPG",
                    "/Lace4.JPG",
                ],
                price: 378,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Piscina",
                    "TV",
                    "Ar-condicionado",
                    "Quintal",
                    "Secador de cabelo",
                ],

                recommended: false,
                maxGuests: 12,
                checkIn: "após 14:00",
                checkOut: "antes das 12:00",
                type: "Laces",
            },
            // !Portugas - 08
            {
                name: "SuperWax",
                description:
                    "Os chalés são mobiliados com estrutura para até 4 pessoas pernoitarem confortavelmente em camas . No chalé tem fogão cook top de 2 bocas, geladeira, utensílios necessários para uma refeição rápida e quintal e lavanderia. Um lugar tranquilo, familiar e seguro, onde os hospedes podem usufruir de diárias, locações mensais e anuais. Estamos na praia com clima de montanha localizados dentro do condomínio Morada da Praia .",
                location: "Bertioga, Brasil",
                locationDescription:
                    "Estamos dentro do condomínio Morada da Praia ,nele tem ônibus que circulam gratuitamente de hora em hora pela avenida principal. Tem Food Park ,são foodtruks com comidinhas e musica ao vivo, barzinhos, centrinho comercial com padaria ,mercadinho, sorveteria, pizzaria, restaurante e igreja. Nossa praia é a de Boraceia e estamos próximos a praia de Guaratuba ,Barra do Una ,Juqueí entre outras. Aqui também temos passeios náuticos , pesca esportiva, trilhas ,cachoeiras e nossa gastronomia rica em peixes e frutos do mar.",
                countryCode: "BR",
                coverImage:
                    "/Wax1.JPG",
                imagesUrl: [
                    "/Wax1.JPG",
                    "/Wax2.JPG",
                    "/Wax3.JPG",
                    "/Wax4.JPG",
                    "/Wax5.JPG",
                    "/Wax6.JPG",
                ],
                price: 420,
                highlights: [
                    "Vista para as montanhas",
                    "Banheiro",
                    "Wi-Fi",
                    "Cozinha",
                    "Estacionamento incluído",
                    "Piscina",
                    "Ar-condicionado",
                    "Câmeras de segurança na propriedade",
                    "Espaço de trabalho exclusivo",
                    "Mesa de jantar",
                    "Pátio ou varanda",
                    "Permitido animais",
                ],
                recommended: false,
                maxGuests: 4,
                checkIn: "15:00 - 18:00",
                checkOut: "antes das 10:00",
                type: "Waxes",
            },
            // !Yui Valley - 09
            {
                name: "DavitaWax",
                description:
                    "Bem-vindo ao Yui Valley ! Uma parada refrescante entre Tóquio e Quioto. No campo, simples casa tradicional de agricultores cercada por Montanhas Verdes Exuberantes, florestas de bambu, rios e campos de chá. Fora do caminho turístico habitual, descubra o lado rural do Japão. Venha relaxar e curtir diferentes atividades: Caminhada com vista para o Monte Fuji, uma caminhada para atravessar bambu e campos de chá, cerimônia do chá verde, fonte termal, bicicletas, oficina de bambu, Shiatsu, tratamento de acupuntura ou mergulho no rio. Estamos localizados em Shizuoka, entre Tóquio e Kyoto na linha Shinkansen (trem exp.), Então o acesso aqui é fácil e confortável.",
                location: "Fujieda, Japão",
                locationDescription:
                    "Nossa pequena aldeia de agricultores tradicionais é famosa pela colheita de chá verde e brotos de bambu. A casa e a área podem ser boas para quem procura ver a cultura tradicional e local do Japão, um retiro remoto nas colinas e desfrutar de atividades ao ar livre. Você pode se locomover usando o ônibus local, alugando nossas bicicletas ou usando nosso táxi (se eu puder).",
                countryCode: "JP",
                coverImage:
                    "/Wax1.JPG",
                imagesUrl: [
                    "/Wax6.JPG",
                    "/Wax2.JPG",
                    "/Wax3.JPG",
                    "/Wax4.JPG",
                    "/Wax5.JPG",
                    "/Wax6.JPG",
                ],
                price: 592,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Jacuzzi privativa",
                    "Máquina de Lavar",
                    "Ar-condicionado",
                    "Pátio ou varanda (Privativa)",
                    "Quintal",
                    "Lareira interna",
                ],
                recommended: true,
                maxGuests: 6,
                checkIn: "15:00 - 21:00",
                checkOut: "antes das 10:00",
                type: "Waxes",
            },
            // !Aurora - 10
            {
                name: "RealHollandes",
                description:
                    "Local cercado pela mata atlântica, frequentemente visitado por esquilos e pássaros como: Saíra-sete-cores, Tié-sangue, carruíras, maritacas etc. Hospede-se com muita tranquilidade e conforto. Nossas suites encontram-se distantes uma das outras, o cafe da manhã é servido de forma individual ( não temos bufett) em mesas com distância de pelo menos 2 mts umas das outras, sempre efetuamos a limpeza e higienização com todo cuidado e carinho, mas, devido a Covid-19 intensificamos estes cuidados com produtos próprios para desinfecção e higienização, como: álcool 70% e água sanitária em superfícies impermeáveis e com Lysoform em tecidos como colchões e travesseiros a cada check-out, alem da troca das capas impermeáveis dos travesseiros e colchões.",
                location: "Ilhabela, Brasil",
                locationDescription:
                    "Um refúgio paradisíaco localizado na deslumbrante ilha de Ilhabela, no estado de São Paulo, Brasil. Esta pousada encantadora oferece uma experiência única de hospedagem, onde o luxo e o charme se encontram com a beleza natural de uma ilha tropical.",
                countryCode: "BR",
                coverImage:
                    "/Wax4.JPG",
                imagesUrl: [
                    "/Wax1.JPG",
                    "/Wax2.JPG",
                    "/Wax3.JPG",
                    "/Wax4.JPG",
                    "/Wax5.JPG",
                    "/Wax6.JPG",
                ],
                price: 250,
                highlights: [
                    "Vista para o jardim",
                    "Banheiro",
                    "Toalhas e lençóis limpos",
                    "Roupa de cama",
                    "Wi-Fi",
                    "Ar-condicionado de janela/parede",
                    "Tranca na porta do quarto",
                    "Kit de primeiros socorros",
                    "Pátio ou varanda",
                    "Churrasqueira",
                    "Estacionamento gratuito em garagem na propriedade",
                    "Café da Manhã é fornecido",
                ],
                recommended: false,
                maxGuests: 3,
                checkIn: "após 14:00",
                checkOut: "antes das 09:00",
                type: "Waxes",
            },
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
