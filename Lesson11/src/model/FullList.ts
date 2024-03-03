import ListItem from "./ListItems";

interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObjs: ListItem): void;
    removeItem(id: string): void;
}

export default class FullList implements List {
    static instance: FullList = new FullList();

    constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list;
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save;
    }

    addItem(itemObjs: ListItem): void {
        this._list.push(itemObjs);
        this.save;
    }

    removeItem(id: string): void {
        this._list = this._list.filter((item) => item.id !== id);
        this.save;
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList");
        if (typeof storedList !== "string") return;

        const parsedList: { _id: string; _item: string; _checked: boolean }[] =
            JSON.parse(storedList);

        parsedList.forEach((itemObj) => {
            const newListItem = new ListItem(
                itemObj._id,
                itemObj._item,
                itemObj._checked
            );
            FullList.instance.addItem(newListItem);
        });
    }
}
