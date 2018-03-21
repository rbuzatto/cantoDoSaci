'use strict';

/* --- GRELHADOS --- */

var grelhados = [{
    name: 'Contrafilé',
    price: 22,
    group: 'grelhados'
}, {
    name: 'Filé de frango',
    price: 22,
    group: 'grelhados'
}, {
    name: 'Filé mignon',
    price: 28,
    group: 'grelhados'
}, {
    name: 'Abobrinha ou berinjela',
    price: 22,
    group: 'grelhados'
}];

/* --- ESPECIAIS --- */

var especiais = [{
    name: 'Mix de Cogumelos',
    price: 25,
    group: 'especiais'
}, {
    name: 'Parmegiana (magra ou vegana)',
    price: 26,
    group: 'especiais'
}, {
    name: 'Massas Artesanais',
    price: 28,
    group: 'especiais'
}];

/* --- PRATOS RÁPIDOS --- */

var pratosRapidos = [{
    name: 'Salada com 1 empanada - veg',
    price: 10,
    group: 'pratos rapidos'
}, {
    name: 'Salada com 2 empanadas - veg',
    price: 15,
    group: 'pratos rapidos'
}];
/* --- QUITUTERIA --- */

var quituteria = [{
    name: 'Pudim',
    price: 5,
    group: 'quituteria'
}, {
    name: 'Brigadeiro',
    price: 5,
    group: 'quituteria'
}, {
    name: 'Salada de Frutas',
    price: 7,
    group: 'quituteria'
}, {
    name: 'Bolo Simples (fatia)',
    price: 5,
    group: 'quituteria'
}, {
    name: 'Bolo do Saci (fatia)',
    price: 8,
    group: 'quituteria'
}, {
    name: 'Torta Simples (fatia)',
    price: 5,
    group: 'quituteria'
}, {
    name: 'Torta do Saci (fatia)',
    price: 7,
    group: 'quituteria'
}, {
    name: 'Cheesecake',
    price: 12,
    group: 'quituteria'
}, {
    name: 'Tapioca (doce ou salgada)',
    price: 10,
    group: 'quituteria'
}, {
    name: 'Empanada',
    price: 7,
    group: 'quituteria'
}, {
    name: 'Empanada Vegana',
    price: 7,
    group: 'quituteria'
}, {
    name: 'Coxinha',
    price: 5,
    group: 'quituteria'
}, {
    name: 'Empada',
    price: 5,
    group: 'quituteria'
}, {
    name: 'Quiche',
    price: 7,
    group: 'quituteria'
}];

/* --- JANTAR --- */

var jantar = [{
    name: 'Risotos',
    price: 32,
    group: 'jantar'
}, {
    name: 'Massas Artesanais',
    price: 28,
    group: 'jantar'
}];

/* --- HORA FELIZ --- */

var horaFeliz = [{
    name: 'Fritas',
    price: 18,
    group: 'hora feliz'
}, {
    name: 'Mignon',
    price: 26,
    group: 'hora feliz'
}, {
    name: 'Fraldinha Acebolada',
    price: 26,
    group: 'hora feliz'
}, {
    name: 'Tulipa Barbecue',
    price: 26,
    group: 'hora feliz'
}];

/* --- SALGADOS --- */

var salgados = [{
    name: 'Hambúrguer Artesanal',
    price: 15,
    group: 'salgados'
}, {
    name: 'Bolinho de Bacalhau',
    price: 10,
    group: 'salgados'
}, {
    name: 'Bolinho de Arroz',
    price: 8,
    group: 'salgados'
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
    price: 6,
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
    name: 'Caipirinha do Saci - cachaça ou vodka',
    price: 15,
    group: 'bebidas'
}, {
    name: 'Caipirinha do Saci - especiais',
    price: 20,
    group: 'bebidas'
}];

var doSaci = [{
    name: 'Carne de Panela',
    price: '',
    group: 'doSaci'
}, {
    name: 'Omelete do Dia',
    price: '',
    group: 'doSaci'
}, {
    name: 'Shimeji - veg',
    price: '',
    group: 'doSaci'
}, {
    name: 'Massa do dia (grano duro) com molho artesanal - veg',
    price: '',
    group: 'doSaci'
}];

/* tamanhos */

var tamanhos = [{
    size: 'P',
    price: 18
}, {
    size: 'M',
    price: 22
}, {
    size: 'G',
    price: 25
}];

/* --- ACOMPANHAMENTOS */

var acompanhamentos = ['Arroz Branco ou Integral', 'Feijão do Dia', 'Farofa do Saci Tradicional ou Vegana', 'Legumes do Dia'];

/* --- precos do grupo --- */

var doSaciPrice = [{
    size: 'P',
    price: 18
}, {
    size: 'M',
    price: 22
}, {
    size: 'G',
    price: 25
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
    name: 'grelhados',
    itens: grelhados,
    acompanhamentos: acompanhamentos
}, {
    name: 'especiais',
    itens: especiais,
    acompanhamentos: acompanhamentos
}, {
    name: 'do Saci',
    itens: doSaci,
    precos: doSaciPrice,
    acompanhamentos: acompanhamentos
}, {
    name: 'pratos rápidos',
    itens: pratosRapidos
}, {
    name: 'quituteria',
    itens: quituteria
}, {
    name: 'jantar',
    itens: jantar,
    acompanhamentos: acompanhamentos
}, {
    name: 'hora feliz',
    itens: horaFeliz
}, {
    name: 'salgados',
    itens: salgados
}, {
    name: 'bebidas',
    itens: bebidas
}];