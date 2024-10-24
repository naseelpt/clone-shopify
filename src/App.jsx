
import './App.css'

function App() {


  return (
    <>
      <div className='bg-green-600 ' >

        <div className='flex justify-center items-center'>
          <img src="/logo.png" className='h-20 w-24 md:h-24 md:w-40' alt="" />


        </div>

        <div className='mt-16 text-center'>
          <h1 className='text-white text-6xl font-bold'>Set Up Your Online Store in Minutes</h1>
          <h4 className='mt-14'>Try Shopify free for 3 days, and explore all the features you need to start a business fast.</h4>
          <input type="text" placeholder='enter your email address' className='bg-white mt-10 md:h-12 md:w-96 rounded-full border-rose-600 outline-none placeholder:text-center type:text-center' />
          <p className='mt-6'>By entering your email, you agree to receive marketing emails from Shopify.</p>


        </div>

        <div className='flex justify-center mt-8'>

          <img src="https://cdn.shopify.com/b/shopify-brochure2-assets/24806ba8dcf1fa483eb8f8b66081f8d2.png" alt="no image" className='md:w-1/2' />
        </div>





      </div>
      <div className='md:p-20'>
        <div className=' grid md:grid-cols-3 gap-1'>
          <div
          ><img src="/logo1.png" alt="no image" className='md:h-12  md:w-20 ' />
            <h3 className='ms-3 text-2xl'>Beautiful themes that are responsive and customizable</h3>
            <h6 className='ms-3'>No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.</h6>

          </div>

          <div><img src="/logo2.png" alt="no image" className='md:h-12 md:w-16 ' />
            <h3 className='md:ms-3 text-2xl'>Pricing as low as ₹1,499.00/monthe</h3>
            <h6 className='ms-3 text-1xl'>Whether you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just ₹1,499.00/month when paying yearly..</h6></div>

          <div><img src="https://cdn1.iconfinder.com/data/icons/social-media-2549/64/contact_us-request-follow_up-phone-communications-contact-email-info-telephone-contact_me-contact_in-512.png" alt="no image" className='md:h-12 md:w-14  ' />
            <h3 className='ms-3'>Trusted by millions of businesses worldwide</h3>
            <h6 className='ms-3'>Shopify handles everything from marketing and payments, to secure checkout and shipping.</h6></div>

        </div>
        <hr />
      </div>


       <div className=''>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-10 md:px-80' >
          <div>
    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/bajaao-f2a14e9beb29e6a1728e44f94057db8ee90b4d712c708e164f541153b22c8b8f.svg" alt=""  />
          </div>
          <div>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/mcaffeine-a5fd3895d022eb9c691c849057901ea2e58300ba04f0f4f2b417410a59cd3f2b.svg" alt="" />
          </div>
          <div><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/yoga-bar-b071057f99bdb76c16abfdb198ff71e4bff88bc6042160ed2a62033a2afe4607.svg" alt="" /></div>
          <div><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/nush-27894da00d42e7f5646b987c34adfa40ff7df5c1d40b9fb7060550b1598f723b.svg" alt="" /></div>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-10 md:px-80 mt-10' >
          <div>
    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/john-jacobs-f84c517d865b1b427b1c9a8aa9e2f01088d85d5cf79838db483b44feddd69e1e.svg" alt="" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/vahdam-48c1f32cb734ab257a948a07b15b7759d32b2d9773d847df58dc58477506f960.svg" alt="" />
          </div>
          <div><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/vahdam-48c1f32cb734ab257a948a07b15b7759d32b2d9773d847df58dc58477506f960.svg" alt="" /></div>
          <div><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en-IN/star-struck-994dbed8d2e992a0245b24ccb7c51e97ea1e01847e30034eb6107a27053c7ca8.svg" alt="" /></div>
        </div>
        <hr className='md:w-11/12 ms-14' />
      </div>

         <div className='text-center'>
          <p className='mt-32 text-2xl'>“Shopify is better than any other platform we've played with, and we've played with them all.”</p>
          <h5 className='font-bold mt-8'>Jonathan Bayme, CEO of Theory11</h5>
          
           <button className='bg-black rounded-full h-14 w-44 mt-14 text-white font-bold'>Start free trial</button>
        </div>

        
        <div className=' flex justify-end md:py-20'>
          
            <div><a href="" className='text-black font-bold  md:h-9 md:me-52 me-10 '>Terms of Service</a></div>
            <div><a href="" className='text-black font-bold  md:me-48 me-10'>Privacy Policy</a></div>
            <div><a href="" className='text-black font-bold md:me-4 me-2'>Sitemap</a></div>
        </div>  
         
      




    </>
  )
}

export default App
