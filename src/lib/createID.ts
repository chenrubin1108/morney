let  id:number=parseInt(window.localStorage.getItem('idMAx') || '0'  ) || 0

function idNumber() {
    id+=1
    let maxid=id.toString()
    window.localStorage.setItem('idMAx',maxid)
    return maxid
}
export default idNumber