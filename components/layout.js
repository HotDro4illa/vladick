import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'
import '/components/jquery-3.6.0.min.js'
import '/components/vlad.js'
import React, { useState, useEffect } from 'react';

const name = 'Vladick'
export const siteTitle = 'Vladick Fan Club'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>GAY CLUB</title>

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
	  
	  
	


	
	<section className={styles.main_text}>
	<h1 className={styles.main_text_h1}>Самый <span className={styles.main_text_red}>красивый</span>, <span className={styles.main_text_blue}>гениальный</span>, <span className={styles.main_text_pink}>талантливый</span>.</h1>
	</section>
	

	
	
	<section>
	
	<section className={styles.question}>
	<a>Кто же это?</a>

	</section>
		
		<section className={styles.image_arrow}>
			<Image
              priority
              src="/images/arrow.png"
              className={styles.image_style2}
              height={40}
              width={140}
            />
		</section>
		
		
	</section>
	
	
	
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
			
			<p className={styles.gallery_button}><Link href="/posts/gallery"><span>ГАЛЕРЕЯ</span></Link></p>
			
			
		</header>
	
	
	<section className={styles.section_buffer}>
	</section>


	


	
	  
	<section className={styles.vlad_all}>  

<section className={styles.vlad}>

			<section className={styles.vlad_bg}>
	<Image
              priority
              src="/images/vladick_bg1.png"
              className={styles.image_style_bg}
              height={1280}
              width={1280}
            />
			

	</section>
		</section>

<section className={styles.vlad2}>
<section className={styles.vlad_bg2}>
							<Image
              priority
              src="/images/vladick_bg2.png"
              className={styles.image_style_bg}
              height={1600}
              width={1200}
            />

	</section>	
	</section>
	
	
	<section className={styles.vlad3}>
<section className={styles.vlad_bg3}>
							<Image
              priority
              src="/images/vladick_bg3.png"
              className={styles.image_style_bg}
              height={1600}
              width={1500}
            />

	</section>	
	</section>

	<section className={styles.vlad4}>
<section className={styles.vlad_bg4}>
							<Image
              priority
              src="/images/vladick_bg4.png"
              className={styles.image_style_bg}
              height={1950}
              width={1550}
            />

	</section>	
	</section>

	<section className={styles.vlad5}>
<section className={styles.vlad_bg5}>
							<Image
              priority
              src="/images/vladick_bg5.png"
              className={styles.image_style_bg}
              height={1050}
              width={550}
            />

	</section>	
	</section>
	</section>

<section className={styles.slide_bg}>
</section>



<section className={styles.name_gen_sect}>
<a>
  <span className={styles.a}>Это Владислав Хлызов!</span>
  <span className={styles.b}>Это Влади<a className={styles.name_gen_alt}>♂SLAVE♂</a> Хлызов!</span>
</a>
</section>

<h1 className={styles.achives}>
Достижения
</h1>

<section className={styles.feats}>


							<Image
              priority
              src="/images/feats.png"
              className={styles.image_style}
              height={1080}
              width={1920}
            />


</section>

<h1 className={styles.anekdots_txt}>
Анекдоты
</h1>


<section className={styles.anekdots_gallery}>
 
<section className={styles.section_gallery}>

<p className={styles.anekdots}>
Задержался Владислав Хлiзман на встрече с инвестором. Понимает что опаздывает на выступление перед сторонниками. Быстро побежал, взял такси, вбегает в здание. Ему волонтеры:
- Владислав, у вас...
- Нет времени - кричит им Хлiзман
Возле сцены Лёша Абанин ему:
- Владик, у тебя...
- Времени нет!
Выбегает Хлiзман на сцену, хватает микрофон и сходу полному залу говорит:
- Я русский националист!
Зал начинает сдавленно смеяться.
"Вот, с*ки, - думает Владик-, до сих пор своим не считают, ну ладно". Берет себя в руки и говорит:
- Я поволжский немец!
Зал смеётся уже громче.
- Я потомок казаков!
Зал хохочет.
Тут на сцену выходит Лёша Абанин и говорит шепотом:
- Хлiзман, ты кипу забыл снять...
</p>

</section>

<section className={styles.section_gallery}>

<p className={styles.anekdots}>
Пока читал этот тред, анекдот сразу в голову бросился:
Владислав женился на русской девушке. Перед первой брачной ночью отец даёт ему наставления:
- Вначале возьми её на руки и отнеси её на кровать. Покажи, какая Украина сильная. Затем сними с себя свою рубашку - покажи, какая Украина красивая.
- И слышен голос деда из соседней комнаты:
- А затем начинай др****ь - покажи, какая Украина независимая! 
</p>

</section>

<section className={styles.section_gallery}>

<p className={styles.anekdots}>
Переполненный автобус в КИЕВЕ. Стоит ОЧЕНЬ колоритный Владислав: с оселедцем, в жовто-блакитних шароварах. На сиденье сидит негр и читает газету "Жовтневий прапор" (на украiiнскiй мовi). Владик его спрашивает : "А шо пан розумие нашу мову?" Негр : "А як же." Владик, после раздумья: "Так може пан ще й хохол?" Негр : "А як же." Владик, после долгого раздумья: "А я тоди кто ж?" Негр : "Та може и москаль."
🤣🤣🤣🤣🤣🤣 
</p>

</section>

<section className={styles.section_gallery}>

<p className={styles.anekdots}>
Сидят два хохла в тюряге, тут к ним подселяют нового сокамерника. Ну тот здоровается, раскладывает вещи, достает из сумки сало, в общем располагается. Говорит: устал я с дороги, прилягу посплю. Хохлы видят, что он заснул и так жадно на сало смотрят. Один другому говорит: - Владик, а давай сало скуштуем?
- Та ну, а якщо побачить?
- - Да мы кусочек, он даже не замит.
В итоге, разумеется сожрали все сало. Мужик проснулся, в вещах роется и спрашивает хохлов - мужики, вы сало не видели? Те - ни ни дядько, не видели. Мужик: Странно, уже который год по тюрьмам езжу, п*****м ж*пы салом смазываю, ни разу не пропадало. Владик: яж тебе сказал - г*вной воняет, а ты мне "копченое, копченое".
🤣🤣🤣😆😆😆😜😜😜
</p>

</section>

<section className={styles.section_gallery}>

<p className={styles.anekdots}>
Поймали Немца, Англичанина и Владислава. Говорят: кто выпьет 10л водки, пожмет лапу львице и изнасилует индианку того отпустим. Немец выпил 8л водки и упал. Англичанин выпил 10л водки, заходит в клетку с львицей, через некоторое время от туда визги заходят, а Англичанин разорваный лежит перед львицей. Владик выпил 10л водки, заходит в клетку с львицей от туда рев, выходит и спрашует: А где индианка которой нужно пожать лапу?
😋😋😋😋🤣🤣🤣🤣🤣
</p>

</section>

<section className={styles.section_gallery}>

<p className={styles.anekdots}>
Владислав домой принес сало и типа спрятал думал я не увижу. А я терпеть не могу пиндовское всё. Ну я пока он не видел ему горилки туда немного налила))))
теперь сын в больнице с ожогом. сказал что больше не будет пить эту гадость пиндовскую))
</p>

</section>

<section className={styles.section_gallery}>

<p className={styles.anekdots}>
В наши дни Владислав везет группу жидов на экскурсию в Освенцим – посмотреть на развалины концлагеря и узнать, что там да как было с их предками. Автобус переезжает железнодорожный переезд на подъезде к Освенциму и глохнет. Владислав –водитель смотрит на двигатель и понимает, что ремонт займет пол дня, не меньше. Уже вечереет, и жиды в автобусе начали замерзать. Владислав смотрит кругом в поисках хоть какого-нибудь жилья, чтобы их отогреть. Видит – возле переезда стоит маленький домик–будка станционного смотрителя. Владислав входит и видит хозяина – старика, греющего руки над маленькой жестяной печкой-буржуйкой. Владислав просит: «Пан, везу жидов в Освенцим, и автобус сломался. Помоги, пан!» «Чем же я тебе помогу, сынок, – отвечает старик – У меня ведь топка такая маленькая!»
</p>

</section>



			</section>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			


    </div>
  )
}