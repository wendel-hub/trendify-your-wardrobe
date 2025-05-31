
-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  description TEXT,
  image_url TEXT,
  category TEXT NOT NULL,
  sizes TEXT[] DEFAULT '{}',
  colors TEXT[] DEFAULT '{}',
  stock_quantity INTEGER DEFAULT 0,
  is_new BOOLEAN DEFAULT FALSE,
  is_sale BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address JSONB,
  payment_method TEXT,
  payment_details JSONB,
  items JSONB NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policies for products (readable by everyone, editable by authenticated users)
CREATE POLICY "Products are viewable by everyone" ON public.products
  FOR SELECT USING (true);

CREATE POLICY "Products are editable by authenticated users" ON public.products
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for orders (insertable by everyone, viewable by authenticated users)
CREATE POLICY "Orders can be created by anyone" ON public.orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Orders are viewable by authenticated users" ON public.orders
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Orders are editable by authenticated users" ON public.orders
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert some sample products
INSERT INTO public.products (name, price, original_price, description, image_url, category, sizes, colors, stock_quantity, is_new, is_sale) VALUES
('Elegant Silk Blouse', 89.00, 120.00, 'Beautiful silk blouse perfect for any occasion', 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'women', ARRAY['XS', 'S', 'M', 'L'], ARRAY['White', 'Black', 'Beige'], 25, false, true),
('Classic Denim Jacket', 125.00, null, 'Timeless denim jacket for the modern woman', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'women', ARRAY['S', 'M', 'L', 'XL'], ARRAY['Blue', 'Black'], 15, true, false),
('Tailored Wool Coat', 245.00, null, 'Premium wool coat for sophisticated style', 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'men', ARRAY['M', 'L', 'XL', 'XXL'], ARRAY['Navy', 'Charcoal', 'Camel'], 10, false, false),
('Minimalist Tote Bag', 65.00, null, 'Clean and simple tote bag for everyday use', 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'accessories', ARRAY['One Size'], ARRAY['Black', 'Brown', 'Beige'], 30, false, false),
('Cashmere Sweater', 165.00, null, 'Luxurious cashmere sweater in multiple colors', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'women', ARRAY['XS', 'S', 'M', 'L', 'XL'], ARRAY['Cream', 'Grey', 'Navy'], 20, true, false);
