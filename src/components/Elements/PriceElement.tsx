import React, {useEffect, useState} from "react";

interface Props {
    price: number;
    className: string;
}

const PriceElement: React.ComponentType<Props> = (
    {
        price,
        className
    }) => {

    const [tmpPrice, setTmpPrice] = useState<string>('');

    useEffect(() => {
        let priceString = price.toString();
        if(priceString.length > 3 && priceString.length < 5) {
            setTmpPrice(
                priceString[0] + ' ' + priceString[1] + priceString[2] + priceString[3]
            );
        } else if (priceString.length > 4) {
            setTmpPrice(
                priceString[0] + priceString[1] +' ' + priceString[2] + priceString[3] + priceString[4]
            );
        } else {
            setTmpPrice(priceString);
        }
    }, [price]);

    return (
        <div className={className}>
            <div>{tmpPrice} €</div>
        </div>
    );
}

export default PriceElement;