// export default function Product() {
//     const products = ['Apple', 'Banana', 'Orange', 'Apple'];
//     return (
//         <div>
//             {products.map((product) => 
//                 <h3 key={product}>{product}</h3>
//             )}
//         </div>
//     )
// }

function Product (){
    const products =[
        {id:1, name:"laptop", price:200},
        {id:2, name:"phone", price:120},
        {id:3, name:"modem", price:90},
        {id:4, name:"laptop", price:600}
    ];

    return (
        <div>
            {products.map((product, index) => 
                <h3 key={index}>
                   {index} {product.name}: $ {product.price}
                </h3>
            )}
        </div>
    );
}

export default Product

// return (
//     <div>
//         <ul>
//             {products.map((product, index) => 
//                 <li key={index}>
//                     {product.name}: $ {product.price}
//                 </li>
//             )}
//         </ul> 
//     </div>
// );  for lists for ol or ul