'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// let itemBuildTag = {tag : 'span', class: 'list__item__name'};
// let priceBuildTag = {tag: 'span', class: 'list__item__value'};

// mais generico
// let singleItemTag = function(item, tagBuilder) {
//     return `<${tagBuilder.tag} class="${tagBuilder.class}">${item}</${tagBuilder.tag}>`;
//   }

Number.isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && 
      isFinite(value) && 
      Math.floor(value) === value;
  };


var singleItemTag = function singleItemTag(item) {
    return '<span class="list__item__name">' + item + '</span>';
};

var singleItemDescriptionTag = function singleItemTag(item) {
    return '<span class="list__item__description">' + item + '</span>';
};

var singleItemPriceTag = function singleItemPriceTag(item) {
    var tagMoney = '<span class"list__item__money">R$</span>';
    var tagItem = '';
    var replaceDot = '';

    if (typeof item === 'number' && Number.isInteger(item)) {
        tagItem = '<span class"list__item__value">' + item + ',00</span>';
    } else if (typeof item === 'number' && !Number.isInteger(item)) {
        replaceDot = ('' + item).replace('.', ',');
        tagItem = '<span class"list__item__value">' + replaceDot + '</span>';
    } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
        item.forEach(function (item, idx, arr) {
            var bar = idx === arr.length - 1 ? '' : '&nbsp|&nbsp'; // caso seja o ultimo não terá barra
            if (Number.isInteger(item)) {
                tagItem += '<span class"list__item__value">' + item + ',00' + bar + '</span>';
            } else if (!Number.isInteger(item)) {
                replaceDot = ('' + item).replace('.', ',');
                tagItem += '<span class"list__item__value">' + replaceDot + bar + '</span>';
            }
        });
    }

    var tagspace = item >= 10 ? '&nbsp;&nbsp;' : '&nbsp&nbsp&nbsp&nbsp&nbsp;';
    return '<div class="list__item__price">' + tagMoney + tagspace + tagItem + '</div>';
};

var precosTag = function precosTag(precos) {
    var wrap = '';
    precos.forEach(function (val, idx, arr) {
        var bar = idx === arr.length - 1 ? '' : '&nbsp|&nbsp';
        wrap += val.size + ' - R$&nbsp';
        if (typeof val.price === 'number' && Number.isInteger(val.price)) {
            wrap += val.price + ',00' + bar;
        } else if (typeof val.price === 'number' && !Number.isInteger(val.price)) {
            replaceDot = ('' + val.price).replace('.', ',');
            wrap += '' + val.price + bar;
        }
    });

    return wrap;
};

var acompanhamentosTag = function acompanhamentosTag(acomp) {
    var wrap = '';
    acomp.forEach(function (val, idx, arr) {
        var bar = idx === arr.length - 1 ? '' : '&nbsp|&nbsp';
        wrap += '' + val + bar;
    });

    return wrap;
};

var liWraper = function liWraper(wraperTxt) {
    var wrap = '<li class="list__item"><div class="list__item__box">' + wraperTxt + '</div></li>';
    return wrap;
};

var divWraper = function divWraper(wraperTxt) {
    var wrap = '<div class="list__item--acomp">' + wraperTxt + '</div>';
    return wrap;
};

var tagLiItem = function tagLiItem(item) {
    var txt = '';

    if (item.description) {
        if (item.price === '' || item.price === 0) {
            txt = singleItemTag(item.name) + singleItemDescriptionTag(item.description);
        } else {
            txt = singleItemTag(item.name) + singleItemPriceTag(item.price) + singleItemDescriptionTag(item.description);
        }

    } else {
        if (item.price === '' || item.price === 0) {
            txt = singleItemTag(item.name);
            // let tagText = '<li class="list__item"><div class="list__item__box">' + singleItemTag(item.name) + '</div></li>';
            // return tagText;
        } else {
            txt = singleItemTag(item.name) + singleItemPriceTag(item.price);
            // let tagText = '<li class="list__item"><div class="list__item__box">' + singleItemTag(item.name) + singleItemPriceTag(item.price) + '</div></li>';
            // return tagText;
        }
    }

    return liWraper(txt);
};

var listAppend = function listAppend(groupItens) {
    return '<ul class="list__group">' + groupItens + '</ul>';
};

var titleTag = function titleTag(title) {
    return '<span class="list__title u-margin-bottom-small">' + title + '</span>';
};

var titleTagAcomp = function titleTagAcomp(title) {
    return '<span class="list__title list__title--acomp u-margin-bottom-small">' + title + '</span>';
};

/* FORMULA CONSTRUTORA DE DIVS PARA CAROUSEL */
var appendTotal = function appendTotal(menuObj, linesPerPage) {

    var tagStart = '<div class="menu__page"><div class="list__group__box">';
    var tagClose = '</div></div>';
    var boxAppend = '';
    var liGroupTag = '';
    var n = linesPerPage;
    for (var i = 0; i < menuObj.length; i++) {
        var group = menuObj[i];
        var t = group.itens.length;
        var m = 0;
        // m indica a posição no array do objeto

            //      ---------------
            /* --- GRUPO PRINCIPAL --- */
            //      ---------------
        while (m < t) {
            if (n === linesPerPage) {
                boxAppend = tagStart;
            }
            if (m === 0) {
                if (n <= 6 || n <= 10 && (group.precos || group.acompanhamentos)) {
                    n = 0;
                } else {
                    n -= 3;
                    boxAppend += titleTag(group.name);

                    //print caso tenha preços genericos
                    if (group.precos) {
                        var precosTxt = precosTag(group.precos);
                        boxAppend += divWraper(singleItemTag('Tamanhos :&nbsp&nbsp&nbsp' + precosTxt));
                        n -= 1;
                    }

                    //print caso tenha acompanhamentos
                    if (group.acompanhamentos) {
                        var acompTxt = acompanhamentosTag(group.acompanhamentos);
                        var txtInicio = '';
                        if (group.acompanhamentos === acompanhamentos) {
                            txtInicio = 'Escolha 3 acompanhamentos';
                        }
                        if (group.acompanhamentos === molhos) {
                            txtInicio = 'Molhos';
                        }
                        boxAppend += divWraper(singleItemTag(txtInicio + ' :&nbsp&nbsp&nbsp' + acompTxt));
                        n -= 3;
                    }
                }
            }

            if (n < 0) n = 0;
            /* caso 1: itensRestantes >= Bloco[linhasRestantes] */
            // print itens = linhasRestantes e feche bloco;
            //( t - 1 ) - m 
            if (n <= t - 1 - m) {
                liGroupTag = '';
                for (var j = m; j < m + n; j++) {
                    liGroupTag += tagLiItem(group.itens[j]);
                }
                boxAppend += listAppend(liGroupTag);
                boxAppend += tagClose;
                m += n;
                n = linesPerPage;
                $('.menu__box .row.menu__box__itens .owl-carousel.owl-theme').append(boxAppend);
                boxAppend = '';
            } else if (n > t - 1 - m) {
                /* caso 2: itensRestantes < Bloco[linhasRestantes]*/
                // print entao todos itens e bloco segue aberto;
                liGroupTag = '';
                for (var k = m; k < t; k++) {
                    liGroupTag += tagLiItem(group.itens[k]);
                }
                boxAppend += listAppend(liGroupTag);
                n -= t - m;
                m = t; // sair do loop do while 
            }
        }
    }

    /* fechar tag se for ultima iteração e se resta elementos a serem impressos */
    if (n != linesPerPage && i == menuObj.length - 1) {
        boxAppend += tagClose;
        // console.log(boxAppend);
        $('.menu__box .row.menu__box__itens .owl-carousel.owl-theme').append(tagStart + boxAppend);
    }
    
};

// let acompTag = function(group) {
//     let m = 0;
//     let t = group.itens.length;
//     while ( m < t ) {
//         if ( n === linesPerPage) { boxAppend = tagStart}
//         if ( m === 0)  { boxAppend += titleTag(group.name)}
//         /* caso 1: itensRestantes >= Bloco[linhasRestantes] */
//         // print itens = linhasRestantes e feche bloco;
//         if ( n <= (t - 1 - m) ) {
//             liGroupTag = '';
//             for (var j = m; j < m + n; j++) {
//                 liGroupTag += liWraper(singleItemTag(group.itens[j]));
//             }
//         boxAppend += listAppend(liGroupTag);    
//         boxAppend += tagClose;
//         m += n;
//         n = linesPerPage;
//         $('.menu__box .row.menu__box__itens .owl-carousel.owl-theme').append(boxAppend);
//         boxAppend = '';
//         } else if (n > t - 1 - m ) {
//             /* caso 2: itensRestantes < Bloco[linhasRestantes]*/
//             // print entao todos itens e bloco segue aberto;
//             liGroupTag = '';
//             for (var k = m; k < t; k++) {
//                 liGroupTag += liWraper(singleItemTag(group.itens[k]));
//             }
//             boxAppend += listAppend(liGroupTag);
//             n -= (t - m);
//             m = t; // sair do loop do while 
//         }
//     }
// }


// acomp tag original -- deletar se der certo
// let acompTag = function(itemArr) {
//     let tagArr = '';
//     itemArr.forEach(function(item, idx, arr) {
//         tagArr += liWraper(singleItemTag(item));
//         // tirar isso pq fica muito pequeno um do lado do outro 
//         // let bar = idx === (arr.length - 1) ? '' : '&nbsp|&nbsp';
//         // tagArr += `<span class="list__item__name">${item}${bar}</span>`;
//     });
//     return tagArr;
// }

appendTotal(groupNames, 20);


/////// retirado acomp pq eu não estava usando

/* --- acomp --- */
// if (group.name === 'acompanhamentos') {
//     while (m < t) {
//         if (n === linesPerPage) {
//             boxAppend = tagStart;
//         }
//         // posição array 0 entao print titulo
//         // usei um valor n equivalente de 3 para titulos
//         if (m === 0) {
//             if (n <= 3) {
//                 n = 0;
//             } else {
//                 n -= 3;
//                 boxAppend += titleTagAcomp(group.name);
//             }
//         }
//         /* caso 1: itensRestantes >= Bloco[linhasRestantes] */
//         // print itens = linhasRestantes e feche bloco;
//         if (n <= t - 1 - m) {
//             liGroupTag = '';
//             for (var j = m; j < m + n; j++) {
//                 liGroupTag += liWraper(singleItemTag(group.itens[j]));
//             }
//             boxAppend += listAppend(liGroupTag);
//             boxAppend += tagClose;
//             m += n;
//             n = linesPerPage;
//             $('.menu__box .row.menu__box__itens .owl-carousel.owl-theme').append(boxAppend);
//             boxAppend = '';
//         } else if (n > t - 1 - m) {
//             /* caso 2: itensRestantes < Bloco[linhasRestantes]*/
//             // print entao todos itens e bloco segue aberto;
//             liGroupTag = '';
//             for (var k = m; k < t; k++) {
//                 liGroupTag += liWraper(singleItemTag(group.itens[k]));
//             }
//             boxAppend += listAppend(liGroupTag);
//             n -= t - m;
//             m = t; // sair do loop do while 
//         }
//     }
// }