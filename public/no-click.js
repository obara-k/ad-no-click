// ==UserScript==
// @name         AdClickBlock
// @namespace   http://*/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

//no click add shufu-job

const partUrl = 'https://part.shufu-job.jp/'
const staffingUrl = 'https://www.b-style-part.net/'
const smartcareerUrl = 'https://smartcareer.b-stylejob.jp/'
const bstyleJob = 'https://www.b-stylejob.jp/'

const googleAds = () => {
  console.log('google')
  const link = document.querySelectorAll('[data-preconnect-urls]')
  const lnk = document.querySelectorAll(`
    [data-preconnect-urls="${partUrl}"],
    [data-preconnect-urls="${staffingUrl}"],
    [data-preconnect-urls="${smartcareerUrl}"],
    [data-preconnect-urls="${bstyleJob}"]
    `)

  for (let i = 0; i < lnk.length; i++) {
   const dataUrl = lnk[i].getAttribute('href')
   const wrapAd = lnk[i].parentElement.parentElement
    if ( dataUrl === partUrl || staffingUrl || smartcareerUrl ) {
      lnk[i].removeAttribute('href')
      lnk[i].setAttribute('style','pointer-events:none;')
      wrapAd.setAttribute('style','pointer-events:none;opacity:.3;')
    }
  }
}


//

const bingAds = () => {
  const ads = document.querySelectorAll('.b_ad')
  const link_list = document.querySelectorAll('cite')

  for (let i = 0; i < link_list.length; i ++) {
    const uri = link_list[i].innerText
    const wrapAd = link_list[i].parentElement.parentElement.parentElement
    const link = wrapAd.getElementsByTagName('a')
    if (uri.indexOf('shufu-job') != -1 || uri.indexOf('b-style-part') != -1 || uri.indexOf('b-stylejob') != -1 ) {
      if(wrapAd.classList.contains('b_caption') ){
        console.log('bg')
        wrapAd.parentElement.setAttribute('style','pointer-events:none;opacity:.3;')
      }
    }
  }
}

const yahooAds = () => {
  const link_block = document.querySelectorAll('.w .a.cf')
  for (let i =0; i < link_block.length; i ++) {
    const uri = link_block[i].innerText
    const wrapAd = link_block[i].parentElement
    if (uri.indexOf('shufu-job') != -1 || uri.indexOf('b-style-part') != -1 || uri.indexOf('b-stylejob') != -1 ) {
      wrapAd.setAttribute('style','pointer-events:none;opacity:.3;')
    }
  }
}


const adDisabledSwitch = () => {
  const windowLocation = window.location.href
  if(windowLocation.indexOf('google') === 12) {
    googleAds()
  }

  if(windowLocation.indexOf('bing') === 12) {
    bingAds()
  }

  if(windowLocation.indexOf('yahoo') === 15) {
    yahooAds()
  }
}

adDisabledSwitch()
