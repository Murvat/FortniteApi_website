function BasketItem(props){
    const {
        id,
        name,
        price,
        quantity,
    } = props;
return(
    <li href="#!" className="collection-item ">
        {name} x {quantity} = {price}
        <span href="#!" class="secondary-content">
            <i class="material-icons">delete_forever</i></span></li>
)
};
export {BasketItem}