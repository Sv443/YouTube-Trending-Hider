// ==UserScript==
// @name         YouTube Trending Hider
// @namespace    https://sv443.net/
// @version      0.1
// @description  Hides the Trending button from the menu completely because no living being wants to see those videos anyways - New and old design compatible
// @author       Sv443
// @match        https://www.youtube.com/*
// @run-at       document-start
// @license      MIT
// @copyright    2018, Sv443 (https://github.com/Sv443)
// ==/UserScript==

document.addEventListener("DOMContentLoaded", ()=>{
    try { // old design
        document.getElementById("trending-guide-item").innerHTML="";
        document.getElementById("trending-guide-item").outerHTML="";
        var iv = setInterval(()=>{
            if(document.getElementById("trending-guide-item") != null) {
                document.getElementById("trending-guide-item").innerHTML="";
                document.getElementById("trending-guide-item").outerHTML="";
            }
        }, 3000);
        if(document.getElementById("trending-guide-item") == null) clearInterval(iv);
    }
    catch(err) { // new design
        var ytdels = document.querySelector("ytd-guide-section-renderer.style-scope:nth-child(1) > div:nth-child(2) > ytd-guide-entry-renderer:nth-child(2)");
            console.log(ytdels.childNodes[1].href);
            if(ytdels.childNodes[1].href.includes("/feed/trending")) {
                ytdels.innerHTML="";
                ytdels.outerHTML="";
            }
    }
});
