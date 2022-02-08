import ShopItem from "./shop-item.model";

export default interface Shop {
    id: number;
    name: string;
    createdDate: Date;
    shopItems: ShopItem[];
}