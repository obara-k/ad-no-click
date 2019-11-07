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

  console.log(lnk)

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
  console.log('bing')
  const ads = document.querySelectorAll('.b_ad')
  const link_list = document.querySelectorAll('cite')

  for (let i = 0; i < link_list.length; i ++) {
    const uri = link_list[i].innerText
    console.log(uri)
    const wrapAd = link_list[i].parentElement.parentElement.parentElement
    const link = wrapAd.getElementsByTagName('a')
    if (uri.indexOf('shufu-job') != -1 || uri.indexOf('b-style-part') != -1 || uri.indexOf('b-stylejob') != -1 ) {
      if(wrapAd.classList.contains('b_algo')) {
        wrapAd.setAttribute('style','pointer-events:none;opacity:.3;')
      } else if(wrapAd.classList.contains('b_caption') ){
        wrapAd.parentElement.setAttribute('style','pointer-events:none;opacity:.3;')
      }
    }
  }
}

const windowLocation = window.location.href

if (windowLocation.indexOf('google') !== 1) {
  googleAds()
} else if (windowLocation.indexOf('bing') !== 1) {
  bingAds()
}
