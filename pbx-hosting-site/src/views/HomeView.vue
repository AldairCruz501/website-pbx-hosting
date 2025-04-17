<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import { homeData } from '../data/home';
</script>

<template>
  <HeaderComponent />
  <section class="hero-home text-center text-md-start">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-6 mb-4">
					<h1 class="large-title position-relative">Provedores de <span>Telefonía IP</span> en México</h1>
					<p>Optimiza tus comunicaciones con nuestra tecnología VoIP avanzada, segura y personalizada. Mejora la eficiencia y reduce costos hoy mismo.</p>
				</div>
				<div class="col-12 col-lg-6">
					<div class="hero-home-right position-relative">
						<img src="/img/img-hero.webp" class="w-100 h-100" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="features-home">
		<div class="container">
			<div class="row">
				<div v-for="(card, index) in homeData.cards" :key="index" class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" >
					<div class="card text-center">
						<img :src="card.imagen" alt="img-feature" class="img-fluid mx-auto w-75">
						<div class="card-body">
							<h4 class="card-title">{{ card.titulo }}</h4>
							<p class="mb-0">{{ card.descripcion }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="voip-home">
		<div class="container-fluid">
      <div class="container col-xxl-8">
        <div class="row d-flex align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="/img/img-callcenter.webp" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  width="90%" loading="lazy">
          </div>
          <div class="col-lg-6">
			<h4 class="subtitle-hero fs-5">Servicios Escalables</h4>
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Soluciones VoIP Personalizadas para empresas de todos los tamaños</h1>
            <p>Optimiza tu comunicación empresarial con servicios voip adaptados a las necesidades específicas de tu empresa o call center. Desde pequeños negocios hasta grandes corporativos, ofrecemos soluciones personalizadas que impulsan tu éxito.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-lg px-4 me-md-2">Asesorate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
	</section>
	<section class="counter-section">
		<div class="container">
			<div class="row">
				<div class="col-6 col-lg-3 text-center mb-4 mb-lg-0">
					<div class="counter">
                        <h2><span class="fw-bold display-4">100 Mills</span>+</h2>
                        <h4 class="mb-0">De minutos mensuales</h4>
                    </div>
				</div>
				<div class="col-6 col-lg-3 text-center mb-4 mb-md-0">
                    <div class="counter">
                        <h2><span class="fw-bold display-4">99.99</span>%</h2>
                        <h4 class="mb-0">Disponibilidad efectiva</h4>
                    </div>
                </div>
                <div class="col-6 col-lg-3 text-center">
                    <div class="counter">
                        <h2><span class="fw-bold display-4">10</span>+</h2>
                        <h4 class="mb-0">Años de experiencia</h4>
                    </div>
                </div>
                <div class="col-6 col-lg-3 text-center">
                    <div class="counter">
                        <h2><span class="fw-bold display-4">5k</span>+</h2>
                        <h4 class="mb-0">Clientes satisfechos</h4>
                    </div>
                </div>
			</div>
		</div>
	</section>
	<section class="services-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="services-title pt-4">
						<p class="subtitle-service text-uppercase fw-bold mb-3">Nuestros Servicios</p>
						<h1 class="text-uppercase">Para cualquier tipo de empresa</h1>
						<p>Conoce la gran variedad de servicios que te ofrecemos.</p>
					</div>
      			</div>
				  <div v-for="(service, index) in homeData.services" :key="index" class="col-lg-4 col-md-6 service-item">
					<a class="text-black text-decoration-none" href="">
						<div class="block"> <span class="colored-box text-center h3 mb-4">{{service.num}}</span>
							<h3 class="mb-3 service-title">{{ service.nombre }}</h3>
							<p class="mb-0 service-description">{{ service.descripcion }}</p>
						</div>
					</a>
     			</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.hero-home{
		padding: 100px 0px 150px;
		background-color: #fdfdfd;
    	background-position: right center;
	}
	.hero-home p {
		margin-bottom: 35px;
		font-family: "Open Sans", sans-serif !important;
	}
	.hero-home-right{
		width: 100%;
    	height: 636px;
	}
	.features-home .card {
		padding: 50px 30px 40px;
	}
	.features-home img {
		margin-bottom: 40px;
	}
	.features-home .card-title {
		color: var(--secondary_color);
    	margin-bottom: 18px;
    	transition: 0.4s all;
	} 
	.features-home .card:hover .card-title  {
		color: var(--default_color);
    	transition: 0.4s all;
	}
	.features-home p {
		transition: 0.4s all;
		font-family: "Open Sans", sans-serif !important;
	}
	.features-home .cardl:hover p {
		color: var(--default_color);
    	transition: 0.4s all;
	}
	.voip-home {
		background-color: #fdfdfd;
	}
	.subtitle-hero,
	.subtitle-service {
		color: var(--secondary_color)
	}
	.voip-home p {
		font-family: "Open Sans", sans-serif !important;
	}
	.counter-section {
		background: linear-gradient(12deg, rgba(252, 82, 76, 0.959) 40%, rgba(228, 55, 69, 0.95) 100%), url('/img/counter_bg.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.counter {
		padding: 47px 0px;
		border-radius: 5px;
		border: 1px dashed rgba(255, 255, 255, 0.25);
	}
	.counter h2 {
		color: var(--default_color);
		margin-bottom: 20px;
	}
	.counter h4 {
		color: var(--default_color);
	}
	.services-section{
		padding-top: 120px;
		padding-bottom: 120px;
	}
	.services-title {
 		margin-bottom: 30px;
	}
	.services-title {
		font-family: "Open Sans", sans-serif !important;
	}
	.service-item {
		border-top: 1px solid #F4F4F4;
		border-right: 1px solid #F4F4F4;
		transition: 0.3s;
		position: relative;
		z-index: 10;
	}
	.service-item:hover {
		box-shadow: 0px 25px 65px 0px rgba(0, 0, 0, 0.1) !important;
	}
	.service-item .colored-box {
		display: inline-block;
		height: 70px;
		width: 70px;
		line-height: 70px;
		border-radius: 8px;
		color: var(--secondary_color);
		background-color: rgba(181, 81, 81, 0.2);
	}
	.service-item .service-title {
	transition: color 0.3s;
	}
	.service-item .service-description {
		color: var(--text_color);
		font-family: "Open Sans", sans-serif !important;
	}
	.service-item a:hover .service-title {
		color: var(--secondary_color);
	}
	.service-item a:hover .service-description {
		color: var(--color-tercary);
	}
	.service-item .block {
		padding: 35px 39px;
	}
	@media (min-width: 991px) {
	.service-item:nth-child(2), .service-item:nth-child(4) {
		border-left: 1px solid #F4F4F4;
	}
	.service-item:nth-child(4), .service-item:nth-child(5), .service-item:nth-child(6) {
		border-bottom: 1px solid #F4F4F4;
	}
	}
	@media (max-width: 991px) {
	.service-item:nth-child(2), .service-item:nth-child(3), .service-item:nth-child(5) {
		border-left: 1px solid #F4F4F4;
	}
	.service-item:nth-child(6), .service-item:nth-child(5) {
		border-bottom: 1px solid #F4F4F4;
	}
	}
	@media (max-width: 767px) {
	.service-item {
		border: 1px solid #F4F4F4;
		border-bottom: 0;
	}
	}
	.service-item:nth-child(even) .colored-box {
		color: var(--primary_color);
		background-color: rgba(157, 149, 189, 0.2);
	}
	.service-item:hover {
		border-color: transparent;
	}
</style>
