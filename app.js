function Modal () {
	this.id = "#stekmodalmeu";

	$(document).on('click', '#stekmodalmeu .closemodal', function() {
    	$(this.id).fadeOut(800, function() {
      	$(this.id).remove();
    	}.bind(this));
  	}.bind(this));
}

Modal.prototype.ModalContent = function(id) {
	var CONSTANS = {
		DIV: '<div id="' + Modal.id + '">',
		DIVEND: '</div>',
		CONTENT: '<p>Przez 25 lat naszej działalności nastąpiło wiele zmian.</p> <p>I tak począwszy od wizerunku zewnętrznego, nazwy, zakresu i miejsc działalności (Myślenice, Skawina, Zakopane, Kraków…) przez formę i sposób serwowania, skończywszy na samym MENU.</p> <p>Niezmienny pozostał klimat, smak i jakość świadczonych usług…</p> <p>Menu ewoluowało na skutek zmiennych oczekiwań gości oraz panujących różnych trendów w dziedzinie żywienia. W ostatnim czasie wiele się mówi na temat zdrowego jedzenia i pochodzenia produktów spożywczych. W związku z tym pragniemy poinformować Państwa, że pomimo iż wiąże się to ze zwiększonym kosztem ponoszonym przez naszą firmę, podajemy Państwu potrawy przygotowane z najwyższej jakości produktów. Nie używamy powszechnie oferowanych tanich i szkodliwych dla zdrowia półproduktów i dodatków zawierających konserwanty, wypełniacze i inne substancje chemiczne występujące pod dziwnymi nazwami i symbolami…</p> <p>Również w związku z apelem Światowej Organizacji Zdrowia (WHO) używamy w technologii gastronomicznej znacznie mniej tłuszczów i soli oraz węglowodanów do zagęszczania zup i sosów.<p> <p>Mimo wprowadzenia tych zmian udało się nam wypracować kompromis i możemy zaoferować Państwu zdrowe i smaczne jedzenie wykonane zgodnie ze starymi tradycyjnymi recepturami.</p> <p>Mamy nadzieję, że trafimy do Państwa gustów i smaków. Wszelkie uwagi i sugestie prosimy kierować bezpośrednio do właścicieli (pod numer telefonu: 603 123 321).<p> <p>Informujemy również, że oprócz obsługi indywidualnej, organizujemy przyjęcia okolicznościowe (wesela, komunie, grile…) w naszej restauracji, albo w miejscu wskazanym przez Państwa – catering (więcej informacji pod numerem telefonu: 603 123 321).</p> <p>Pozdrawiamy i życzymy „smacznego”<p> <p>Joanna i Jacek Szostak</p>'
	}

	$('body').append(CONSTANS.DIV + CONSTANS.CONTENT + CONSTANS.DIVEND);
};

var stekModal = new Modal();

$(document).ready(function() {

	$('#modalstekonmenu').on('click', function (){
		stekModal.ModalContent();
	})


});