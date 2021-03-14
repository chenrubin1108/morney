type DataSummer = {
    tags: string[];
    amount: number;
    type: string;
    notes: string;
    createdAt?: Date;
  }

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

interface Window {
  taglist:Tag[]
}