import Head from 'next/head'
import Image from 'next/image'
import styles from '/components/layout.module.css'
import utilStyles from '/styles/utils.module.css'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'
import '/components/jquery-3.6.0.min.js'


export default function FirstPost() {
  return (
  
  
<div className={styles.container}>

  <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>GAY CLUB GALLERY</title>


        <meta name="twitter:card" content="summary_large_image" />
      </Head>

		<header className={styles.header}>
		<section className={styles.logo_style}>
              <Image
              priority
              src="/images/face_ico.png"
              className={styles.image_style}
              height={75}
              width={75}
            />
		</section>
			
			<section className={styles.header_logo_section}>
			              <Image
              priority
              src="/images/fan_club.png"
              className={styles.header_logo}
              height={122}
              width={415}
            />
			
			</section>
			
			<p className={styles.gallery_button}><Link href="/"><span>НАЗАД</span></Link></p>
			
			
		</header>
  
  
	<h1 className={styles.h1_gallery}>
	Галерея
	</h1>
  
 <section className={styles.photos_gallery}>
 
 <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_104206.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_113036.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={300}
              width={400}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_113055.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={300}
              width={400}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_115659.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_115718.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={300}
              width={400}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_120701.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_120752.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_131709.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_121011.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_121146.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_131443.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/IMG_20210521_131709.Nikon_Dise3.0_by_jairo_rossi.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

   <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/040_A6ASNaHCGfg.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>

     <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/049_aPQPPuXTSR8.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
  
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/061_LD8RnlSbdJs.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/110_notmpSP9QhA.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/116_eiDpPvug5ZY.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/121_41zk3zIh6RI.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/141_kkrnPm_akz0.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/145_VYYpYkyqpbE.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/146_m2ZjQDFBU6c.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/150_O7fO97K7i_c.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/152_wiRzp4gjYMg.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/153_uMcfYzT-JQY.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/10Е/201_0onI6nPLriQ.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
			
			
			
			
			
       <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/089_GvWyoFkepuE.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/102_v5w5fksFbV0.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/124_DsT0zd68LSw.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/140_YtNZG-bbUZc.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/169_gMZ5-nMLtPg.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/217_tDn6knrhzp8.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/215_yMAlIwNlut4.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/288_FZp7lUKkkUY.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={711}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/300_UTJ8FbbK7G8.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={400}
            />
			</section>
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/Е1/301_v3oR5rXefvI.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
  
  
  
  
  
  
  
  
         <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_1@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
         
           <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_2@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                  <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_3@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                  <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_4@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                  <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_5@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                  <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_6@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                  <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_7@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                  <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_8@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                  <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_9@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                           <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_11@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                           <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_12@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={300}
              width={400}
            />
			</section>
  
                           <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_13@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={300}
              width={400}
            />
			</section>
  
                           <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_15@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                           <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_16@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
  
                           <section className={styles.image_gallery}>
	                    <Image
              priority
              src="/images/volov/photo_17@10-06-2021_10-56-53.jpg"
              className={styles.image_style_gallery}
              height={400}
              width={300}
            />
			</section>
 
  
  </section>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div>
  )
}