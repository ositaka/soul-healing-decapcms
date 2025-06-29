import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { ImageUrl } from '../../utils'
import { allPages } from '/.contentlayer/generated'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


export default function Bookings({ bookings }) {
  useEffect(() => {
    // 1. Create & inject the <style> block
    const style = document.createElement('style');
    style.innerHTML = `
      .pp-DEZNSXPXAYD3C {
        text-align: center;
        border: none;
        border-radius: 0.25rem;
        min-width: 11.625rem;
        padding: 0 2rem;
        height: 2.625rem;
        font-weight: bold;
        background-color: #FFD140;
        color: #000000;
        font-family: "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.25rem;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);

    // 2. Build the <form> and its children
    const form = document.createElement('form');
    form.action = 'https://www.paypal.com/ncp/payment/DEZNSXPXAYD3C';
    form.method = 'post';
    form.target = '_blank';
    Object.assign(form.style, {
      display: 'inline-grid',
      justifyItems: 'center',
      alignContent: 'start',
      gap: '0.5rem',
    });

    const input = document.createElement('input');
    input.className = 'pp-DEZNSXPXAYD3C';
    input.type = 'submit';
    input.value = 'Make Payment';
    form.appendChild(input);

    const cardsImg = document.createElement('img');
    cardsImg.src = 'https://www.paypalobjects.com/images/Debit_Credit_APM.svg';
    cardsImg.alt = 'cards';
    form.appendChild(cardsImg);

    const footer = document.createElement('section');
    footer.style.fontSize = '0.75rem';
    footer.innerHTML = `
      Powered by 
      <img 
        src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" 
        alt="paypal" 
        style="height:0.875rem;vertical-align:middle;"
      />
    `;
    form.appendChild(footer);

    // 3. Append into our container
    const container = document.getElementById('paypal-container');
    container.appendChild(form);

    // 4. Cleanup on unmount
    return () => {
      document.head.removeChild(style);
      if (container.contains(form)) {
        container.removeChild(form);
      }
    };
  }, []);

  return (
    <>
      <NextSeo
        title="Bookings"
        description="Schedule a Trance Healing with Tiago
"
        openGraph={{
          url: 'http://thegoldenhealing.online/bookings',
          title: 'Bookings',
          description: 'Schedule a Trance Healing with Tiago',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'The Golden Healing',
        }}
      />

      <Layout>
        <section className="section section--text_only" style={{maxWidth:'100%', marginBottom: '0'}}>
          <div className="section__content" style={{ width: '100%', maxWidth: '1800px', textAlign: 'center' }}>
            <h1>{bookings.title}</h1>
            <ReactMarkdown remarkPlugins={[gfm]} children={bookings.body?.raw} />
            <iframe src='https://calendly.com/trance-healing-with-tiago' width='100%' height='600' />
            <div id="paypal-container" />
          </div>
        </section>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const bookings = await allPages.find((bookings) => {

    return bookings.slug === "bookings"

  })

  return { props: { bookings } }
}
