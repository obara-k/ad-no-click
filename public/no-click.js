//no click add shufu-job
const link = document.querySelectorAll('[data-preconnect-urls]')

const partUrl = 'https://part.shufu-job.jp/'
const staffingUrl = 'https://www.b-style-part.net/'
const smartcareerUrl = 'https://smartcareer.b-stylejob.jp/'
const bstyleJob = 'https://www.b-stylejob.jp/'

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
