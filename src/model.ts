const localStorageKeyname='Recorddatasummer'
const model={
    data:[] as DataSummer[],
    fetch(){
        return   this.data=JSON.parse(window.localStorage.getItem(localStorageKeyname) || '[]')  as DataSummer[];
      
    },
  
    save(){
        window.localStorage.setItem(localStorageKeyname,JSON.stringify(this.data))
    },
    clone(data: DataSummer[] | DataSummer) {
        return JSON.parse(JSON.stringify(data));
      },
}
export default model