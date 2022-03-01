import productApi from 'api/productApi';
import { useEffect, useState } from 'react';

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            (async () => {
                const response = await productApi.get(productId);
                setProduct(response);
            })();
        } catch (error) {
            console.log('Failed to fetch product detail');
        }
        setLoading(false);
    }, [productId]);

    return { product, loading };
}
