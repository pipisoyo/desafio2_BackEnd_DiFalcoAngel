   //Pasar primer desafio BackEnde en JS a TS
   import { promises as fs } from 'fs';
//comento para fines didacticos(machete)
class ProductManager {
    private products: Product []; //  declaro variables, son privadas , tipo Product(que es array vacio) y contador tipo numero
    private idCount : number; // private => convencion, solo puede se accedida y modificada dentro de la clase - ENCASULAPCION - 
    public PATH : string;

constructor(){// tal cual js

    this.products = []; 
    this.idCount= 0;
    this.PATH = './products.json';

}

async handleData() : Promise <Product[]> { //Obtiene los datos // Tipo de retorno(devuelve un promesa)

    try {
      let data = await fs.promises.readFile(this.PATH, 'utf-8');

      if (data) { // Si Existe
        this.products = JSON.parse(data); // guarda los datos en el array products
        const lastProductId = this.products.reduce((maxId, product) => Math.max(maxId, product.id), 0); //verifica ultimo ID
        this.idCount = lastProductId; // Actualiza el contador de ID con el último ID utilizado
        return this.products;
      }
    } catch (error) {
      if (error.code === 'ENOENT') { // si el archivo no existe, se crea un archivo vacio
                                     // con el array vacio
        await fs.promises.writeFile(this.PATH, '', 'utf-8');
        this.products = [];
        return this.products;

      } else {

        console.log("Error al leer los datos del archivo:", error);

      }
    }
}

public addProduct( // plubli indica que el el metdo es de acceso puplico puede se accedido des fuera de la clase
    title : string,
    description : string,
    price : number, 
    thumbnail: string,
    code: string,
    stock: number,
    ): void { // void indica q no se espra un resultado del metodo, si no mas vien una accion, como en este casa q sera agragar un producto
        if (this.products.map(product => product.code).includes(code)){
            
            const newProduct = new Product(
                this.generarId(), // aqui no se 
                title,            // no se espesifica
                description,      // los tipos de datos
                price,            // ya que asumo 
                thumbnail,        // que el constructor
                code,             // realizo esa verificacion
                stock             // y los datos son correctos
            );
            this.products.push(newProduct);//se agrega el producto creado al array products
        } else {
            console.log("El código " + code + " está repetido");// si no se verifica la primera comprovacion devuelve un error

        }

}

private generarId(): number { // declaro en private para asegurar q solo sera usado dentro de la clase y evitar un id repetido

    this.idCount++;
    return this.idCount;

}

public getProduct(): Product[] {//(Product es el tipo de retorno del metodo) indico que devuelve el arreglo de objetos Product
    return this.products;
}

public getProductById(id:number) : Product | string { //id : declaro tipo number xq al ser publica se debe verificar, el metodo puede devolver un tipo Product o un string 
    const product = this.products.find(product => product.id === id);//Si existe ID se guarda en variabe product
    if (product) {
        return product;
    } else {
        return "Not Found";// si no se encuetra retorna error 
    }
}

}


class Product {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public price: number,
      public thumbnail: string,
      public code: string,
      public stock: number
    ) {}
  }

const productManager = new ProductManager();

// TESTING
console.log("1🚀 Productos: ", productManager.getProduct());
productManager.addProduct(
  "producto prueba 1",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
productManager.addProduct(
  "producto prueba 4",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc124",
  25
);
console.log("2🚀 Productos: ", productManager.getProduct());
productManager.addProduct(
  "producto prueba 2",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc124",
  25
);
productManager.addProduct(
  "producto prueba 3",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log(
  "Resultado de búsqueda por ID:",
  productManager.getProductById(1)
);
console.log(
  "Resultado de búsqueda por ID:",
  productManager.getProductById(3)
);