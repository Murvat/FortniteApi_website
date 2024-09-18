function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        images,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={images[0]} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price} $.
                </span>
            </div>
        </div>
    );
    ////
}

export { GoodsItem };