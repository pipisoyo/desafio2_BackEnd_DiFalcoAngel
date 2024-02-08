"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
        this.idCount = 0;
        this.PATH = './products.json';
    }
    ProductManager.prototype.handleData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, lastProductId, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 6]);
                        return [4 /*yield*/, fs_1.promises.readFile(this.PATH, 'utf-8')];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.products = JSON.parse(data);
                            lastProductId = this.products.reduce(function (maxId, product) { return Math.max(maxId, product.id); }, 0);
                            this.idCount = lastProductId;
                            return [2 /*return*/, this.products];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        error_1 = _a.sent();
                        if (!(error_1.code === 'ENOENT')) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs_1.promises.writeFile(this.PATH, '', 'utf-8')];
                    case 3:
                        _a.sent();
                        this.products = [];
                        return [2 /*return*/, this.products];
                    case 4:
                        console.log("Error al leer los datos del archivo:", error_1);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return ProductManager;
}());
addProduct(// plubli indica que el el metdo es de acceso puplico puede se accedido des fuera de la clase
title, string, description, string, price, number, thumbnail, string, code, string, stock, number);
void {
    : .products.map(function (product) { return product.code; }).includes(code)
};
{
    var newProduct = new Product(this.generarId(), // aqui no se 
    title, // no se espesifica
    description, // los tipos de datos
    price, // ya que asumo 
    thumbnail, // que el constructor
    code, // realizo esa verificacion
    stock // y los datos son correctos
    );
    this.products.push(newProduct); //se agrega el producto creado al array products
}
{
    console.log("El código " + code + " está repetido"); // si no se verifica la primera comprovacion devuelve un error
}
generarId();
number;
{ // declaro en private para asegurar q solo sera usado dentro de la clase y evitar un id repetido
    this.idCount++;
    return this.idCount;
}
getProduct();
Product[];
{ //(Product es el tipo de retorno del metodo) indico que devuelve el arreglo de objetos Product
    return this.products;
}
getProductById(id, number);
Product | string;
{ //id : declaro tipo number xq al ser publica se debe verificar, el metodo puede devolver un tipo Product o un string 
    var product = this.products.find(function (product) { return product.id === id; }); //Si existe ID se guarda en variabe product
    if (product) {
        return product;
    }
    else {
        return "Not Found"; // si no se encuetra retorna error 
    }
}
var Product = /** @class */ (function () {
    function Product(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    return Product;
}());
var productManager = new ProductManager();
// TESTING
console.log("1🚀 Productos: ", productManager.getProduct());
productManager.addProduct("producto prueba 1", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
productManager.addProduct("producto prueba 4", "Este es un producto de prueba", 200, "Sin imagen", "abc124", 25);
console.log("2🚀 Productos: ", productManager.getProduct());
productManager.addProduct("producto prueba 2", "Este es un producto de prueba", 200, "Sin imagen", "abc124", 25);
productManager.addProduct("producto prueba 3", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
console.log("Resultado de búsqueda por ID:", productManager.getProductById(1));
console.log("Resultado de búsqueda por ID:", productManager.getProductById(3));
