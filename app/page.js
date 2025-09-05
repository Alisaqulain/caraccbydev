"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import Alert from "./components/Alert";
// import Image from 'next/image'
// 
export default function Home() {
  // Animation for elements when they come into view
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.getElementById("parallax-bg");
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (productName) => {
    setAlert({
      show: true,
      message: `${productName} added to cart! We'll contact you soon for order confirmation.`,
      type: 'success'
    });
  };

  const handleShopNow = () => {
    setAlert({
      show: true,
      message: 'Redirecting to products page...',
      type: 'info'
    });
    setTimeout(() => {
      window.location.href = '/products';
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Premium Car Accessories & Modifications in Muzaffarnagar | The Accessory Center MZN</title>
        <meta name="description" content="Transform your ride with premium car accessories in Muzaffarnagar. Expert installation, quality products, and exceptional service. Shop speakers, headlights, horns, LED lights, and complete car customization services." />
        <meta name="keywords" content="car accessories muzaffarnagar, automotive parts muzaffarnagar, car modifications muzaffarnagar, car speakers muzaffarnagar, headlights muzaffarnagar, car horns muzaffarnagar, LED lights muzaffarnagar, car accessories near me" />
        <link rel="canonical" href="https://theaccessorycentermzn.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": "The Accessory Center Muzaffarnagar",
              "description": "Premium car accessories and modifications store in Muzaffarnagar",
              "url": "https://theaccessorycentermzn.in",
              "logo": "https://theaccessorycentermzn.in/logo.jpg",
              "image": "https://theaccessorycentermzn.in/logo.jpg",
              "telephone": "+917456886910",
              "email": "shazizaidi52058@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sadaat Hostel, Arya Samaj Road",
                "addressLocality": "Muzaffarnagar",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "251002",
                "addressCountry": "IN"
              },
              "openingHours": [
                "Mo-Fr 09:00-19:00",
                "Sa 10:00-18:00",
                "Su 12:00-17:00"
              ],
              "sameAs": [
                "https://www.facebook.com/accessorycentermzn",
                "https://www.instagram.com/accessorycentermzn",
                "https://www.twitter.com/accessorycentermzn"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Accessories",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Car Speakers",
                      "description": "High-quality car speakers for enhanced audio experience"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "LED Headlights",
                      "description": "Premium LED headlights for improved visibility and modern look"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Car Horns",
                      "description": "Loud and clear car horns for safety and attention"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <main className="flex flex-col items-center justify-center overflow-hidden">
        {/* Alert Component */}
        <Alert 
          show={alert.show} 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert({ ...alert, show: false })} 
        />
      {/* Hero Section with Parallax Effect */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div
          id="parallax-bg"
          className="absolute inset-0 transition-transform duration-300"
        >
           <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car Accessories"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Animated Light Effects */}
        <div className="absolute inset-0">
          {/* Floating light orbs */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-green-400 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-60"></div>
          
          {/* Moving light streaks */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-light-streak-1 opacity-60"></div>
            <div className="absolute top-1/3 right-0 w-1 h-24 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-light-streak-2 opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/4 w-1 h-20 bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-light-streak-3 opacity-50"></div>
          </div>
          
          {/* Glowing particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float-1 opacity-30"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-float-2 opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-3 opacity-35"></div>
            <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-float-4 opacity-45"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-float-5 opacity-25"></div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-down relative">
            <span className="relative z-10">Transform Your Ride</span>
            {/* Text glow effect */}
            <div className="absolute inset-0 text-red-500 blur-sm opacity-50 animate-pulse"></div>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 animate-fade-in-up delay-200 relative z-10">
            Premium accessories to style and protect your car
          </p>
          <button 
            onClick={handleShopNow}
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-500 relative z-10 group"
          >
            <span className="relative z-10">Shop Now</span>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-red-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={ref1}
        className={`py-16 px-6 max-w-7xl w-full transition-all duration-700 relative ${
          inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background light effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-10 relative z-10">
          <span className="relative">Explore Categories</span>
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-lg opacity-50"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden relative">
              <Image
                src="/int.jpg"
                alt="Interior Car Accessories - Premium interior modifications and styling"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 relative z-10">
              <h3 className="text-xl font-semibold group-hover:text-red-400 transition-colors">Interior</h3>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden relative">
              <Image
                src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg"
                alt="Exterior Car Accessories - Premium exterior modifications and styling"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 relative z-10">
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">Exterior</h3>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden relative">
              <Image
                src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
                alt="Car Electronics - Premium automotive electronics and accessories"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 relative z-10">
              <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">Electronics</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        ref={ref2}
        className={`py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full transition-all duration-700 ${
          inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most popular car accessories, handpicked for quality and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-red-500/20">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/car horn.avif"
                  alt="Premium Car Horn - High-quality automotive horn system"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Premium Car Horn
                </h3>
                <p className="text-gray-400 mb-4">High-quality automotive horn system for enhanced safety</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-red-500">₹3,000</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 ml-2">(127)</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddToCart('Premium Car Horn')}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-red-500/20">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/car streeing cover.jpg"
                  alt="Premium Steering Cover - Comfortable and stylish steering wheel protection"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Premium Steering Cover
                </h3>
                <p className="text-gray-400 mb-4">Comfortable and stylish steering wheel protection</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-red-500">₹699</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 ml-2">(89)</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddToCart('Premium Steering Cover')}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-red-500/20">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/car body cover.jpg"
                  alt="Premium Car Body Cover - All-weather vehicle protection"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Premium Car Body Cover
                </h3>
                <p className="text-gray-400 mb-4">All-weather vehicle protection for your car</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-red-500">₹2,500</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 ml-2">(203)</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddToCart('Premium Car Body Cover')}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        ref={ref3}
        className={`py-16 px-6 w-full transition-all duration-700 ${
          inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-red-600 rounded-xl p-10 text-center text-white max-w-5xl mx-auto transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold">Upgrade Your Drive Today</h2>
          <p className="mt-4 text-lg">
            Get premium accessories at unbeatable prices
          </p>
          <button 
            onClick={handleShopNow}
            className="mt-6 px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Start Shopping
          </button>
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes lightStreak1 {
          0% {
            transform: translateX(-100px) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(-50px);
            opacity: 0;
          }
        }
        
        @keyframes lightStreak2 {
          0% {
            transform: translateX(100px) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100vw) translateY(30px);
            opacity: 0;
          }
        }
        
        @keyframes lightStreak3 {
          0% {
            transform: translateX(-50px) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(50vw) translateY(-20px);
            opacity: 0;
          }
        }
        
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.5;
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          33% {
            transform: translateY(-15px) translateX(-10px);
            opacity: 0.7;
          }
          66% {
            transform: translateY(-25px) translateX(8px);
            opacity: 0.5;
          }
        }
        
        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.35;
          }
          40% {
            transform: translateY(-18px) translateX(12px);
            opacity: 0.6;
          }
          80% {
            transform: translateY(-8px) translateX(-7px);
            opacity: 0.4;
          }
        }
        
        @keyframes float4 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.45;
          }
          30% {
            transform: translateY(-12px) translateX(-8px);
            opacity: 0.7;
          }
          60% {
            transform: translateY(-22px) translateX(6px);
            opacity: 0.5;
          }
        }
        
        @keyframes float5 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-light-streak-1 {
          animation: lightStreak1 8s ease-in-out infinite;
        }
        
        .animate-light-streak-2 {
          animation: lightStreak2 10s ease-in-out infinite 2s;
        }
        
        .animate-light-streak-3 {
          animation: lightStreak3 12s ease-in-out infinite 4s;
        }
        
        .animate-float-1 {
          animation: float1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float2 8s ease-in-out infinite 1s;
        }
        
        .animate-float-3 {
          animation: float3 7s ease-in-out infinite 2s;
        }
        
        .animate-float-4 {
          animation: float4 9s ease-in-out infinite 3s;
        }
        
        .animate-float-5 {
          animation: float5 5s ease-in-out infinite 1.5s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
      </main>
    </>
  );
}