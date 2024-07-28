import {
  Container,
  Filters,
  ProductCard,
  ProductGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Filtering */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Items list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 2,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 3,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 4,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 5,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 6,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title="Breakfast"
                items={[
                  {
                    id: 1,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 2,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 3,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 4,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 5,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 6,
                    name: 'Cheeseburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
