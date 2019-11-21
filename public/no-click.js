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

const bstyleService = ['shufu-job','b-style-part','b-stylejob','b-style']

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
  const link_list = document.querySelectorAll('cite')

  for (let i = 0; i < link_list.length; i ++) {
    const uri = link_list[i].innerText
    const wrapAd = link_list[i].parentElement.parentElement.parentElement
    const bool = bstyleService.includes(uri)
    console.log(bool)
    if (uri.indexOf('shufu-job') != -1 || uri.indexOf('b-style-part') != -1 || uri.indexOf('b-stylejob') != -1 ) {
      console.log(bstyleService.includes(uri))
      if(wrapAd.classList.contains('b_caption') ){
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
      console.log(bstyleService.indexOf(uri))
      wrapAd.setAttribute('style','pointer-events:none;opacity:.3;')
    }
  }
}


const adDisabledSwitch = () => {
  const windowLocation = window.location.host
  if(/google/.test(windowLocation)) {
    googleAds()
  }

  if(/bing/.test(windowLocation)) {
    bingAds()
  }

  if(/yahoo/.test(windowLocation)) {
    yahooAds()
  }
}

adDisabledSwitch()
