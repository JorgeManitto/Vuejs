<template>
    <div class="bg">
       <div id="fh5co-main">			
				<div class="all_form">
					<div class="main_title">
                    <h2 class="title">Contact</h2>
				</div>
				<form action="">

				<div class="row">
						<div class="col-md-12">
							<div class="row">
								<div class="col-md-5">
									<div class="form-group">
										<input type="text" class="form-control input" placeholder="Name">
									</div>
									<div class="form-group">
										<input type="text" class="form-control input" placeholder="Email">
									</div>
									<div class="form-group">
										<input type="text" class="form-control input" placeholder="Phone">
									</div>
								</div>
								<div class="col-md-5">
									<div class="form-group">
										<textarea name="" id="message" cols="30" rows="4" class="form-control" placeholder="Message"></textarea>
									</div>
									<div class="form-group">
										<input type="submit" class="ghost-button" value="Send Message">
									</div>
								</div>

							</div>
						</div>

					</div>		

				</form>

				<div class="col-md-4 mt-5 contact_all">

					<div class="data_contact">
						<h4 class="contact_h4">Mis datos</h4>
						<div>
								<div class="fh5co-icon">
									<i class="far fa-envelope"></i>
								</div>
								<div class="fh5co-text">
								<a href="#"><p class="contact_p">jorgemanitto@hotmail.com</p></a>
								</div>
							</div>

					<div class="mt-5">
							<div class="">
								<div class="fh5co-icon">
									<i class="fas fa-map-marker-alt"></i>
								</div>
								<div class="fh5co-text">
									<p class="contact_p">Pilar, Buenos Aires</p>
								</div>
							</div>
						</div>
						<div class="mt-5">
							<div class="fh5co-feature fh5co-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="fh5co-icon">
									<i class="fab fa-whatsapp"></i>
								</div>
								<div class="fh5co-text">

									<a href="https://wa.me/1126358323" target="_blank"><p class="contact_p">wsp</p></a>
								</div>
							</div>
						</div>
				</div>
				</div>


				</div>

		</div>
    </div>
</template>

<style scoped>
.ghost-button {
  cursor: pointer;
  color:  #228896;
  background:  #fff;
  border: 1px solid  #228896;
  font-size: 17px;
  padding: 7px 12px;
  font-weight: normal;
  margin: .2em 0;
  display: inline-block;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  min-width: 40%;
  transition: all .2s ease-in-out;
  width: 21em;
  height: 3em;
}
.ghost-button:hover, .ghost-button:active {
  color:#228896	;
  background: #fff;
  transform: scale(1.1);
}
#fh5co-main{
	background-color: #228896;
	height: 100vh;
	background-image: url(../assets/images/undraw_Forms_re_pkrt.svg);
	background-repeat: no-repeat;
	background-position: 100% 100%;
	background-size: 600px ;
}
.title{
	text-transform: uppercase;
	color: #fff;
	font-weight: 400;
	text-align: left;
	margin-top: 1em;
	text-align: center;
	font-family: 'Nunito Sans', sans-serif;
	
}
.input{
	height: 3em;
	width: 100%;
	margin-bottom:1.5em ;
}
.text-area{
 margin-left:.4em ;
 border-radius: .2em;
 box-sizing: content-box;
}
.row{
	margin:0;
	margin-left: 4em;
}
.data_contact{
	margin-top: 4em;
	margin-left: 9em;
	background-color: rgba(0, 0, 0, .4);
	border-radius: 1em;
	width: 20em;
	height: 24em;
	padding-top: 2em;
}
.contact_p{
	color: #fff;
}
.fh5co-icon i{
	font-size: 2em;
	color: #fff;
}
.contact_h4{
	color: #fff;
}
@media screen and (max-width: 800px){
	#fh5co-main{
		width: 100%;
		height: 100%;
		background-image: none;
	}
	.row{
		margin: 0;
	}
	.ghost-button{
		width:100%;
	}
	.data_contact{
		width: 100%;
		margin: 0;
		margin-left: 0%;
	}
}
</style> 
