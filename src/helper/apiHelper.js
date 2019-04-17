import Cheerio from 'cheerio-without-node-native'
const baseURL = 'https://www.ptt.cc';

class APIHelper {

  fetchHotBoards = async() => {
    let pttFirstPage = await fetch(`${baseURL}/hotboards.html`).then(response=>response.text())
    const $ = Cheerio.load(pttFirstPage);
  
    let parsedData = $('.board').map((index,element)=>{
      return {
        englishTitle: $('.board-name',element).text(),
        title: $('.board-title',element).text(),
        numberOfUsers: $('.board-nuser span',element).text(),
        href: element.attribs.href,
        key: index.toString()
      }
    }).toArray();

    return parsedData
  }

  fetchBoard = async(endPoint) => {
    let rawHtml = await fetch(`${baseURL}${endPoint}`).then(response=>response.text())
    const $ = Cheerio.load(rawHtml);
    console.log(rawHtml)
  }

}


export default new APIHelper();