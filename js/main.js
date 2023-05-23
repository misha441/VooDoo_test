

const alpha_button = document.querySelector("#alpha_button")
const alpha_info = document.querySelector("#alpha_info")

alpha_button.addEventListener("click", ()=> {
    alpha_info.classList.toggle("active")
})


function createProductsList(products){
    const products_field = document.querySelector("#products_field")
    products_field.innerHTML = ""

    products.forEach((product) => {
        const products_card =` 
            <div class="mb-[60px] w-[300px] max-[370px]:w-[200px]">
                <a href="#" class="product_card w-[300px] max-[370px]:w-[200px]">
                    <div class="rounded-[4px] border border-black w-[300px] h-[300px] relative overflow-hidden max-[370px]:w-[200px] max-[370px]:h-[200px]">
                        <div class="absolute bg-black text-white rounded-[4px] p-[8px] top-[8px] left-[8px] uppercase">used</div>
                        <img class=""  src="${product.images[0].src}" alt="">
                    </div>
                    <div class="flex justify-between mt-[12px] grow">
                        <div class="product_name">
                            <div class="font-bold">
                                ${product.title}
                            </div>
                            <div class="font-bold">
                                price: ${product.variants[0].price}
                            </div>
                        </div>
                        <div class="product_condition">
                            <div class="font-medium text-right">
                                Condition
                            </div>
                            <div class="font-medium text-right">
                                Slightly used
                            </div>
                        </div>
                    </div>
                </a>
                <button class="p-[16px] bg-black text-white center w-[100%] font-bold mt-[10px] min-[646px]:hidden">
                    PICK-UP IN 2200
                </button>
            </div>
            
`

        products_field.innerHTML = products_field.innerHTML + products_card
    })




}

async function fetchProducts(){
    try{
        const response = await fetch("https://voodoo-sandbox.myshopify.com/products.json?limit=12")


        if(!response.ok){
            throw new Error(`Failed to fetch products: ${response.status}`)
        }
        const result = await response.json()
        console.log(result.products)

        createProductsList(result.products)
    }catch (e){
        console.log(e)
    }
}

fetchProducts()