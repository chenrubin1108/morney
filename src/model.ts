const localStorageKeyname='Recorddatasummer'
const model={
    fetch(){
       return JSON.parse(window.localStorage.getItem(localStorageKeyname) || '[]')  as DataSummer[];
    },
    save(data: DataSummer[]){
        window.localStorage.setItem(localStorageKeyname,JSON.stringify(data))
    },
    clone(data: DataSummer[] | DataSummer) {
        return JSON.parse(JSON.stringify(data));
      },
}
export default model