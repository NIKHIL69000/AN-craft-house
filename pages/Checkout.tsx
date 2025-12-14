import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '../components/Icons';
import { ScrollReveal } from '../components/ScrollReveal';

type PaymentMethod = 'upi' | 'card' | 'qr';

export const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');

  // Order ID generator
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    if (cart.length === 0 && step !== 'success') {
      navigate('/shop');
    }
  }, [cart, navigate, step]);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setOrderId(`ORD-${Math.floor(Math.random() * 100000)}`);
      setStep('success');
      clearCart();
      window.scrollTo(0, 0);
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-brand-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircleIcon className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">Thank you for supporting our artisans.</p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <p className="text-sm text-gray-500 mb-1">Order Number</p>
            <p className="text-lg font-mono font-bold text-gray-900">{orderId}</p>
            <div className="my-4 border-t border-gray-200"></div>
            <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
            <p className="text-gray-900 font-medium">3-5 Business Days</p>
          </div>

          <Link 
            to="/" 
            className="block w-full py-4 bg-brand-600 text-white font-bold rounded-lg shadow hover:bg-brand-700 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Checkout</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          {/* Main Content */}
          <div className="lg:col-span-7">
            {step === 'shipping' ? (
              <ScrollReveal className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm mr-3">1</span>
                  Shipping Information
                </h2>
                <form id="shipping-form" onSubmit={handleShippingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Jane"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="123 Art Lane"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Mumbai"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Maharashtra"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="400001"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400" 
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button type="submit" className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg">
                       Continue to Payment
                     </button>
                  </div>
                </form>
              </ScrollReveal>
            ) : (
              <ScrollReveal className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm mr-3">2</span>
                        Payment Method
                    </h2>
                    <button onClick={() => setStep('shipping')} className="text-sm text-brand-600 hover:underline">Edit Shipping</button>
                 </div>
                 
                 <form id="payment-form" onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <button 
                            type="button"
                            onClick={() => setPaymentMethod('upi')}
                            className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all ${paymentMethod === 'upi' ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            <span className="text-sm font-bold">UPI</span>
                        </button>
                        <button 
                            type="button"
                            onClick={() => setPaymentMethod('card')}
                            className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all ${paymentMethod === 'card' ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            <span className="text-sm font-bold">Card</span>
                        </button>
                        <button 
                            type="button"
                            onClick={() => setPaymentMethod('qr')}
                            className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all ${paymentMethod === 'qr' ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                            <span className="text-sm font-bold">Scan QR</span>
                        </button>
                    </div>

                    {/* Payment Details */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        {paymentMethod === 'upi' && (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 mb-2">Pay securely using Google Pay, PhonePe, or Paytm.</p>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Enter UPI ID</label>
                                    <input 
                                        type="text" 
                                        placeholder="username@oksbi" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-gray-900 bg-white placeholder-gray-400" 
                                    />
                                </div>
                                <div className="text-center text-xs text-gray-500 mt-2">-- OR --</div>
                                <button type="button" className="w-full py-3 border border-gray-300 bg-white rounded-lg font-medium text-gray-700 hover:bg-gray-50">Request Payment via App</button>
                            </div>
                        )}

                        {paymentMethod === 'card' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                    <input 
                                        type="text" 
                                        placeholder="0000 0000 0000 0000" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-gray-900 bg-white placeholder-gray-400" 
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                        <input 
                                            type="text" 
                                            placeholder="MM/YY" 
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-gray-900 bg-white placeholder-gray-400" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                        <input 
                                            type="text" 
                                            placeholder="123" 
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-gray-900 bg-white placeholder-gray-400" 
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {paymentMethod === 'qr' && (
                            <div className="flex flex-col items-center">
                                <div className="w-48 h-48 bg-white p-4 rounded-lg shadow-inner border border-gray-200 mb-4 flex items-center justify-center">
                                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=ancrafthouse@upi&pn=AN_Craft_House&am=${total}`} alt="Payment QR" className="w-full h-full opacity-80" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">Scan to pay ₹{total}</p>
                                <p className="text-xs text-gray-500 mt-1">Use any UPI app to scan</p>
                            </div>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700'}`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : `Pay ₹${total}`}
                    </button>
                 </form>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
              <ul className="divide-y divide-gray-100 max-h-80 overflow-y-auto mb-4">
                {cart.map(item => (
                  <li key={item.id} className="py-4 flex">
                     <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                     </div>
                     <div className="ml-4 flex flex-1 flex-col">
                        <div>
                           <div className="flex justify-between text-base font-medium text-gray-900">
                              <h4 className="line-clamp-1">{item.name}</h4>
                              <p className="ml-4">₹{item.price * item.quantity}</p>
                           </div>
                           <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                        </div>
                     </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                   <p>Subtotal</p>
                   <p>₹{total}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                   <p>Shipping</p>
                   <p className="text-green-600 font-medium">Free</p>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100 mt-2">
                   <p>Total</p>
                   <p>₹{total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};