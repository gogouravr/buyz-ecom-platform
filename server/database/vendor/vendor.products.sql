CREATE TABLE vendor.products (
    id SERIAL,
    product_id UUID DEFAULT gen_random_uuid() NOT NULL,
    variant_id UUID DEFAULT gen_random_uuid() NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    category VARCHAR(50),
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    PRIMARY KEY (product_id, variant_id)
);