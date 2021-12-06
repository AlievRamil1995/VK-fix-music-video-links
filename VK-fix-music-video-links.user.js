    // ==UserScript==
    // @name         Vk фикс ссылок на музыку и видео
    // @namespace    vk-fix-music-and-videolinks
    // @version      0.1
    // @description  Теперь при переходе в "Мою музыку" будет открываться ваш список аудио, а не список рекомендаций
    // @author       Desu
    // @match        *://vk.com/*
    // @grant        none
    // @license      GNU GPLv3
    // ==/UserScript==
    let userId = document.getElementById("top_logout_link").getAttribute('onclick').match(/_.+[0-9]/);
    userId = userId[0].substring(1);
    let musicLinksArr = document.querySelectorAll('a[href="/audios'+userId+'"]');
    for (let i = 0; i < musicLinksArr.length; i++) {
        musicLinksArr[i].setAttribute('href', '/audios'+userId+'?section=all');
    }
    let videoLinksArr = document.querySelectorAll('a[href="/video"]');
    for (let i = 0; i < videoLinksArr.length; i++) {
        videoLinksArr[i].setAttribute('href', '/video/@'+userId);
    }

