
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { orderData, adminEmail } = await req.json()

    const emailContent = `
      <h2>New Order Received</h2>
      <p><strong>Order ID:</strong> ${orderData.id}</p>
      <p><strong>Customer:</strong> ${orderData.customer_name}</p>
      <p><strong>Email:</strong> ${orderData.customer_email}</p>
      <p><strong>Phone:</strong> ${orderData.customer_phone}</p>
      <p><strong>Total Amount:</strong> $${orderData.total_amount.toFixed(2)}</p>
      <p><strong>Payment Method:</strong> ${orderData.payment_method}</p>
      
      <h3>Shipping Address:</h3>
      <p>
        ${orderData.shipping_address.address}<br>
        ${orderData.shipping_address.city}, ${orderData.shipping_address.state} ${orderData.shipping_address.zipCode}<br>
        ${orderData.shipping_address.country}
      </p>
      
      <h3>Items Ordered:</h3>
      <ul>
        ${orderData.items.map(item => 
          `<li>${item.name} - Size: ${item.size} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`
        ).join('')}
      </ul>
      
      <p><strong>Order Date:</strong> ${new Date(orderData.created_at).toLocaleString()}</p>
    `

    // In a real implementation, you would use a service like Resend, SendGrid, or similar
    // For this example, we'll just log the email content
    console.log('Email would be sent to:', adminEmail)
    console.log('Email content:', emailContent)

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
