'use strict';

/* --- CAFÉ DO SACI --- */

var cafe = [{
    name: 'Saci',
    price: 6,
    description: '(pão na chapa + café com leite)',
    group: 'cafe'
}, {
    name: 'Colibri',
    price: 8,
    description: '(bolo + chá)',
    group: 'cafe'
}, {
    name: 'Sabiá',
    price: 10,
    description: '(pão na chapa + 2 ovos mexidos + café com leite)',
    group: 'cafe'
}, {
    name: 'Uirapuru',
    price: 10,
    description: '(empanada + suco natural)',
    group: 'cafe'
}, {
    name: 'Sabiá Laranjeira',
    price: 10,
    description: '(croissant com café expresso)',
    group: 'cafe'
}, {
    name: 'Rouxinol',
    price: 12,
    description: '(minas quente + suco natural)',
    group: 'cafe'
}, {
    name: 'Curió',
    price: 12,
    description: '(levain integral + salada de frutas)',
    group: 'cafe'
}, {
    name: 'Azulão',
    price: 11,
    description: '(pão de queijo + fatia de bolo + expresso)',
    group: 'cafe'
}, {
    name: 'Bicudo',
    price: 11,
    description: '(tapioca + café coado)',
    group: 'cafe'
}, {
    name: 'Pão na Chapa',
    price: 3,
    group: 'cafe'
}, {
    name: 'Minas Quente',
    price: 8,
    group: 'cafe'
}, {
    name: 'Croissant c/ manteiga ou geléia',
    price: 7,
    group: 'cafe'
}, {
    name: 'Levain Integral 2 fatias c/ manteiga ou geléia',
    price: 6,
    group: 'cafe'
}, {
    name: '2 Panquecas com requeijão ou geléia',
    price: 10,
    group: 'cafe'
}, {
    name: '2 Ovos Mexidos',
    price: 5,
    group: 'cafe'
}, {
    name: '2 Ovos Mexidos com proteína (bacon ou cogumelos)',
    price: 8,
    group: 'cafe'
}, {
    name: 'Tapioca Doce ou Salgada',
    price: 10,
    group: 'cafe'
}, {
    name: 'Bolo Fatia',
    price: 4,
    group: 'cafe'
}, {
    name: 'Fruta Inteira ou fatia Melão',
    price: 3,
    group: 'cafe'
}, {
    name: 'Salada de Frutas de Época',
    price: 7,
    group: 'cafe'
}, {
    name: 'Iogurte Natural da casa com fruta, mel e granola',
    price: 7,
    group: 'cafe'
}, {
    name: 'Vitamina do Saci com frutas de Época',
    price: 8,
    group: 'cafe'
}, {
    name: 'Suco Natural de Fruta',
    price: 5,
    group: 'cafe'
}, {
    name: 'Suco Natural Especial',
    price: 6,
    group: 'cafe'
}, {
    name: 'Café Expresso',
    price: 4,
    group: 'cafe'
}, {
    name: 'Café Expresso com Leite',
    price: 6,
    group: 'cafe'
}, {
    name: 'Café Coador com ou sem Leite',
    price: 3,
    group: 'cafe'
}, {
    name: 'Chocolate Quente com Cacau meio Amargo',
    price: 7,
    group: 'cafe'
}, {
    name: 'Caouccino com Chocolate meio Amargo',
    price: 8,
    group: 'cafe'
}, {
    name: 'Chá',
    price: 5,
    group: 'cafe'
}];

var cafeEspecial = [{
    name: 'Iogurte + Salada de Frutas + Suco + Ovos + Cesta c/ Pães + Café',
    price: 30,
    group: 'cafeEspecial'
}]

/* --- GRELHADOS --- */

var grelhados = [{
    name: 'Abobrinha ou Berinjela Vegana',
    price: 22,
    description: '(temperada com sal, pimenta do reino e orégano fresco, grelhadas no azeite)',
    group: 'grelhados'
}, {
    name: 'Contrafilé',
    price: 24,
    description: '(temprado com sal e pimenta do reino, grelhado na hora no azeite)',
    group: 'grelhados'
}, {
    name: 'Filé de Frango Korin',
    price: 24,
    description: '(marinado com limão, sal e curry, grelhado no azeite)',
    group: 'grelhados'
}, {
    name: 'Filé Mignon (escalope)',
    price: 30,
    description: '(temperado com sal e pimenta do reino, grelhado na hora no azeite)',
    group: 'grelhados'
}, {
    name: 'Medalhão de Mignon',
    price: 40,
    description: '(corte alto de mignon, com capa de bacon, preparado na hora)',
    group: 'grelhados'
}, {
    name: 'Filé de Tilápia',
    price: 32,
    group: 'grelhados'
}];

/* --- ESPECIAIS --- */

var especiais = [{
    name: 'Mix de Cogumelos',
    price: 26,
    description: '(shitake, shimeji e paris gralhados no azeite, com molho shoyo, óleo de gergelim e cebolinha picada)',
    group: 'especiais'
}, {
    name: 'Parmegiana Magra de Contrafilé',
    price: 28,
    description: '(temperado com sal e pimenta do reino, grelhado no azeite e finalizada no molho de tomate da casa e queijo muçarela)',
    group: 'especiais'
}, {
    name: 'Parmegiana Magra de Filé de Frango Korin',
    price: 28,
    description: '(temperado com sal, limão e curry, grelhado no azeite e finalizado com molho de tomate da casa e queijo muçarela)',
    group: 'especiais'
}];

/* --- ACOMPANHAMENTOS --- */

var acompPratos = [{
    name: 'Arroz Branco ou Integral',
    price: 5,
    description: '(preparados com refogado de cebola, alho e sal, vegano)',
    group: 'acompanhamentos'
}, {
    name: 'Farofa do Saci Tradicional',
    price: 5,
    description: '(cebola, bacon, linguiças portuguesa e paio, manteiga, farinha de mandioca, sal e salsinha)',
    group: 'acompanhamentos'
}, {
    name: 'Farofa Vegana',
    price: 5,
    description: '(alho poró, azeite de oliva, azeite de dendê, pimenta, farinha de mandioca e sal)',
    group: 'acompanhamentos'
}, {
    name: 'Feijão do Dia',
    price: 4,
    description: '(carioca, fradinho, azuki, vermelho, roxão e preto, refogado com alho e azeite, temperado com louro e sal, vegano)',
    group: 'acompanhamentos'
}, {
    name: 'Legumes do Dia',
    price: 6,
    description: '(mix de legumes da época, pré cozidos ou refogados, temperados com azeite ou manteiga, sal e especiarias ou ervas frescas) comunicar ao garçom se for vegano',
    group: 'acompanhamentos'
}, {
    name: 'Batata Doce com Casca',
    price: 4,
    description: '(pré cozida, grelhada com manteiga ou azeite)',
    group: 'acompanhamentos'
}, {
    name: 'Ovo Frito',
    price: 3,
    group: 'acompanhamentos'
}, {
    name: 'Torradas',
    price: 3,
    group: 'acompanhamentos'
}];

/* --- ENTRADAS --- */

var entradas = [{
    name: 'Salada do Dia',
    price: 6,
    description: '(2 a 3 variedades de folhas, tomates, pepino fatiado, cenoura ou beterraba raladas)',
    group: 'entradas'
}, {
    name: 'Caldo do Dia',
    price: 5,
    description: '(carne ou galinha com legumes/verduras e carboidrato)',
    group: 'entradas'
}, {
    name: 'Caldo Vegano do Dia',
    price: 5,
    description: '(de legumes ou cogumelos com verduras e carboidrato)',
    group: 'entradas'
}, {
    name: 'Torrada Simples',
    price: 3,
    description: '(porção de torradas de pães do dia)',
    group: 'entradas'
}, {
    name: 'Torrada com Pastas',
    price: 8,
    description: '(porção de torradas com azeite, alho e orégano, acompanha manteiga de sálvia ou pastas do dia)',
    group: 'entradas'
}, {
    name: 'Brusqueta',
    price: 12,
    description: '(3 fatias de torrada alta, com molho da casa, queijo e manjericão fresco)',
    group: 'entradas'
}];

/* --- PRATOS BAIXO CARBOIDRATO --- */

var pratoLowCarb = [{
    name: 'Salada Mediterrânea',
    price: 20,
    description: '(Alface, ervilhas, cenoura ralada, tomates, legumes, grelhados e ovo cozido opcional)',
    group: 'lowCarb'
}, {
    name: 'Com Tiras de Fraldinha',
    price: 26,
    description: '(temperada com sal e pimenta do reino, salteada no azeite)',
    group: 'lowCarb'
}, {
    name: 'Com Tiras de Filé de Frango Korin',
    price: 26,
    description: '(temperada com limão, sal, curry, mostarda e gergelim, salteada no azeite)',
    group: 'lowCarb'
}, {
    name: 'Com Cogumelos Frescos Vegana',
    price: 28,
    description: '(shitake, shimeji e paris fatiados, sateados no óleo de gergelim, finalizados no shoyo e cebolinha)',
    group: 'lowCarb'
}, {
    name: 'Com Tilápia a Doré',
    price: 35,
    description: '(temperada com sal, pimenta do reino e raspas de limão, empanado na farinha ou fubá, grelhado no azeite)',
    group: 'lowCarb'
}, {
    name: 'Com Filé Mignon',
    price: 35,
    description: '(corte escalope, temperado com sal e pimenta do reino, grelhado no azeite)',
    group: 'lowCarb'
}];

/* --- PRATOS RÁPIDOS --- */

var pratosRapidos = [{
    name: 'Salada com 1 empanada (tradicional ou vegana)',
    price: 12,
    group: 'pratos rapidos'
}, {
    name: 'Salada com 2 empanadas (tradicional ou vegana)',
    price: 18,
    group: 'pratos rapidos'
}];

/* --- MASSAS --- */

var massas = [{
    name: 'Artesanais sem Recheio do Dia',
    price: 28,
    description: '(produzidas na casa, talharim, espaguete, tagiatelle)',
    group: 'massas'
}, {
    name: 'Artesanais recheadas do dia',
    price: 30,
    description: '(produzidas na casa, ravioli, agnolotti, capeletti)',
    group: 'massas'
}, {
    name: 'Capeletti in brodo',
    price: 30,
    description: '(produzida na casa, com frango Korin)',
    group: 'massas'
}, {
    name: 'Massa Grano Duro sem Ovos Vegana',
    price: 24,
    description: '(escolhida com cuidado por não conter traços de ovos)',
    group: 'massas'
}];

/* --- SOBREMESAS --- */

var sobremesa = [{
    name: 'Pudim',
    price: 6,
    group: 'sobremesa'
}, {
    name: 'Brigadeiro',
    price: 5,
    group: 'sobremesa'
}, {
    name: 'Salada de Frutas',
    price: 7,
    group: 'sobremesa'
}, {
    name: 'Bolo Simples (fatia)',
    price: 4,
    group: 'sobremesa'
}, {
    name: 'Bolo Vegano (fatia)',
    price: 4,
    group: 'sobremesa'
}, {
    name: 'Torta Doce (fatia)',
    price: 6,
    group: 'sobremesa'
}, {
    name: 'Torta Doce do Saci (fatia)',
    price: 8,
    group: 'sobremesa'
}, {
    name: 'Creme de Papaia com Licor',
    price: 8,
    group: 'sobremesa'
}, {
    name: 'Torta de Queijo (fatia)',
    price: 12,
    group: 'sobremesa'
}, {
    name: 'Bolo Quente com Sorvete',
    price: 12,
    group: 'sobremesa'
}, {
    name: 'Açaí com Granola na Tigela',
    price: 12,
    group: 'sobremesa'
}];

/* --- QUITUTERIA --- */

var quituteria = [{
    name: 'Tapioca (doce ou salgada)',
    price: 12,
    group: 'quituteria'
}, {
    name: 'Empanada',
    price: 8,
    group: 'quituteria'
}, {
    name: 'Empanada Vegana',
    price: 8,
    group: 'quituteria'
}, {
    name: 'Coxinha',
    price: 6,
    group: 'quituteria'
}, {
    name: 'Empada',
    price: 6,
    group: 'quituteria'
}];

/* --- JANTAR --- */

var jantar = [{
    name: 'Caldo ou Sopa do Dia',
    price: 15,
    description: '(carne ou galinha com legumes/verduras e carboidrato)',
    group: 'jantar'
}, {
    name: 'Caldo ou Sopa do Dia Vegano',
    price: 15,
    description: '(de legumes ou cogumelos com verduras e carboidrato)',
    group: 'jantar'
}, {
    name: 'Tagliatelle na Manteiga de Sálvia com Proteína',
    price: 38,
    description: '(massa tradicional ou integral produzida na casa, acompanhada por cogumelo, tilápia ou mignon)',
    group: 'jantar'
}, {
    name: 'Quinoa com Legumes Assados Vegano',
    price: 38,
    description: '(refogada e cozida com legumes assados ou refogado)',
    group: 'jantar'
}, {
    name: 'Arroz Especial com Proteína',
    price: 30,
    description: '(integral, com castanhas, acompanhada por cogumelo, ovo, peixe, frango ou carne)',
    group: 'jantar'
}];

/* --- SANDUÍCHES -- */

var sanduiche = [{
    name: 'Sanduíche Carne',
    price: 12,
    group: 'sanduiche'
}, {
    name: 'Sanduíche Vegano',
    price: 12,
    group: 'sanduiche'
}, {
    name: 'Sanduíche Frango',
    price: 12,
    group: 'sanduiche'
}, {
    name: 'Sanduíche Queijos',
    price: 12,
    group: 'sanduiche'
}];

/* --- HORA FELIZ --- */

var horaFeliz = [{
    name: 'Fritas',
    price: 22,
    description: '(acompanha bacon ou queijo)',
    group: 'hora feliz'
}, {
    name: 'Fraldinha Acebolada',
    price: 28,
    description: '(iscas de fraldinha temperadas com sal e pimenta do reino, salteada no azeite com cebola fatiada. acompanha 2 molhos)',
    group: 'hora feliz'
}, {
    name: 'Iscas de Tilápia Empanada',
    price: 32,
    description: '(temperadas com sal, pimenta do reino e raspas de limão, empanadas na panko e fritas. acompanha 2 molhos)',
    group: 'hora feliz'
}, {
    name: 'Mignon',
    price: 36,
    description: '(iscas de mignon temperadas com sal e pimenta do reino, salteada no azeite ou manteiga)',
    group: 'hora feliz'
}, {
    name: 'Frango a Passarinho Korin',
    price: 36,
    description: '(22 pedaços de frango cuidadosamente temperados com sal e especiarias, coberto com alho frito, servido com limão cravo. acompanha 2 molhos)',
    group: 'hora feliz'
}, {
    name: 'Porção de Salgados do Dia',
    price: 26,
    description: '(12 salgadinhos fritos)',
    group: 'hora feliz'
}];

/* --- BEBIDAS --- */

var bebidas = [{
    name: 'Água',
    price: 3,
    group: 'bebidas'
}, {
    name: 'Água com Gás',
    price: 4,
    group: 'bebidas'
}, {
    name: 'Água de Coco',
    price: 6,
    group: 'bebidas'
}, {
    name: 'H20',
    price: 6,
    group: 'bebidas'
}, {
    name: 'Chá Gelado',
    price: 5,
    group: 'bebidas'
}, {
    name: 'Água Tônica',
    price: 6,
    group: 'bebidas'
}, {
    name: 'Energético',
    price: 10,
    group: 'bebidas'
}, {
    name: 'Café Expresso',
    price: 4,
    group: 'bebidas'
}, {
    name: 'Expresso Duplo',
    price: 8,
    group: 'bebidas'
}, {
    name: 'Capuccino ou café com leite',
    price: [6, 8],
    group: 'bebidas'
}, {
    name: 'Chocolate',
    price: [6, 8],
    group: 'bebidas'
}, {
    name: 'Chá',
    price: 5,
    group: 'bebidas'
}, {
    name: 'Sucos Naturais (COPO)',
    price: 5,
    group: 'bebidas'
}, {
    name: 'Sucos Naturais (JARRA)',
    price: 12,
    group: 'bebidas'
}, {
    name: 'Sucos Naturais Especiais (COPO)',
    price: 6,
    group: 'bebidas'
}, {
    name: 'Sucos Naturais Especiais (JARRA)',
    price: 15,
    group: 'bebidas'
}, {
    name: 'Suco Açaí com frutas (COPO)',
    price: 10,
    group: 'bebidas'
}, {
    name: 'Sucos Detox',
    price: 10,
    group: 'bebidas'
}, {
    name: 'Smirnoff Ice',
    price: 10,
    group: 'bebidas'
}, {
    name: 'Cerveja (lata)',
    price: 5,
    group: 'bebidas'
}, {
    name: 'Cerveja (long neck)',
    price: 8,
    group: 'bebidas'
}, {
    name: 'Cervejas Artesanais',
    price: 26,
    group: 'bebidas'
}, {
    name: 'Caipirinha do Saci - boazinha ou vodka',
    price: 18,
    group: 'bebidas'
}, {
    name: 'Caipirinha do Saci - especiais',
    price: 20,
    group: 'bebidas'
}];

var doSaci = [{
    name: 'Carne de Panela',
    price: '',
    description: '(corte de paleta sem gordura, cozida na pressão com temperos e especiarias, finalizada com molho de tomate, barbecue e molho inglês)',
    group: 'doSaci'
}, {
    name: 'Omelete do Dia',
    price: '',
    description: '(2 ovos com muçarela, tomate e cheiro verde, ou legumes)',
    group: 'doSaci'
}, {
    name: 'Shimeji Vegano',
    price: '',
    description: '(grelhado no óleo de gergelim, finalizado com shoyo e cebolinha)',
    group: 'doSaci'
}, {
    name: 'Feijoada Magra e Feijoada Vegana - (quartas e sábados)',
    price: [28, 35, 40],
    description: '(preparada com ingredientes selecionados, passa por um processo dessalgue que ajuda a eliminar gorduras, acompanha arroz branco ou integral, farofa do saci ou vegana, couve e laranja)',
    group: 'doSaci'
}];

/* tamanhos */

var tamanhos = [{
    size: 'P',
    price: 19
}, {
    size: 'M',
    price: 23
}, {
    size: 'G',
    price: 26
}];

/* --- ACOMPANHAMENTOS */

var acompanhamentos = ['Arroz Branco ou Integral', 'Feijão do Dia', 'Farofa do Saci Tradicional ou Vegana', 'Legumes do Dia'];

/* --- MOLHOS --- */

var molhos = ['Sugo da Casa', 'Alfredo', 'Pesto', 'Manteiga de Sálvia'];

/* --- precos do grupo --- */

var doSaciPrice = [{
    size: 'P',
    price: 19
}, {
    size: 'M',
    price: 23
}, {
    size: 'G',
    price: 26
}];

var feijoadaPrice = [{
    size: 'P',
    price: 28
}, {
    size: 'M',
    price: 35
}, {
    size: 'G',
    price: 40
}];

var groupNames = [{
    name: 'café do saci',
    itens: cafe
}, {
    name: 'super café do saci - sábado das 9h às 14h',
    itens: cafeEspecial
}, {
    name: 'do Saci',
    itens: doSaci,
    precos: doSaciPrice,
    acompanhamentos: acompanhamentos
}, {
    name: 'grelhados',
    itens: grelhados,
    acompanhamentos: acompanhamentos
}, {
    name: 'especiais',
    itens: especiais,
    acompanhamentos: acompanhamentos
}, {
    name: 'acompanhamentos',
    itens: acompPratos
}, {
    name: 'entradas',
    itens: entradas,
}, {
    name: 'pratos rápidos',
    itens: pratosRapidos
}, {
    name: 'pratos baixo carboidrato',
    itens: pratoLowCarb
}, {
    name: 'massas',
    itens: massas,
    acompanhamentos: molhos
}, {
    name: 'jantar',
    itens: jantar,
    acompanhamentos: acompanhamentos
}, {
    name: 'sobremesas',
    itens: sobremesa
}, {
    name: 'quitutes',
    itens: quituteria
}, {
    name: 'sanduíches',
    itens: sanduiche
}, {
    name: 'hora feliz',
    itens: horaFeliz
}, {
    name: 'bebidas',
    itens: bebidas
}];