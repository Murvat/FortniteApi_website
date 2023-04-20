import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {order} = props;
    return (
        <ul className="collection">
        <li href="#!" className="collection-item active">Basket</li>
        {
            order.lentgh ? order.map(item => (
                <BasketItem key={item.id} {...item}/>
            )) :
            ( <li className='collection-item'>Basket is empty</li>)
        }
        <li href="#!" className="collection-item active">Summary</li>
      </ul>
    )
}

export {BasketList}