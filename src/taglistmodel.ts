const localStorageKeyname='taglist'
type Tag={
    id: string;
    name: string;
}
type Taglistmodel={
    data: Tag[];
    save: () => void;
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'fail';
}
const taglistmodel: Taglistmodel={
    data:[],
    fetch(){
        this.data= JSON.parse(window.localStorage.getItem(localStorageKeyname) || '[]');
        return this.data
    },
    create(name: string){
        const names=this.data.map(item=>item.id)
        if(names.indexOf(name)>=0){
            return 'fail'
        }
        this.data.push({id:name,name:name})
        this.save()
        return 'success'
    },
    save(){
        window.localStorage.setItem(localStorageKeyname,JSON.stringify(this.data))
    },
   
}
export default taglistmodel