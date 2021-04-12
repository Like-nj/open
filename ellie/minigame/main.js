'use strict'

import {clothesTag} from './data.js';

// console.log(`${clothesTag[0].img} + ${clothesTag.length} `);

window.onload = function() { 
    makeHtml(clothesTag);
}
const btnlogo = document.querySelector('.logo');
btnlogo.addEventListener('click', () => {
    makeHtml(clothesTag);
});

function makeHtml(clothesArry) {
    let table = document.querySelector('.clothesList') ;
    table.innerHTML='';
    for (let i=0; i < clothesArry.length; i++) { 
        let row = `<div class='autolist'>
            <img src='./imgs/${clothesArry[i].img}' alt='' class='aimg'> 
            <span class='atext'> ${clothesArry[i].sex} , ${clothesArry[i].size} </span>
            </div>`;
            table.innerHTML += row;
    }
}

// 바지 아이콘 버튼 클릭
const btnPants = document.querySelector('nav .pants');
btnPants.addEventListener('click', () => {
    const pantslist = clothesTag.filter(function(pants, index) {
        return pants.ctype=='pants';
    });
    makeHtml(pantslist);
});

// 치마 아이콘 버튼 클릭
const btnskirt = document.querySelector('nav .skirt');
btnskirt.addEventListener('click', () => {
    const skirtlist = clothesTag.filter(function(skirt, index) {
        return skirt.ctype=='skirt';
    });
    makeHtml(skirtlist);
});

// t셔츠 아이콘 버튼 클릭 (간결)
document.querySelector('nav .tshirt').addEventListener('click', () => {
    makeHtml (clothesTag.filter(function(skirt, index) {
        return skirt.ctype=='tshirt';
    }))
});

// 파란색 아이콘 버튼 클릭
const btnBlue = document.querySelector('nav .blue');
btnBlue.addEventListener('click', () => {
    const btnBlue = clothesTag.filter(function(colors, index) {
        return colors.color=='blue';
    });
    makeHtml(btnBlue);
});

// 노란색 아이콘 버튼 클릭
const btnYellow = document.querySelector('nav .yellow');
btnYellow.addEventListener('click', () => {
    const btnYellow = clothesTag.filter(function(colors, index) {
        return colors.color=='yellow';
    });
    makeHtml(btnYellow);
});

// 핑크 아이콘 버튼 클릭 (간결)
document.querySelector('nav .pink').addEventListener('click', () => {
    makeHtml(clothesTag.filter(function(colors, index) {
        return colors.color=='pink';
    }))
});