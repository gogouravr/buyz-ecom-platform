CREATE TABLE shopper.shoppers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INTEGER,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15),
    accepts_email_marketing BOOLEAN,
    accepts_sms_marketing BOOLEAN,
    country VARCHAR(50),
    tags TEXT,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);