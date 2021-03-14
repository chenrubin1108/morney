const localStorageKeyname='taglist'
import createID from '@/lib/createID'
type Tag={
    id: string;
    name: string;
}
type Taglistmodel={
    data: Tag[];
    save: () => void;
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'fail';
    edit: (name:string,val:string)=>'success' | 'fail' | 'duplicated';
    remove: (id: string) => boolean
}
const taglistmodel: Taglistmodel={
    data:[],
    remove(id){
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].id === id) {
            index = i;
            break;
          }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    },
    fetch(){
        this.data= JSON.parse(window.localStorage.getItem(localStorageKeyname) || '[]');
        return this.data
    },
    edit(id,name){
        const idList=this.data.map(item=>item.id)
        
        if(idList.indexOf(id)>=0){
            const names=this.data.map(item=>item.name)
           if(names.indexOf(name)>=0){
               return 'duplicated'
           }
           else{
               const tag=this.data.filter(item=>item.id===id)[0]
               tag.id=id
               tag.name=name
               this.save()
               return 'success'
           }

        }else {
            return 'fail'
        }
     
    },
    create(name: string){
        const names=this.data.map(item=>item.id)
        if(names.indexOf(name)>=0){
            return 'fail'
        }
        const id=createID()
        this.data.push({id,name:name})
        this.save()
        return 'success'
    },
    save(){
        window.localStorage.setItem(localStorageKeyname,JSON.stringify(this.data))
    },
   
}
export default taglistmodel