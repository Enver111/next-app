import {
  Categories,
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все запчасти" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список Товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Мототехника"
                items={[
                  {
                    id: 1,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 2,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 3,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://80.img.avito.st/image/1/1.afKyGba4xRuEsAce7Ggelda7xx0MuEcTxL3HGQKwzREE.ashlX0K_CJjZeFreL2H0TDAo7S2WbhdDoUWulTbyohI",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 4,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://90.img.avito.st/image/1/1.GtIzDba4tjsFpHQ-Czlh2DKvtD2NrDQzRam0OYOkvjGF.QVX94X3ELlOWN_0bCDUU8YLh7CpsiDik7-Y3khds9Gs",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 5,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 6,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 7,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 8,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                ]}
                categoryId={1}
                listClassName={""}
              />
              <ProductGroupList
                title="Легковые авто"
                items={[
                  {
                    id: 1,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 2,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 3,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://80.img.avito.st/image/1/1.afKyGba4xRuEsAce7Ggelda7xx0MuEcTxL3HGQKwzREE.ashlX0K_CJjZeFreL2H0TDAo7S2WbhdDoUWulTbyohI",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 4,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://90.img.avito.st/image/1/1.GtIzDba4tjsFpHQ-Czlh2DKvtD2NrDQzRam0OYOkvjGF.QVX94X3ELlOWN_0bCDUU8YLh7CpsiDik7-Y3khds9Gs",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 5,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 6,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 7,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                  {
                    id: 8,
                    name: "Двигатель новый cpwa 1.4 TSI",
                    imageUrl:
                      "https://60.img.avito.st/image/1/1.ySf3Yra4Zc7By6fL6TnqOs3DZ8hJw-fGgcZnzEfLbcRB.iZ56UsmkpyeguGRCHk8z30IFlGyR98OdAtlj77dv9Gc",
                    price: 1250,
                    items: [{ price: 1250 }],
                  },
                ]}
                categoryId={2}
                listClassName={""}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
